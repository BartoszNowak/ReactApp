import React/* , { Component } */ from 'react';
import Header from './header';

export default class Test extends React.Component 
{
    constructor()
    {
        super();
        this.state = {"text": "Old text"};
    }

    render() 
    {
        setTimeout(() => {
            this.setState({"text": "New text"});
        }, 5000);

        var list = [];
        for (var i = 0; i < 3; i++) 
        {
            list.push(<Header title={i} key={i}/>);
        }

        return (
            <div className="Test">
                <Header title={this.state.text}/>
                {list}
            </div>
        );
    }
}