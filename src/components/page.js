'use strict';

import React from 'react';
import {Map} from 'immutable';

import Loader from './loader';
import Header from './header';
import Profile from './profile';
import Actions from './actions';
import Feed from './feed';

class FbPage extends React.Component {
    render(){
        const props = this.props;
        const theme = props.theme;
        return (
            <div style={theme.base}>
                <Loader loading={props.loading} style={theme.loader}/>
                <Header header={props.header} style={theme.header}>
                    <Profile
                        profile={props.profile}
                        style={theme.header.profile}
                    />
                    <Actions
                        actions={props.actions}
                        style={theme.header.actions}
                    />
                </Header>
                <Feed
                    feed={props.feed}
                    style={theme.feed}
                />
            </div>
        );
    }
}

FbPage.propTypes = {
    theme: React.PropTypes.object,
    loading: React.PropTypes.bool,
    header: React.PropTypes.instanceOf(Map).isRequired,
    profile: React.PropTypes.instanceOf(Map).isRequired,
    actions: React.PropTypes.instanceOf(Map).isRequired,
    feed: React.PropTypes.instanceOf(Map).isRequired
};

export default FbPage;