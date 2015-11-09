'use strict';

import React from 'react';
import Loader from '../loader';

class Loading extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const style = this.props.style;
        return (
            <Loader
                style={style.base}
                config={style.spinner}
            />
        );
    }
}

Loading.propTypes = {
    style: React.PropTypes.object
};

export default Loading;
