'use strict';

import alt from './alt';
import actions from './actions';

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
    load(){
        this.isLoading(true);
    }
    isLoading(loading){
        this.setState({ loading: loading });
    }
}

export default alt.createStore(PageStore, 'PageStore');
