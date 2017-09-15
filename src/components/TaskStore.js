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
        return fetch(url).then((res) => res.json());
    }

    setData()
    {
        this.fetchData()
        .then((data) => {
            this.state = ({tasks: data});
            this.emit("change");
        });
        //.then(this.emit("change"));
    }

    getAll()
    {
        return this.state.tasks;
    }

    handleAction(action)
    {
        switch(action.type)
        {
            case "CREATE":
                var url = "http://localhost:8080/tasks?description="+ action.description + "&operation=" + action.operation;
                this.refreshViewAfterRequest(url, "post");
                break;
            case "FETCH":
                this.setData();
                break;
            case "EXECUTE_ONE":
                var url = "http://localhost:8080/execute/" + action.id;
                this.refreshViewAfterRequest(url, "get");
                break;
            case "DELETE_ONE":
                var url = "http://localhost:8080/delete/" + action.id;
                this.refreshViewAfterRequest(url, "delete");
                break;
            case "GENERATE":
                var url = "http://localhost:8080/generate?amount=" + action.amount;
                this.refreshViewAfterRequest(url, "post");
                break;
            case "EXECUTE_ALL":
                var url = "http://localhost:8080/execute";
                this.refreshViewAfterRequest(url, "get");
                break;
            case "DELETE_ALL":
                var url = "http://localhost:8080/drop";
                this.refreshViewAfterRequest(url, "delete");
                break;
            case "ADD_NUMBER":
                var url = "http://localhost:8080/taskdata/" + action.id + "?number=" + action.number;
                this.refreshViewAfterRequest(url, "put");
                break;
        }
    }

    refreshViewAfterRequest(url, method)
    {
        fetch(url, { method: method })
        .then(() => this.setData())
        .catch((error) => console.log(error));
        this.emit("change");
    }
}

const taskStore = new TaskStore();
dispatcher.register(taskStore.handleAction.bind(taskStore));
export default taskStore;