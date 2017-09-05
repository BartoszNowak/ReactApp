import React from 'react';
import './Header.css';

export default class Header extends React.Component
{
    handleChange(event)
    {
        const title = event.target.value;
        this.props.changeTitle(title);
    }

    render()
    {
        return(
            <div>
                <h1 className = "Header">{this.props.title}</h1>
                {/* <input onChange={this.handleChange.bind(this)}/> */}
            </div>
        );
    }
}