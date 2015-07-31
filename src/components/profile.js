'use strict';

import React from 'react';
import Radium from 'radium';
import numeral from 'numeral';

@Radium
class Profile extends React.Component {
    renderLikes(){
        let likes = numeral(this.props.likes).format('0,0');
        return `${likes} likes`;
    }
    render(){
        const style = this.props.style;
        const picture = this.props.picture || {};
        return (
            <div style={style.base}>
                <div style={style.background}/>
                <a href={this.props.link} style={style.iconLink}>
                    <img src={picture.url} style={style.iconImg}/>
                </a>
                <div style={style.details}>
                    <a href={this.props.link} style={[style.name, style.text]}>
                        {this.props.name}
                    </a>
                    {this.props.is_verified}
                    <div style={[style.text, style.likes]}>
                        {this.renderLikes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
