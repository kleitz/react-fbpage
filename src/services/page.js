'use strict';

import axios from 'axios';
import immutable from 'immutable';

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
    fetch(page){
        let url = API_URL + page;
        let feed = FEED_FIELDS.join();
        let feedField = `feed{${feed}}`;
        let fields = FIELDS.concat([feedField]);
        return axios.get(url, {
            params: {
                fields: fields.join()
            }
        });
    },
    parse(response){
        if(!response){ return {}; }
        const avatarUrl = response.picture.data.url;
        const cover = response.cover;
        const feedData = response.feed ? response.feed.data : [];
        const feedPaging = response.feed ? response.feed.paging : {};
        return {
            attributes: {
                cover: immutable.Map({
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
                })
            },
            feed: immutable.Map({
                data: immutable.List(feedData),
                next: feedPaging.next
            })
        };
    }
};
