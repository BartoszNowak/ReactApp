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
            ]
        }

    }

    componentWillMount()
    {
        api.getTasks().then((res) => {
            this.setState({
                tasks: res
            })
        });
    }

    render()
    {
        console.log("Tasks: ", this.state.tasks);
        var list = [];
        for (var i = 0; i < 5; i++) 
        {
            list.push(<Task key={i} taskModel={this.state.tasks[0]}/>);
        }

        return(
            <div className = "TaskList">
                {list}
            </div>
        );
    }
}