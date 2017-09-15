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
        fetch(url)
            .then((res) => 
            {
                res.json()
                    .then((data) => 
                    {
                        this.state = ({ tasks: data });
                        this.emit("change");
                    });
            });
    }

    getAll()
    {
        return this.state.tasks;
    }

    handleAction(action)
    {
        var url;
        switch(action.type)
        {
            case "CREATE":
                url = "http://localhost:8080/tasks?description="+ action.description + "&operation=" + action.operation;
                this.refreshViewAfterRequest(url, "post");
                break;
            case "FETCH":
                this.fetchData();
                break;
            case "EXECUTE_ONE":
                url = "http://localhost:8080/execute/" + action.id;
                this.refreshViewAfterRequest(url, "get");
                break;
            case "DELETE_ONE":
                url = "http://localhost:8080/delete/" + action.id;
                this.refreshViewAfterRequest(url, "delete");
                break;
            case "GENERATE":
                url = "http://localhost:8080/generate?amount=" + action.amount;
                this.refreshViewAfterRequest(url, "post");
                break;
            case "EXECUTE_ALL":
                url = "http://localhost:8080/execute";
                this.refreshViewAfterRequest(url, "get");
                break;
            case "DELETE_ALL":
                url = "http://localhost:8080/drop";
                this.refreshViewAfterRequest(url, "delete");
                break;
            case "ADD_NUMBER":
                url = "http://localhost:8080/taskdata/" + action.id + "?number=" + action.number;
                this.refreshViewAfterRequest(url, "put");
                break;
            default:
        }
    }

    refreshViewAfterRequest(url, method)
    {
        fetch(url, { method: method })
        .then(() => this.fetchData())
        .catch((error) => console.log(error));
        this.emit("change");
    }
}

const taskStore = new TaskStore();
dispatcher.register(taskStore.handleAction.bind(taskStore));
export default taskStore;