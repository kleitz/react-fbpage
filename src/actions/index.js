'use strict';

// todo -- wrap this so it is injected
import pageServices from '../services/page';

export const REQUEST_PAGE = 'REQUEST_PAGE';
export const RECEIVE_PAGE = 'RECEIVE_PAGE';

export function requestPage(page){
    return {
        type: REQUEST_PAGE,
        page: page
    };
}

export function receivePage(page, payload){
    return {
        type: RECEIVE_PAGE,
        page: page,
        payload: payload
    };
}

export function loadPage(page) {
    return function(dispatch){
        dispatch(requestPage(page));
        return pageServices.fetch(page.name)
            .then(response => response.data)
            .then(response => pageServices.parse(response))
            .then(data => dispatch(receivePage(page, data)));
    };
}
