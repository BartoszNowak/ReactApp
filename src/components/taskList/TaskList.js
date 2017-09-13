import React from 'react';
import './TaskList.css';
import Task from '../task/Task';
import * as TaskActions from '../TaskActions';
import TaskStore from '../TaskStore.js';

export default class TaskList extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            tasks: TaskStore.getAll()
        }

    }

    componentWillMount()
    {
        //Load initial data
        TaskActions.loadData();
        TaskStore.on("change", () => {
            this.setState({tasks: TaskStore.getAll()});
        });
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
                <button onClick={this.createTask.bind(this)}>Load!</button>
                {TaskComponents}
            </div>
        );
    }
}