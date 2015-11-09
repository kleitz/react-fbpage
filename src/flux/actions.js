'use strict';

import alt from './alt';

class PageActions {
    load(page){
        return { page: page };
    }
}

export default alt.createActions(PageActions);
