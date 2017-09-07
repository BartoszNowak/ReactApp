import React from 'react';
import './Task.css'

export default class Task extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            task:
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
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({task: newProps.taskModel});
    }

    render()
    {
        console.log(this.props);

        return(
            <div className = "Task">
                <p>Task: {this.state.task.id}</p>
                <p>{this.state.task.description}</p>
                <p>{this.state.task.taskData.numbers} {this.state.task.taskData.operation}</p>
                <p>Result: {this.state.task.result.value}</p>
                <button>
                    Edit
                </button>
                <button>
                    Execute
                </button>
                <button className="DeleteButton">
                    Delete
                </button>
            </div>
        );
    }
}