import React from 'react';
import './TaskList.css';
import Task from '../task/Task';

export default class TaskList extends React.Component
{
    render()
    {
        var list = [];
        for (var i = 0; i < 5; i++) 
        {
            list.push(<Task key={i}/>);
        }

        return(
            <div className = "TaskList">
                {list}
            </div>
        );
    }
}