import React from 'react';
import Header from './Header';

export default class Test extends React.Component 
{
    constructor()
    {
        super();
        this.state = {"text": "Old text"};
    }

    chengeTitle(text)
    {
        this.setState({text});
    }

    render() 
    {
        var list = [];
        for (var i = 0; i < 3; i++) 
        {
            list.push(<Header title={i} key={i}/>);
        }

        return (
            <div className="Test">
                <Header changeTitle={this.chengeTitle.bind(this)} title={this.state.text}/>
                {list}
            </div>
        );
    }
}