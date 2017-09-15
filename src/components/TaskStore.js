import { EventEmitter } from "events";
import dispatcher from "./Dispatcher";

class TaskStore extends EventEmitter
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            tasks: []
        }
    }

    fetchData()
    {
        var url = "http://localhost:8080/tasks";
        return fetch(url).then((res) => {
            let result = res.json()
            console.log(result)
            return result
        });
    }

    setData()
    {
        this.fetchData()
        .then((data) => {
            console.log('received',data,this.state)
            this.state = ({tasks: data})
            this.emit("change")
        })
        //.then(this.emit("change"));
    }

    getAll()
    {
        return this.state.tasks;
    }

    createTask(description, operation)
    {
        var url = "http://localhost:8080/tasks?description="+ description + "&operation=" + operation;
        fetch(url, { method: "post" })
        .then((data) => {
            console.log('try to fetch data',data)
            this.setData()
        }).catch((error) => console.log(error));
        this.emit("change");
    }

    deleteTask(id)
    {
        var url = "http://localhost:8080/delete/" + id;
        fetch(url, { method: "delete" })
        .then((data) => {
            console.log('try to fetch data',data)
            this.setData()
        }).catch((error) => console.log(error));
        this.emit("change");
    }

    executeTask(id)
    {
        var url = "http://localhost:8080/execute/" + id;
        fetch(url)
        .then((data) => {
            console.log('try to fetch data',data)
            this.setData()
        }).catch((error) => console.log(error));
        this.emit("change");
    }

    generateTasks(amount)
    {
        var url = "http://localhost:8080/generate?amount=" + amount;
        fetch(url, { method: "post" })
        .then((data) => {
            console.log('try to fetch data',data)
            this.setData()
        }).catch((error) => console.log(error));
        this.emit("change");
    }

    deleteAll()
    {
        var url = "http://localhost:8080/drop";
        fetch(url, { method: "delete" })
        .then((data) => {
            console.log('try to fetch data',data)
            this.setData()
        }).catch((error) => console.log(error));
        this.emit("change");
    }

    executeAll()
    {
        var url = "http://localhost:8080/execute";
        fetch(url)
        .then((data) => {
            console.log('try to fetch data',data)
            this.setData()
        }).catch((error) => console.log(error));
        this.emit("change");
    }

    addNumber(id, number)
    {
        var url = "http://localhost:8080/taskdata/" + id + "?number=" + number;
        fetch(url, { method: "put" })
        .then((data) => {
            console.log('try to fetch data',data)
            this.setData()
        }).catch((error) => console.log(error));
        this.emit("change");
    }

    handleAction(action)
    {
        switch(action.type)
        {
            case "CREATE":
                this.createTask(action.description, action.operation);
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
            case "ADD_NUMBER":
                this.addNumber(action.id, action.number);
                break;
        }
    }
}

const taskStore = new TaskStore();
dispatcher.register(taskStore.handleAction.bind(taskStore));
export default taskStore;