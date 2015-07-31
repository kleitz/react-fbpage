'use strict';

import React from 'react';

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
                <Header {...props.header} style={theme.header}>
                    <Profile {...props.profile} style={theme.header.profile}/>
                    <Actions {...props.actions} style={theme.header.actions}/>
                </Header>
                <Feed {...props.feed} style={theme.feed}/>
            </div>
        );
    }
}

export default FbPage;