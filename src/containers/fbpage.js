'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Page from '../components/page';
import {loadPage} from '../actions';
import defaultTheme from '../themes/default';

@connect(state => ({
    loading: state.page.loading,
    page: state.page.attributes,
    feed: state.page.feed
}))
class FbPage extends React.Component {
    componentDidMount(){
        this.props.dispatch(loadPage({ name: 'facebook' }));
    }
    render(){
        console.log('props = ', this.props);
        return (
            <Page
                style={this.props.style}
                loading={this.props.loading}
                cover={this.props.page.cover}
                profile={this.props.page.profile}
                actions={this.props.page.actions}
                feed={this.props.feed}
            />
        );
    }
}

FbPage.propTypes = {
    style: React.PropTypes.object,
    loading: React.PropTypes.bool,
    dispatch: React.PropTypes.func
};

FbPage.defaultProps = {
    style: defaultTheme
};

export default FbPage;
