'use strict';

import React from 'react';
import Radium from 'radium';
import numeral from 'numeral';

@Radium
class Statistics extends React.Component {
    constructor(props){
        super(props);
    }
    format(prop, unit){
        const value = numeral(prop).format('0,0');
        return `${value} ${unit}`;
    }
    renderShares(){
        return (
            <a href={this.props.link} style={this.props.style}>
                <p>{this.format(this.props.shares.count, 'Shares')}</p>
            </a>
        );
    }
    render(){
        const shares = this.props.shares ? this.renderShares() : '';
        return (<div>{shares}</div>);
    }
}

Statistics.propTypes = {
    style: React.PropTypes.object,
    link: React.PropTypes.string,
    shares: React.PropTypes.object
};

export default Statistics;
