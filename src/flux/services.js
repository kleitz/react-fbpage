'use strict';

const axios = require('axios');

const API_URL = '/api/v1/';

const FEED_FIELDS = [
    'message',
    'full_picture',
    'link',
    'updated_time',
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
};