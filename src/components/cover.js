'use strict';

import React from 'react';
import Radium from 'radium';
import {Map} from 'immutable';

@Radium
class Cover extends React.Component {
    constructor(props){
        super(props);
    }
    getImageOffset(){
        const offset = this.props.cover.get('offset');
        return [this.props.style.image, {
            left: offset.x * -1 + 'px',
            top: offset.y * -1 + 'px'
        }];
    }
    render(){
        const img = this.getImageOffset();
        return (
            <div style={this.props.style.base}>
                <img
                    src={this.props.cover.get('source')}
                    style={img}
                />
                {this.props.children}
            </div>
        );
    }
}

Cover.propTypes = {
    style: React.PropTypes.object,
    cover: React.PropTypes.instanceOf(Map).isRequired,
    children: React.PropTypes.node
};

export default Cover;
