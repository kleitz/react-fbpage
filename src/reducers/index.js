'use strict';

import { combineReducers } from 'redux';
import immutable from 'immutable';
import * as types from '../actions';

const initialState = {
    loading: false,
    attributes: {
        cover: immutable.Map({
            offset: { x: 0, y: 0 }
        }),
        profile: immutable.Map(),
        actions: immutable.Map()
    },
    feed: immutable.Map({
        data: immutable.List(),
        next: false
    })
};

const page = (state = initialState, action) => {
    switch(action.type){
        case types.REQUEST_PAGE:
            return Object.assign({}, state, {
                loading: true
            });
        case types.RECEIVE_PAGE:
            return Object.assign({}, state, {
                loading: false,
                attributes: action.payload.attributes,
                feed: action.payload.feed
            });
        default:
            return state;
    }
    return state;
};

export default combineReducers({ page });
