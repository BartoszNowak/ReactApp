import React from 'react';
import './NavBar.css';
import TaskCreation from '../taskCreation/TaskCreation';
import TaskGeneration from '../taskGeneration/TaskGeneration';
import logo from '../../logo.svg';
import * as TaskActions from '../TaskActions';

export default class NavBar extends React.Component
{
    execAll()
    {
        TaskActions.executeAll();
    }

    delAll()
    {
        TaskActions.deleteAll();
    }

    render()
    {
        return(
            <div className = "NavBar">
                <TaskCreation/>
                <TaskGeneration/>
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={this.execAll.bind(this)} className="Exec">Execute all</button>
                <button onClick={this.delAll.bind(this)} className="Del">Delete all</button>
            </div>
        );
    }
}