import React from 'react';
import NavBar from './components/navBar/NavBar';
import TaskList from './components/taskList/TaskList';

export default class Test extends React.Component 
{
    render() 
    {
        return (
            <div className="Test">
                <NavBar className="nav"/>
                <TaskList/>
            </div>
        );
    }
}