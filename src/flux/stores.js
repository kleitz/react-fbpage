'use strict';

// import immutable from 'immutable';

import alt from './alt';
import actions from './actions';
import services from './services';

class PageStore {
    constructor(){
        this.bindListeners({
            load: actions.load
        });
        this.state = {
            loading: false,
            feed: { data: [] }
        };
    }
    load(options){
        this.setState({ loading: true });
        services.getPage(options.page).then((res) => {
            let parsed = this._parse(res.data);
            parsed.loading = false;
            this.setState(parsed);
        }).catch((res) => {
            console.log(res);
        });
    }
    _parse(response){
        if(!response){ return {}; }
        const avatarUrl = response.picture.data.url;
        const cover = response.cover;
        return {
            header: {
                offsetX: cover.offset_x,
                offsetY: cover.offset_y,
                source: cover.source
            },
            profile: {
                name: response.name,
                link: response.link,
                isVerified: response.is_verified,
                likes: response.likes,
                picture: {
                    url: avatarUrl
                }
            },
            actions: {
                link: response.link
            },
            feed: response.feed
        };
    }
}

export default alt.createStore(PageStore, 'PageStore');
