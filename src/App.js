import React, { Component } from 'react';
import './App.css';

import Input from './Input.js';
import Output from './Output.js';

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            nouns: [],
            adjectives: []
        }
    }

    submitInput = () => {
        const { nouns, adjectives} = this.state
        nouns.push((document.getElementById('nouns').value))
        this.setState({ nouns })
        console.log(nouns);
    }

    render () {

        return (
            <div>
                <h1>Hello!</h1>

                <Input nouns = { this.state.nouns } adjectives = { this.state.adjectives } submitInput = { this.submitInput }/>

                <Output nouns = { this.state.nouns } adjectives = { this.state.adjectives } />
            </div>
        );
    }
}

export default App;
