import React from 'react';
import * as TaskActions from '../TaskActions';

export default class TaskGeneration extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {inputValue: ""}
    }

    render()
    {
        return(
            <div className = "TaskCreation">
                <h4>Generate tasks:</h4>
                <input onChange={this.handleChange.bind(this)} value={this.state.inputValue} type="number" placeholder="Amount"/>
                <button onClick={this.generateTasks.bind(this)}>Create</button>
            </div>
        );
    }

    handleChange(event)
    {
        this.setState({inputValue: event.target.value});
    }

    generateTasks()
    {
        if(this.state.inputValue !== "")
        {
            TaskActions.generateTasks(this.state.inputValue);
        }
        this.setState({inputValue: ""});
    }
}