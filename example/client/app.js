'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FbPageApp from '../../src/containers/app';
import theme from '../../src/themes/default';

theme.base.width = '50%';

const DEFAULT_PAGE = 'facebook';

class FbPageExample extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: DEFAULT_PAGE,
            buffer: DEFAULT_PAGE
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(evnt){
        this.setState({ buffer: evnt.target.value });
    }
    onSubmit(evnt){
        console.log('submit', this.state);
        evnt.preventDefault();
        this.setState({ name: this.state.buffer });
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChange} value={this.state.buffer}/>
                    <button>Load</button>
                </form>
                <FbPageApp name={this.state.name}/>
            </div>
        );
    }
}

const page = document.getElementById('page');
ReactDOM.render(<FbPageExample style={theme}/>, page);
