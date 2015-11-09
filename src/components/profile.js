'use strict';

import React from 'react';
import Radium from 'radium';
import numeral from 'numeral';
import {Map} from 'immutable';

@Radium
class Profile extends React.Component {
    // shouldComponentUpdate(){
    //     return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    // }
    renderLikes(){
        const profile = this.props.profile;
        let likes = numeral(profile.get('likes')).format('0,0');
        return `${likes} likes`;
    }
    render(){
        const style = this.props.style;
        const profile = this.props.profile;
        const picture = profile.get('picture') || {};
        return (
            <div style={style.base}>
                <div style={style.background}/>
                <a href={profile.get('link')} style={style.iconLink}>
                    <img src={picture.url} style={style.iconImg}/>
                </a>
                <div style={style.details}>
                    <a href={profile.get('link')} style={[style.name, style.text]}>
                        {profile.get('name')}
                    </a>
                    {profile.get('is_verified')}
                    <div style={[style.text, style.likes]}>
                        {this.renderLikes()}
                    </div>
                </div>
            </div>
        );
    }
}

Profile.propTypes = {
    style: React.PropTypes.object,
    profile: React.PropTypes.instanceOf(Map).isRequired
};

export default Profile;
