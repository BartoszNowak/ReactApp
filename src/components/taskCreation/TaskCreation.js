import React from 'react';
import * as TaskActions from '../TaskActions';

export default class TaskCreation extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {inputValue: ""}
    }

    addDefaultTask()
    {
        if(this.state.inputValue !== "") 
        {
            TaskActions.createTask(this.state.inputValue);
        }
        this.setState({inputValue: ""});
    }

    handleChange(event)
    {
        this.setState({inputValue: event.target.value});
        console.log(this.state.inputValue);
    }

    render()
    {
        return(
            <div className = "TaskCreation">
                <h4>Add new task:</h4>
                <input onChange={this.handleChange.bind(this)} value={this.state.inputValue} type="text" placeholder="Description"/>
                <button onClick={this.addDefaultTask.bind(this)}>Create</button>
            </div>
        );
    }
}