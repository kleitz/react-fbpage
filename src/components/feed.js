'use strict';

import React from 'react';
import Radium from 'radium';
import moment from 'moment';
import numeral from 'numeral';
import _ from 'lodash';

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
    render(){
        return (
            <div>
                <a href={this.props.link} style={this.props.style}>
                    <p>{this.format(this.props.shares, 'Shares')}</p>
                </a>
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

const Registry = {
    video: FeedVideo,
    photo: FeedPhoto
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
                    datetime={props.updated_time}
                    link={props.link}
                    style={style.header}
                />
                <div style={style.content}>
                    {this.renderContent()}
                </div>
                <Statistics
                    link={props.link}
                    shares={props.shares.count}
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

class InfiniteScroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: false };
        this._scrollHandler = () => this.onScroll();
    }
    componentDidMount(){
        window.addEventListener('resize', this._scrollHandler);
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this._scrollHandler);
    }
    onScroll(){
        let props = this.props;
        if(!props.canGetNext || this.state.isLoading){ return; }
        let el = React.findDOMNode(this);
        let offset = el.scrollTop + el.offsetHeight;
        if(offset + props.threshold < el.scrollHeight){ return; }
        console.log('get some more!');
        this.setState({isLoading: true});
        props.getNext();
    }
    renderLoading(){
        return this.state.isLoading ? this.props.loadingEl : '';
    }
    render(){
        return (
            <div style={this.props.style} onScroll={this._scrollHandler}>
                {this.props.children}
                {this.renderLoading()}
            </div>
        );
    }
}

InfiniteScroll.propTypes = {
    canGetNext: React.PropTypes.bool.isRequired,
    getNext: React.PropTypes.func.isRequired,
    threshold: React.PropTypes.number,
    loadingEl: React.PropTypes.element,
    style: React.PropTypes.object
};

InfiniteScroll.defaultProps = {
    threshold: 1000
};

class Feed extends React.Component {
    loadNext(){
        console.log('load next');
    }
    render(){
        const feed = this.props.data;
        const style = this.props.style;
        return (
            <div style={style.base}>
                <InfiniteScroll
                    loadingEl={<Loading/>}
                    getNext={this.loadNext}
                    canGetNext={true}
                    style={style.scroller}>
                    {feed.map((i) => <Item key={i.id} style={style.item} {...i}/>)}
                </InfiniteScroll>
            </div>
        );
    }
}

export default Feed;
