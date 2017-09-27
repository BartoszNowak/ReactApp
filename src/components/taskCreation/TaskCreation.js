import React from 'react';
import * as TaskActions from '../TaskActions';
import './TaskCreation.css';
import CONST from '../../Const.js';

export default class TaskCreation extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            inputValue: "",
            dropDownValue: CONST.OPERATIONS.ADD
        }
    }

    render()
    {
        return(
            <div className = "TaskCreation">
                <h4>Add new task:</h4>
                <input onChange={this.handleChange.bind(this)} value={this.state.inputValue} type="text" placeholder="Description"/>
                <select onChange={this.handleOperationChange.bind(this)} className="Operation" name="operations">
                    <option value={CONST.OPERATIONS.ADD}>+</option>
                    <option value={CONST.OPERATIONS.SUBTRACT}>-</option>
                    <option value={CONST.OPERATIONS.MULTIPLY}>*</option>
                    <option value={CONST.OPERATIONS.DIVIDE}>/</option>
                </select>
                <button onClick={this.addTask.bind(this)}>Create</button>
            </div>
        );
    }

    handleChange(event)
    {
        this.setState({inputValue: event.target.value});
    }

    handleOperationChange(event)
    {
        this.setState({dropDownValue: event.target.value});
    }

    addTask()
    {
        if(this.state.inputValue !== "") 
        {
            TaskActions.createTask(this.state.inputValue, this.state.dropDownValue);
        }
        this.setState({inputValue: ""});
    }
}