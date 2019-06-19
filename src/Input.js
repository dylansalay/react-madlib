import React, { Component } from 'react';
import './App.css';

export default class Input extends Component {
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

    handleChange = (e) => {
        const { form } = this.state
        form[e.target.name]=e.target.value
        this.setState({form})
    }

    handleLocalSubmit = () => {
        const { submitInput } = this.props
        const { form } = this.state
        submitInput(form)
    }

    render () {
        return (
            <div className="App">
                <h3> Enter Values </h3>
                    <input
                        name='noun' value={ this.state.form.noun }
                        onChange={this.handleChange}
                        placeholder="Input Noun"/>
                    <input
                        name='adjective' value ={ this.state.form.adjective }
                        onChange={this.handleChange}
                        placeholder="Input Adjective"/>
                    <input
                        name='verb' value ={ this.state.form.verb }
                        onChange={this.handleChange}
                        placeholder="Input Verb"/>

                    <button onClick = {this.handleLocalSubmit} type='submit'> Submit
                    </button>
            </div>
        );
    }
}
