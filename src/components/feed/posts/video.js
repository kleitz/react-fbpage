'use strict';

import React from 'react';

class VideoPost extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <video
                    src={this.props.source}
                    style={this.props.style.player}
                    controls
                />
            </div>
        );
    }
}

VideoPost.propTypes = {
    style: React.PropTypes.object,
    source: React.PropTypes.string
};

VideoPost.type = 'video';
export default VideoPost;
