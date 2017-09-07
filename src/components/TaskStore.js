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

    getAll()
    {
        return this.state.tasks;
    }

    createTask()
    {
        const id = "" + Date.now();
        this.state.tasks.push(
            {
                "id": id,
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
            });
        this.emit("change");
    }

    handleAction(action)
    {
        console.log("Store received an action", action);
        if (action.type === "e") 
        {
            this.createTask();
        }

        if (action.type === "FETCH") 
        {
            this.fetchData().then((res) => 
            {
                // this.setState({tasks: res});
            });
        }
    }
}

const taskStore = new TaskStore();
dispatcher.register(taskStore.handleAction.bind(taskStore));
export default taskStore;