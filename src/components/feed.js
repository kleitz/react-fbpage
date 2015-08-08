'use strict';

import React from 'react/addons';
import Radium from 'radium';
import moment from 'moment';
import numeral from 'numeral';
import {Map} from 'immutable';
import _ from 'lodash';

import InfiniteScroll from './infscroll';

@Radium
class Header extends React.Component {
    dateTime(){
        let dt = moment(this.props.datetime);
        let now = moment();
        let year = dt.isBefore(now, 'year') ? 'YYYY' : '';
        let format = `MMMM DD ${year} [at] h:mma`;
        return dt.format(format);
    }
    avatar(){
        let id = this.props.id;
        return `https://graph.facebook.com/${id}/picture`;
    }
    render(){
        const style = this.props.style;
        const link = this.props.link;
        return (
            <div style={style.base}>
                <a href={link} style={style.iconLink}>
                    <img src={this.avatar()} style={style.iconImg}/>
                </a>
                <div style={style.details}>
                    <a key='name' href={link} style={style.name}>
                        {this.props.name}
                    </a>
                    <a key='datetime' href={link} style={style.datetime}>
                        {this.dateTime()}
                    </a>
                </div>
            </div>
        );
    }
}

@Radium
class Statistics extends React.Component {
    format(prop, unit){
        let value = numeral(prop).format('0,0');
        return `${value} ${unit}`;
    }
    renderShares(){
        return (
            <a href={this.props.link} style={this.props.style}>
                <p>{this.format(this.props.shares.count, 'Shares')}</p>
            </a>
        );
    }
    render(){
        return (
            <div>
                {this.props.shares ? this.renderShares() : ''}
            </div>
        );
    }
}

@Radium
class Actions extends React.Component {
    render(){
        const style = this.props.style;
        return (
            <div style={style.base}>
            </div>
        );
    }
}

class FeedVideo extends React.Component {
    render(){
        const style = this.props.style;
        return (
            <div>
                <p>{this.props.message}</p>
                <video src={this.props.source} style={style.player} controls>
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
}

class FeedPhoto extends React.Component {
    render(){
        const style = this.props.style;
        return (
            <div>
                <p>{this.props.message}</p>
                <img src={this.props.full_picture} style={style.image}/>
            </div>
        );
    }
}

class FeedStatus extends React.Component {
    render(){
        return (
            <div>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

class FeedLink extends React.Component {
    render(){
        const style = this.props.style;
        return (
            <div>
                <p>{this.props.message}</p>
                <a href={this.props.link}>
                    <img src={this.props.full_picture} style={style.image}/>
                </a>
            </div>
        );
    }
}

const Registry = {
    video: FeedVideo,
    photo: FeedPhoto,
    status: FeedStatus,
    link: FeedLink
};

class Item extends React.Component {
    renderContent(){
        const t = this.props.type;
        const type = Registry[t];
        if(!type){ return ''; }
        const style = this.props.style[t];
        const props = _.extend({}, this.props, { style: style });
        return React.createElement(type, props);
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

class Loading extends React.Component {
    render(){
        return (
            <div>
                <p>LOADING</p>
            </div>
        );
    }
}

class Feed extends React.Component {
    loadNext(){
        console.log('load next');
    }
    render(){
        const feed = this.props.feed;
        const data = feed.get('data');
        const style = this.props.style;
        return (
            <div style={style.base}>
                <InfiniteScroll
                    loadingEl={<Loading/>}
                    getNext={this.loadNext}
                    canGetNext={true}
                    style={style.scroller}>
                    {data.map((i) => <Item key={i.id} style={style.item} {...i}/>)}
                </InfiniteScroll>
            </div>
        );
    }
}

Feed.propTypes = {
    style: React.PropTypes.object,
    feed: React.PropTypes.instanceOf(Map).isRequired
};

export default Feed;