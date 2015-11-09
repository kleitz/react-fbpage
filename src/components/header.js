'use strict';

import React from 'react';
import Radium from 'radium';
import {Map} from 'immutable';

@Radium
class Header extends React.Component {
    // shouldComponentUpdate(){
    //     return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    // }
    render(){
        const style = this.props.style;
        const header = this.props.header;
        const offset = header.get('offset');
        const img = [style.image, {
            left: offset.x * -1 + 'px',
            top: offset.y * -1 + 'px'
        }];
        return (
            <div style={style.base}>
                <img src={header.get('source')} style={img} />
                {this.props.children}
            </div>
        );
    }
}

Header.propTypes = {
    style: React.PropTypes.object,
    header: React.PropTypes.instanceOf(Map).isRequired
};

export default Header;
