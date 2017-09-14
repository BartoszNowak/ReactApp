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
        TaskActions.loadData();
        TaskStore.on("change", () => {
            this.setState({tasks: TaskStore.getAll()});
        });
    }

    render()
    {
        const {tasks} = this.state;
        const TaskComponents = Array.isArray(tasks) && tasks.map((task) => {
            return <Task key={task.id} taskModel={task} {...Task}/>;
        });

        return(
            <div className = "TaskList">
                <button onClick={this.refresh.bind(this)}>Load!</button>
                {TaskComponents}
            </div>
        );
    }

    refresh()
    {
        TaskActions.loadData();
    }
}