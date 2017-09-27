import React from 'react';
import './Task.css'
import * as TaskActions from '../TaskActions';
import CONST from '../../Const.js';

export default class Task extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {inputValue: ""}
    }

    render()
    {
        return(
            <div className = "Task">
                <p>Task: {this.props.taskModel.id}</p>
                <p>{this.props.taskModel.description}</p>
                <p>{this.taskFormatNumbers()}</p>
                <p>Result: {this.props.taskModel.result.value}</p>
                <input onChange={this.handleChange.bind(this)} value={this.state.inputValue} type="number" placeholder="Number"/>
                <button onClick={this.generateTasks.bind(this)}>Add</button>
                <button onClick={this.executeTask.bind(this)}>
                    Execute
                </button>
                <button onClick={this.deleteTask.bind(this)} className="DeleteButton">
                    Delete
                </button>
            </div>
        );
    }

    taskFormatNumbers()
    {
        var numbers = this.props.taskModel.taskData.numbers;
        var result = "";
        
        if(numbers.length > 1)
        {
            result += numbers[0];
            for(var i = 1; i < numbers.length; i++)
            {
                result += this.getSign() + numbers[i];
            }
        }
        else if(numbers.length === 1)
        {
            result += numbers[0] + this.getSign();
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
            case CONST.OPERATIONS.ADD:
                sign = " + ";
                break;
            case CONST.OPERATIONS.SUBTRACT:
                sign = " - ";
                break;
            case CONST.OPERATIONS.MULTIPLY:
                sign = " * ";
                break;
            case CONST.OPERATIONS.DIVIDE:
                sign = " / ";
                break;
            default:
                sign = " ? ";
        }
        return sign;
    }

    handleChange(event)
    {
        this.setState({inputValue: event.target.value});
    }

    generateTasks()
    {
        if(this.state.inputValue !== "")
        {
            TaskActions.addNumberToTask(this.props.taskModel.id, this.state.inputValue);
        }
        this.setState({inputValue: ""});
    }

    executeTask()
    {
        TaskActions.executeTask(this.props.taskModel.id);
    }

    deleteTask()
    {
        TaskActions.deleteTask(this.props.taskModel.id);
    }
}