'use strict';

import axios from 'axios';
// import immutable from 'immutable';
// import jsomap from './jsomap';

const API_URL = '/api/v1/';

const FEED_FIELDS = [
    'message',
    'full_picture',
    'link',
    'created_time',
    'from',
    'shares',
    'source',
    'type'
];

const FIELDS = [
    'cover',
    'name',
    'likes',
    'picture',
    'is_verified',
    'link'
];

export default {
    getPage(page){
        let url = API_URL + page;
        let feed = FEED_FIELDS.join();
        let feedField = `feed{${feed}}`;
        let fields = FIELDS.concat([feedField]);
        return axios.get(url, {
            params: {
                fields: fields.join()
            }
        });
    }
    // mapPageObject(page){
    //     var test = jsomap(page, {
    //         header: {
    //             container: immutable.Map,
    //             map: {
    //                 offset: {
    //                     x: 'cover.offset_x',
    //                     y: 'cover.offset_y'
    //                 }
    //             }
    //         }
    //     });
    //     return test;
    // }
};
