'use strict';

import React from 'react';

class FbPage extends React.Component {
    render(){
        const style = this.props.style;
        return (
            <div style={style.base}>
                <a href={this.props.link} style={style.button}>
                    Like Page
                </a>
            </div>
        );
    }
}

export default FbPage;
