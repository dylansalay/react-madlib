import React, { Component } from 'react';
import './App.css';

export default class Input extends Component {
    render () {
        const { submitInput } = this.props
        return (
            <div>
                <label htmlFor="nouns">Nouns:</label>
                <input type="text" name="nouns" id="nouns"></input>
                <label htmlFor="adjectives">Adjectives:</label>
                <input type="text" name ="adjectives" id="adjectives"></input>
                <button onClick={submitInput}>Submit</button>
            </div>
        );
    }
}
