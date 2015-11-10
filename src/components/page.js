'use strict';

import React from 'react';
import {Map} from 'immutable';

import Loader from './loader';
import Cover from './cover';
import Profile from './profile';
import Actions from './actions';
import FeedContainer from './feed/container';

class Page extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const props = this.props;
        const style = props.style;
        return (
            <div style={style.base}>
                <Loader loading={props.loading} style={style.loader}/>
                <Cover cover={props.cover} style={style.cover}>
                    <Profile
                        profile={props.profile}
                        style={style.cover.profile}
                    />
                    <Actions
                        actions={props.actions}
                        style={style.cover.actions}
                    />
                </Cover>
                <FeedContainer feed={props.feed} style={style.feed}/>
            </div>
        );
    }
}

Page.propTypes = {
    style: React.PropTypes.object,
    loading: React.PropTypes.bool,
    cover: React.PropTypes.instanceOf(Map).isRequired,
    profile: React.PropTypes.instanceOf(Map).isRequired,
    actions: React.PropTypes.instanceOf(Map).isRequired,
    feed: React.PropTypes.instanceOf(Map).isRequired
};

export default Page;
