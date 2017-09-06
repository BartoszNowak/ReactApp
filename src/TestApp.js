import React from 'react';
import NavBar from './components/navBar/NavBar';
import TaskList from './components/taskList/TaskList';
import $ from 'jquery';

window.onload = function () {
    var http = new XMLHttpRequest();
    var task = 
    {
        "id": "a",
        "description": "a",
        "taskData": 
        {
            "numbers": [1, 2],
            "operation": "ADD"
        },
        "result": 
        {
            "value": 0
        }
    }

    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            task = JSON.parse(http.response);
            console.log(task[0].description);
        }
    }

    http.open("GET", "http://localhost:8080/tasks", true);
    http.send();

    $.get("http://localhost:8080/tasks", function (data) {
        task = data;
        console.log(task[0].description);
    });
}

export default class Test extends React.Component 
{
    render() 
    {
        return (
            <div className="Test">
                <NavBar className="nav" />
                <TaskList />
            </div>
        );
    }
}