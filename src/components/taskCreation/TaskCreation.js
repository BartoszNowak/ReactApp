import React from 'react';
import * as TaskActions from '../TaskActions';

export default class TaskCreation extends React.Component
{
    addDefaultTask()
    {
        TaskActions.createTask();
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