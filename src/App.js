import React, { Component } from 'react';
import './App.css';

import Input from './Input.js';
import Output from './Output.js';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            form: {
                noun: '',
                adjective: '',
                verb: ''
            }
        }
    }


    submitInput = (input) => {
        this.setState({ form: input})

    }

    render () {
        return (
            <div>
                <h1>Madlibs!</h1>

                <Input submitInput = { this.submitInput }/>

                <Output noun = {this.state.form.noun} adjective = {this.state.form.adjective} verb = {this.state.form.verb}/>
            </div>
        );
    }
}
