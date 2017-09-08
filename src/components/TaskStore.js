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

    createTask()
    {
        var url = "http://localhost:8080/tasks?description=Desc";
        fetch(url, { method: "post" });
        this.emit("change");
    }

    handleAction(action)
    {
        console.log("Store received an action", action);
        if (action.type === "CREATE") 
        {
            this.createTask();
        }

        if (action.type === "FETCH") 
        {
            this.setData();
        }
    }
}

const taskStore = new TaskStore();
dispatcher.register(taskStore.handleAction.bind(taskStore));
export default taskStore;