'use strict';

import React from 'react';
import Radium from 'radium';

@Radium
class Header extends React.Component {
    render(){
        const style = this.props.style;
        const xOffset = this.props.offset_x || 0;
        const yOffset = this.props.offset_y || 0;
        const img = [style.image, {
            left: xOffset * -1 + 'px',
            top: yOffset * -1 + 'px'
        }];
        return (
            <div style={style.base}>
                <img src={this.props.source} style={img} />
                {this.props.children}
            </div>
        );
    }
}

export default Header;
