import React/* , { Component } */ from 'react';
import './header.css';

export default class Header extends React.Component
{
    render()
    {
        return(
        <h1 className = "Header">{this.props.title}</h1>
        );
    }
}