import { EventEmitter } from "events";
import dispatcher from "./Dispatcher";
import CONST from '../Const.js';

const SERVER = "http://192.168.32.13:8090";

const HTTP_METHODS = 
{ 
    GET: "get", 
    POST: "post", 
    PUT: "put", 
    DELETE: "delete"
}

const ENDPOINTS = 
{ 
    TASKS: "/tasks", 
    EXECUTE: "/execute", 
    DELETE: "/delete", 
    GENERATE: "/generate", 
    DROP: "/drop", 
    TASK_DATA: "/taskdata"
}

const PARAMETERS = 
{ 
    DESCRIPTION: "description=", 
    OPERATION: "operation=", 
    AMOUNT: "amount=", 
    NUMBER: "number=" 
}

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
        let url = SERVER + ENDPOINTS.TASKS;
        fetch(url)
            .then((res) => 
            {
                res.json()
                    .then((data) => 
                    {
                        this.state = ({ tasks: data });
                        this.emit(CONST.EVENTS.CHANGE);
                    });
            });
    }

    getAll()
    {
        return this.state.tasks;
    }

    handleAction(action)
    {
        let url;
        switch(action.type)
        {
            case CONST.EVENTS.CREATE:
                url = SERVER + ENDPOINTS.TASKS + "?" + PARAMETERS.DESCRIPTION
                + action.description + "&" + PARAMETERS.OPERATION + action.operation;
                this.refreshViewAfterRequest(url, HTTP_METHODS.POST);
                break;
            case CONST.EVENTS.FETCH:
                this.fetchData();
                break;
            case CONST.EVENTS.EXECUTE_ONE:
                url = SERVER + ENDPOINTS.EXECUTE + "/" + action.id;
                this.refreshViewAfterRequest(url, HTTP_METHODS.GET);
                break;
            case CONST.EVENTS.DELETE_ONE:
                url = SERVER + ENDPOINTS.DELETE + "/" + action.id;
                this.refreshViewAfterRequest(url, HTTP_METHODS.DELETE);
                break;
            case CONST.EVENTS.GENERATE:
                url = SERVER + ENDPOINTS.GENERATE + "?" + PARAMETERS.AMOUNT + action.amount;
                this.refreshViewAfterRequest(url, HTTP_METHODS.POST);
                break;
            case CONST.EVENTS.EXECUTE_ALL:
                url = SERVER + ENDPOINTS.EXECUTE;
                this.refreshViewAfterRequest(url, HTTP_METHODS.GET);
                break;
            case CONST.EVENTS.DELETE_ALL:
                url = SERVER + ENDPOINTS.DROP;
                this.refreshViewAfterRequest(url, HTTP_METHODS.DELETE);
                break;
            case CONST.EVENTS.ADD_NUMBER:
                url = SERVER + ENDPOINTS.TASK_DATA + "/" + action.id + "?" + PARAMETERS.NUMBER + action.number;
                this.refreshViewAfterRequest(url, HTTP_METHODS.PUT);
                break;
            default:
        }
    }

    refreshViewAfterRequest(url, method)
    {
        fetch(url, { method: method })
        .then(() => this.fetchData())
        .catch((error) => console.log(error));
        this.emit(CONST.EVENTS.CHANGE);
    }
}

const taskStore = new TaskStore();
dispatcher.register(taskStore.handleAction.bind(taskStore));
export default taskStore;