'use strict';

import React from 'react';
import Radium from 'radium';

@Radium
class Loader extends React.Component {
    renderLoading(){
        return (
            <div style={this.props.style}>
                Loading
            </div>
        );
    }
    render(){
        return (
            <div>
                {this.props.loading ? this.renderLoading() : ''}
            </div>
        );
    }
}

export default Loader;
