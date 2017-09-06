import React from 'react';
import NavBar from './components/navBar/NavBar';
import TaskList from './components/taskList/TaskList';
import $ from 'jquery'; 

window.onload = function()
{
    var http = new XMLHttpRequest();

    http.onreadystatechange = function()
    {
        if(http.readyState === 4 && http.status === 200)
        {
            console.log(JSON.parse(http.response));
        }
    }

    http.open("GET", "http://localhost:8080/tasks", true);
    http.send();

    $.get("http://localhost:8080/tasks", function(data) {
        console.log(data);
    });
}

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