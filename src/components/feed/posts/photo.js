'use strict';

import React from 'react';

class PhotoPost extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <img
                    src={this.props.full_picture}
                    style={this.props.style.image}
                />
            </div>
        );
    }
}

PhotoPost.propTypes = {
    style: React.PropTypes.object,
    full_picture: React.PropTypes.string
};

PhotoPost.type = 'photo';
export default PhotoPost;
