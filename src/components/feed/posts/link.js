'use strict';

import React from 'react';

class LinkPost extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <a href={this.props.link}>
                    <img
                        src={this.props.full_picture}
                        style={this.props.style.image}
                    />
                </a>
            </div>
        );
    }
}

LinkPost.propTypes = {
    style: React.PropTypes.object,
    link: React.PropTypes.string,
    full_picture: React.PropTypes.string
};

LinkPost.type = 'link';
export default LinkPost;
