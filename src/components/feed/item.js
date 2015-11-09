'use strict';

import React from 'react';
import autolinker from 'autolinker';
import _ from 'lodash';

import Actions from './actions';
import Header from './header';
import Statistics from './statistics';
import postFactory from './posts/factory';

class FeedItem extends React.Component {
    constructor(props){
        super(props);
    }
    getMessage(){
        const message = this.props.message;
        const options = { hashtag: 'facebook' };
        return { __html: autolinker.link(message, options) };
    }
    renderContent(){
        const type = this.props.type;
        const component = postFactory(type);
        const style = this.props.style[type];
        const props = _.extend({}, this.props, { style: style });
        return React.createElement(component, props);
    }
    render(){
        const style = this.props.style;
        const props = this.props;
        return (
            <div style={style.base}>
                <Header
                    id={props.from.id}
                    name={props.from.name}
                    profile={props.from.profile}
                    datetime={props.created_time}
                    link={props.link}
                    style={style.header}
                />
                <div style={style.content}>
                    <p dangerouslySetInnerHTML={this.getMessage()}/>
                    {this.renderContent()}
                </div>
                <Statistics
                    link={props.link}
                    shares={props.shares}
                    style={style.statistics}
                />
                <Actions
                    link={props.link}
                    style={style.actions}
                />
            </div>
        );
    }
}

FeedItem.propTypes = {
    style: React.PropTypes.object,
    message: React.PropTypes.string,
    type: React.PropTypes.string.isRequired
};

export default FeedItem;
