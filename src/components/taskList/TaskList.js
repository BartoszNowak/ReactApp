import React from 'react';
import './TaskList.css';
import Task from '../task/Task';
import $ from 'jquery';
import api from '../../api.js';

export default class TaskList extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            tasks:
            [
                {
                    "id": "a",
                    "description": "a",
                    "taskData": 
                    {
                        "numbers": [],
                        "operation": "ADD"
                    },
                    "result": 
                    {
                        "value": 0
                    }
                }
            ],
            list: []
        }

    }

    //sets state to tasks from spring
    // componentWillMount()
    // {
    //     console.log("will mount ", this.state.tasks);
    //     this.getTasks().then((res) => {
    //         this.setState({
    //             tasks: res
    //         })
    //     });
    // }

    componentWillMount()
    {
        var taskList = [];
        var tasks = [];
        var amount;
        this.getTasks().then((res) => 
        {
            this.setState({tasks: res}, () => 
            {
                for (var i = 0; i < res.length; i++) 
                {
                    taskList.push(<Task key={i} taskModel={tasks[i]}/>);
                }
                this.setState({list: taskList});
            });
        });
    }

    getTasks()
    {
        var url = "http://localhost:8080/tasks";
        return fetch(url).then((res) => res.json());
    }

    render()
    {
        console.log("Tasks: ", this.state.tasks);
        return(
            <div className = "TaskList">
                {this.state.list}
            </div>
        );
    }
}