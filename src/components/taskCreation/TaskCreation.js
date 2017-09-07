import React from 'react';
import api from '../../api.js';
import TaskList from '../taskList/TaskList';

export default class TaskCreation extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    addDefaultTask()
    {
        var url = "http://localhost:8080/tasks?description=Desc";
        fetch(url, {method: "post"});
        TaskList
    }

    render()
    {
        return(
            <div className = "TaskCreation">
                <h4>Add new task:</h4>
                <input/>
                <input/>
                <input/>
                <button onClick={this.addDefaultTask.bind(this)}>Create</button>
            </div>
        );
    }
}