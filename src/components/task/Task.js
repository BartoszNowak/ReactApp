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

    taskFormatNumbers()
    {
        var numbers = this.props.taskModel.taskData.numbers;
        var result = "";
        
        if(numbers.length !== 0)
        {
            result += numbers[0];
            for(var i = 1; i < numbers.length; i++)
            {
                result += this.getSign() + numbers[i];
            }
        }
        else
        {
            result = this.getSign();
        }
        return result;
    }

    getSign()
    {
        var sign;
        switch(this.props.taskModel.taskData.operation)
        {
            case "ADD":
                sign = " + ";
                break;
            case "SUBTRACT":
                sign = " - ";
                break;
            case "MULTIPLY":
                sign = " * ";
                break;
            case "DIVIDE":
                sign = " / ";
                break;
            default:
                sign = " ? ";
        }
        return sign;
    }

    render()
    {
        console.log(this.props);

        return(
            <div className = "Task">
                <p>Task: {this.props.taskModel.id}</p>
                <p>{this.props.taskModel.description}</p>
                <p>{this.taskFormatNumbers()}</p>
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