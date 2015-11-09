'use strict';

import React from 'react';
import {Map} from 'immutable';

class Actions extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const style = this.props.style;
        const actions = this.props.actions;
        return (
            <div style={style.base}>
                <a href={actions.get('link')} style={style.button}>
                    Like Page
                </a>
            </div>
        );
    }
}

Actions.propTypes = {
    style: React.PropTypes.object,
    actions: React.PropTypes.instanceOf(Map).isRequired
};

export default Actions;
