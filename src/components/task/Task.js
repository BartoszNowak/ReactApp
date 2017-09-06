import React from 'react';
import './Task.css'

export default class Task extends React.Component
{
    constructor()
    {
        super();
        this.data = 
        {
            "id": "",
            "description": "",
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

    render()
    {
        return(
            <div className = "Task">
                <p>Task: {this.props.a}</p>
                <p>Here'll be task desription...</p>
                <p>1 + 2 + 3 + 4 + 5 + 6 + 7 + ...</p>
                <p>Result: -1/12</p>
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