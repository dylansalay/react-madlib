import React, { Component } from 'react';
import './App.css';

export default class Output extends Component {
    render () {
        return (
            <p> Today, I saw a {this.props.adjective} {this.props.noun} {this.props.verb} across the road! </p>
        );
    }
}
