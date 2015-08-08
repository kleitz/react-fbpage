'use strict';

import immutable from 'immutable';
import ImmutableStore from 'alt/utils/ImmutableUtil';

import alt from './alt';
import actions from './actions';
import services from './services';

@ImmutableStore
class PageStore {
    constructor(){
        this.bindListeners({
            load: actions.load
        });
        this.state = immutable.Map({
            loading: false,
            header: immutable.Map({
                offset: {x: 0, y: 0}
            }),
            profile: immutable.Map(),
            actions: immutable.Map({
                link: '#'
            }),
            feed: immutable.Map({
                data: immutable.List()
            })
        });
    }
    load(options){
        this.setState(this.state.set('loading', true));
        services.getPage(options.page).then((res) => {
            let parsed = this._parse(res.data);
            parsed.loading = false;
            this.setState(this.state.merge(parsed));
        }).catch((res) => {
            console.log(res);
        });
    }
    _parse(response){
        if(!response){ return {}; }
        const avatarUrl = response.picture.data.url;
        const cover = response.cover;
        const feedData = response.feed ? response.feed.data : [];
        return {
            header: immutable.Map({
                offset: {
                    x: cover.offset_x,
                    y: cover.offset_y
                },
                source: cover.source
            }),
            profile: immutable.Map({
                name: response.name,
                link: response.link,
                isVerified: response.is_verified,
                likes: response.likes,
                picture: {
                    url: avatarUrl
                }
            }),
            actions: immutable.Map({
                link: response.link
            }),
            feed: immutable.Map({
                data: immutable.List(feedData)
            })
        };
    }
}

export default alt.createStore(PageStore, 'PageStore');
