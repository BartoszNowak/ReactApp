import React from 'react';
import './Task.css'

export default class Task extends React.Component
{

    render()
    {
        console.log(this.props);

        return(
            <div className = "Task">
                <p>Task: {this.props.taskModel.id}</p>
                <p>{this.props.taskModel.description}</p>
                <p>{this.props.taskModel.taskData.numbers} {this.props.taskModel.taskData.operation}</p>
                <p>Result: {this.props.taskModel.result.value}</p>
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