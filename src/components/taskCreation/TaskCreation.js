import React from 'react';

export default class TaskCreation extends React.Component
{
    render()
    {
        return(
            <div className = "TaskCreation">
                <h4>Add new task:</h4>
                <input/>
                <input/>
                <input/>
                <button>Create</button>
            </div>
        );
    }
}