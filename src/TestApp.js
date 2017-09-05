import React from 'react';
import Header from './Header';
import Task from './components/task/Task';
import NavBar from './components/navBar/NavBar';
import TaskList from './components/taskList/TaskList';
import './TestApp.css';

export default class Test extends React.Component 
{
    constructor()
    {
        super();
        this.state = {"text": "Old text"};
    }

    chengeTitle(text)
    {
        this.setState({text});
    }

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