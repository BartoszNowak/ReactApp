import React from 'react';
import './Task.css'

export default class Task extends React.Component
{
    render()
    {
        return(
            <div className = "Task">
                <p>Task: id</p>
                <p>Here'll be task desription...</p>
                <p>1 + 2 + 3 + 4 + 5 + ...</p>
                <p>Result: -1/12</p>
                <button className="EditButton">
                    Edit
                </button>
                <button className="ExecButton">
                    Execute
                </button>
                <button className="DeleteButton">
                    Delete
                </button>
            </div>
        );
    }
}