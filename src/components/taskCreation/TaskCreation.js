import React from 'react';
import * as TaskActions from '../TaskActions';
import './TaskCreation.css';

export default class TaskCreation extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            inputValue: "",
            dropDownValue: "ADD"
        }
    }

    addDefaultTask()
    {
        if(this.state.inputValue !== "") 
        {
            TaskActions.createTask(this.state.inputValue, this.state.dropDownValue);
        }
        this.setState({inputValue: ""});
    }

    handleChange(event)
    {
        this.setState({inputValue: event.target.value});
        console.log(this.state.inputValue);
    }

    handleOperationChange(event)
    {
        this.setState({dropDownValue: event.target.value});
        console.log(this.state.dropDownValue);
    }

    render()
    {
        return(
            <div className = "TaskCreation">
                <h4>Add new task:</h4>
                <input onChange={this.handleChange.bind(this)} value={this.state.inputValue} type="text" placeholder="Description"/>
                <select onChange={this.handleOperationChange.bind(this)} className="Operation" name="operations">
                    <option value="ADD">+</option>
                    <option value="SUBTRACT">-</option>
                    <option value="MULTIPLY">*</option>
                    <option value="DIVIDE">/</option>
                </select>
                <button onClick={this.addDefaultTask.bind(this)}>Create</button>
            </div>
        );
    }
}