import React from 'react';
import './NavBar.css';
import TaskCreation from '../taskCreation/TaskCreation';
import TaskGeneration from '../taskGeneration/TaskGeneration';
import logo from '../../logo.svg';

export default class NavBar extends React.Component
{
    render()
    {
        return(
            <div className = "NavBar">
                <TaskCreation/>
                <TaskGeneration/>
                <img src={logo} className="App-logo" alt="logo" />
                <button className="Exec">Execute all</button>
                <button className="Del">Delete all</button>
            </div>
        );
    }
}