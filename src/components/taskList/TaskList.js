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

    componentWillMount()
    {
        api.getTasks().then((res) => {
            this.setState({
                tasks: res
            })
        });
    }

    componentDidUpdate()
    {
        //this method updates page after state gets the needed data.
        var taskList = [];
        var amount = this.state.tasks.length;
        for (var i = 0; i < amount; i++) 
        {
            taskList.push(<Task key={i} taskModel={this.state.tasks[i]}/>);
        }
        this.setState({list: taskList})
    }

    render()
    {
        console.log("Tasks: ", this.state.tasks);
        //creating list here make it show immediately but the data isn't updated yet, 
        //so we can't even know how many of these should be instantiated.
        //
        // var list = [];
        // var amount = this.state.tasks.length;
        // for (var i = 0; i < 5; i++) 
        // {
        //     list.push(<Task key={i} taskModel={this.state.tasks[0]}/>);
        // }

        return(
            <div className = "TaskList">
                {this.state.list}
            </div>
        );
    }
}