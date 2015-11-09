'use strict';

import React from 'react';
import Radium from 'radium';

@Radium
class Actions extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div style={this.props.style.base}/>
        );
    }
}

Actions.propTypes = {
    style: React.PropTypes.object
};

export default Actions;
