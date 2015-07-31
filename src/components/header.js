'use strict';

import React from 'react';
import Radium from 'radium';

@Radium
class Header extends React.Component {
    render(){
        const style = this.props.style;
        const img = [style.image, {
            left: this.props.offsetX * -1 + 'px',
            top: this.props.offsetY * -1 + 'px'
        }];
        return (
            <div style={style.base}>
                <img src={this.props.source} style={img} />
                {this.props.children}
            </div>
        );
    }
}

Header.propTypes = {
    source: React.PropTypes.string,
    offsetX: React.PropTypes.number,
    offsetY: React.PropTypes.number
};

Header.defaultProps = {
    offsetX: 0,
    offsetY: 0
};

export default Header;
