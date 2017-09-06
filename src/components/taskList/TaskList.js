import React from 'react';
import './TaskList.css';
import Task from '../task/Task';
import $ from 'jquery';

export default class TaskList extends React.Component
{
    constructor() 
    {
        super();
        this.tasks =
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

    componentDidMount() 
    {
        $.get("http://localhost:8080/tasks", function(data){
            console.log(data);
            this.setState({tasks: data}, () => {
                console.log(this.tasks);
            });
        }.bind(this))
        .then(result => {
            var testTab = 
            [
                {
                    "id": "b",
                    "description": "b",
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
            testTab = result;
            console.log(testTab);
            console.log(result);
            this.setState({tasks: result}, () => {
                console.log(this.tasks);
              });
            console.log(this.tasks);
        })
        .catch(error => {
            console.log(error);
        });
    }

    render()
    {
        var list = [];
        for (var i = 0; i < 5; i++) 
        {
            list.push(<Task key={i} task={this.tasks[0]}/>);
        }

        return(
            <div className = "TaskList">
                {list}
                <p>{this.tasks[0].description}</p>
            </div>
        );
    }
}