'use strict';

import React from 'react';
import {Map} from 'immutable';
import InfiniteScroll from 'react-infscroll';
import Loading from './loading';
import Item from './item';

class FeedContainer extends React.Component {
    constructor(props){
        super(props);
    }
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
                    loadingEl={<Loading style={style.loading}/>}
                    getNext={this.loadNext}
                    canGetNext={false}
                    style={style.scroller}>
                    {data.map((i) =>
                        <Item {...i}
                            key={i.id}
                            style={style.item}
                        />
                    )}
                </InfiniteScroll>
            </div>
        );
    }
}

FeedContainer.propTypes = {
    style: React.PropTypes.object,
    feed: React.PropTypes.instanceOf(Map).isRequired
};

export default FeedContainer;
