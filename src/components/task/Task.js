import React from 'react';
import './Task.css'
import * as TaskActions from '../TaskActions';

export default class Task extends React.Component
{
    executeTask()
    {
        TaskActions.executeTask(this.props.taskModel.id);
    }

    deleteTask()
    {
        TaskActions.deleteTask(this.props.taskModel.id);
    }

    render()
    {
        console.log(this.props);

        return(
            <div className = "Task">
                <p>Task: {this.props.taskModel.id}</p>
                <p>{this.props.taskModel.description}</p>
                <p>{this.props.taskModel.taskData.numbers} {this.props.taskModel.taskData.operation}</p>
                <p>Result: {this.props.taskModel.result.value}</p>
                <button onClick={this.executeTask.bind(this)}>
                    Execute
                </button>
                <button onClick={this.deleteTask.bind(this)} className="DeleteButton">
                    Delete
                </button>
            </div>
        );
    }
}