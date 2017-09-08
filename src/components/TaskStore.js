import { EventEmitter } from "events";
import dispatcher from "./Dispatcher";

class TaskStore extends EventEmitter
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            tasks:
            [
                {
                    "id": "a",
                    "description": "a",
                    "taskData": 
                    {
                        "numbers": [],
                        "operation": "ADD"
                    },
                    "result": 
                    {
                        "value": 0
                    }
                }
            ]
        }
    }

    fetchData()
    {
        var url = "http://localhost:8080/tasks";
        return fetch(url).then((res) => res.json());
    }

    setData()
    {
        this.fetchData()
        .then((data) => this.state = ({tasks: data}))
        .then(console.log("State: ", this.state.tasks))
        .then(this.emit("change"));
    }

    getAll()
    {
        return this.state.tasks;
    }

    createTask(description)
    {
        var url = "http://localhost:8080/tasks?description=" + description;
        fetch(url, { method: "post" });
        this.emit("change");
    }

    deleteTask(id)
    {
        var url = "http://localhost:8080/delete/" + id;
        fetch(url, { method: "delete" });
        this.emit("change");
    }

    executeTask(id)
    {
        var url = "http://localhost:8080/execute/" + id;
        fetch(url);
        this.emit("change");
    }

    generateTasks(amount)
    {
        var url = "http://localhost:8080/generate?amount=" + amount;
        fetch(url, { method: "post" });
        this.emit("change");
    }

    deleteAll()
    {
        var url = "http://localhost:8080/drop";
        fetch(url, { method: "delete" });
        this.emit("change");
    }

    executeAll()
    {
        var url = "http://localhost:8080/execute";
        fetch(url);
        this.emit("change");
    }

    handleAction(action)
    {
        console.log("Store received an action", action);
        switch(action.type)
        {
            case "CREATE":
                this.createTask(action.description);
                break;
            case "FETCH":
                this.setData();
                break;
            case "EXECUTE_ONE":
                this.executeTask(action.id);
                break;
            case "DELETE_ONE":
                this.deleteTask(action.id);
                break;
            case "GENERATE":
                this.generateTasks(action.amount);
                break;
            case "EXECUTE_ALL":
                this.executeAll();
                break;
            case "DELETE_ALL":
                this.deleteAll();
                break;
        }
    }
}

const taskStore = new TaskStore();
dispatcher.register(taskStore.handleAction.bind(taskStore));
export default taskStore;