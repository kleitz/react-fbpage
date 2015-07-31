'use strict';

import React from 'react';
import Radium from 'radium';
import Spinner from 'spin.js';

@Radium
class Loader extends React.Component {
    componentDidMount(){
        this.spinner = new Spinner(this.props.config);
        if(this.props.loading){ this.renderLoader(); }
    }
    componentDidUpdate(prevProps){
        if(!this.props.loading){ this.spinner.stop(); }
        else if(!prevProps.loading && this.props.loading){
            this.renderLoader();
        }
    }
    componentWillUnmount(){
        this.spinner.stop();
    }
    renderLoader(){
        const node = React.findDOMNode(this.refs.spinner);
        this.spinner.spin(node);
    }
    render(){
        const loading = this.props.loading;
        const loader = <div ref='spinner' style={this.props.style}/>;
        return (<div>{loading ? loader : ''}</div>);
    }
}

Loader.propTypes = {
    config: React.PropTypes.object
};

Loader.defaultProps = {
    config: {
        lines: 13,
        length: 28,
        width: 14,
        radius: 42,
        scale: 1,
        corners: 1,
        color: '#000',
        opacity: 0.25,
        rotate: 0,
        direction: 1,
        speed: 1,
        trail: 60,
        fps: 20,
        zIndex: 2e9,
        className: 'spinner',
        top: '50%',
        left: '50%',
        shadow: false,
        hwaccel: true,
        position: 'absolute'
    }
};

export default Loader;
