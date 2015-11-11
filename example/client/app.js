'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FbPageApp from '../../src/containers/app';
import theme from './theme';

const DEFAULT_NAME = 'facebook';
const DEFAULT_WIDTH = 50;

class FbPageForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: DEFAULT_NAME,
            width: DEFAULT_WIDTH
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onWidthChange = this.onWidthChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onNameChange(evnt){
        this.setState({ name: evnt.target.value });
    }
    onWidthChange(evnt){
        const width = evnt.target.value;
        this.setState({ width });
        this.props.onWidthChange(width);
    }
    onFormSubmit(evnt){
        evnt.preventDefault();
        this.props.onSubmit(this.state);
    }
    render(){
        return (
            <form style={theme.form} onSubmit={this.onFormSubmit}>
                <fieldset style={theme.fieldset}>
                    <label style={theme.label}>Page:</label>
                    <input
                        type="text"
                        onChange={this.onNameChange}
                        value={this.state.name}
                        style={theme.input.text}
                    />
                    <button
                        type="submit"
                        style={theme.input.button}>
                        Load
                    </button>
                </fieldset>
                <fieldset style={theme.fieldset}>
                    <label style={theme.label}>Width:</label>
                    <input
                        type="range"
                        onChange={this.onWidthChange}
                        value={this.state.width}
                        style={theme.input.range}
                        min="1"
                        max="100"
                    />
                    {this.state.width}%
                </fieldset>
            </form>
        );
    }
}

FbPageForm.propTypes = {
    onSubmit: React.PropTypes.func,
    onWidthChange: React.PropTypes.func
};

class FbPageExample extends React.Component {
    constructor(props){
        super(props);
        this.state = { name: DEFAULT_NAME, width: DEFAULT_WIDTH };
        this.onWidthChange = this.onWidthChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onWidthChange(width){
        this.setState({ width });
    }
    onFormSubmit(form){
        this.setState({ name: form.name });
    }
    render(){
        return (
            <div>
                <FbPageForm
                    onSubmit={this.onFormSubmit}
                    onWidthChange={this.onWidthChange}
                />
                <div style={theme.container(this.state)}>
                    <FbPageApp name={this.state.name}/>
                </div>
            </div>
        );
    }
}

const page = document.getElementById('page');
ReactDOM.render(<FbPageExample/>, page);
