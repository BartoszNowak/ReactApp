import React from 'react';

export default class TaskCreation extends React.Component
{
    render()
    {
        return(
            <div className = "TaskCreation">
                <p>Add new task:</p>
                <input/>
                <input/>
                <input/>
                <button>Create</button>
            </div>
        );
    }
}