import React from 'react';
import './TaskList.css';
import Task from '../task/Task';
import $ from 'jquery';
import api from '../../api.js';
import * as TaskActions from '../TaskActions';
import TaskStore from '../TaskStore.js';

export default class TaskList extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            tasks: TaskStore.getAll(),
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

    // componentWillMount()
    // {
    //     var taskList = [];
    //     var tasks = [];
    //     var amount;
    //     this.getTasks().then((res) => 
    //     {
    //         this.setState({tasks: res}, () => 
    //         {
    //             for (var i = 0; i < res.length; i++) 
    //             {
    //                 taskList.push(<Task key={i} taskModel={tasks[i]}/>);
    //             }
    //             this.setState({list: taskList});
    //         });
    //     });
    // }

    componentWillMount()
    {
        TaskStore.on("change", () => {
            this.setState({tasks: TaskStore.getAll()});
        });
    }

    getTasks()
    {
        var url = "http://localhost:8080/tasks";
        return fetch(url).then((res) => res.json());
    }

    createTask()
    {
        TaskActions.loadData();
    }

    render()
    {
        console.log("Tasks: ", this.state);

        const {tasks} = this.state;
        const TaskComponents = tasks.map((task) => {
            return <Task key={task.id} taskModel={task} {...Task}/>;
        });

        return(
            <div className = "TaskList">
                <button onClick={this.createTask.bind(this)}>Click me!</button>
                {/* {this.state.list} */}
                {TaskComponents}
            </div>
        );
    }
}