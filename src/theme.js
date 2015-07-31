'use strict';

import _ from 'lodash';

const link = {
    color: '#3b5998',
    cursor: 'pointer',
    textDecoration: 'none',
    ':hover': {
        textDecoration: 'underline'
    }
};

const button = {
    position: 'relative',
    border: '1px solid rgba(0, 0, 0, .12)',
    fontSize: '12px',
    lineHeight: '22px',
    borderColor: '#cccccc #c5c6c8 #b6b7b9',
    color: '#4e5665',
    textShadow: '0 1px 0 #fff',
    backgroundColor: '#f6f7f8',
    borderRadius: '2px',
    boxShadow: '0 1px 1px rgba(0, 0, 0, .05)',
    boxSizing: 'content-box',
    fontFamily: 'helvetica, arial, sans-serif',
    fontWeight: 'bold',
    fontSmoothing: 'antialiased',
    textAlign: 'center',
    verticalAlign: 'middle',
    textDecoration: 'none',
    padding: '0 8px',
    cursor: 'pointer',
    backgroundClip: 'padding-box',
    display: 'inline-block'
};

export default {
    base: {
        fontFamily: 'lucida grande ,tahoma,verdana,arial,sans-serif',
        fontSize: '11px',
        color: '#141823'
    },
    loader: {
        backgroundColor: 'red'
    },
    header: {
        base: {
            position: 'relative',
            overflow: 'hidden',
            height: '130px'
        },
        image: {
            position: 'absolute',
            width: '100%',
            top: 0,
            left: 0
        },
        profile: {
            base: {
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
                padding: '8px',
                width: '100%'
            },
            background: {
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, .7) 0%, rgba(0, 0, 0, 0) 100%)',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: -1
            },
            text: {
                color: '#fff',
                textShadow: '0 2px 4px rgba(0, 0, 0, .9)'
            },
            iconLink: {
                float: 'left',
                marginRight: '4px'
            },
            iconImg: {
                border: '2px solid #fff',
                boxShadow: '0 1px 6px rgba(0, 0, 0, .5)',
                 height: '50px',
                width: '50px'
            },
            details: {
                float: 'left'
            },
            name: _.extend({}, link, {
                display: 'inline-block',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: 1.358,
                marginBottom: '-5px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            }),
            verified: {
            },
            likes: {
                fontSize: '12px',
                lineHeight: 1.358,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            }
        },
        actions: {
            base: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '24px',
                zIndex: 2,
                padding: '8px'
            },
            button: button
        }
    },
    feed: {
        base: {
            background: '#f6f7f8',
            border: '1px solid #e9eaed',
            padding: '8px'
        },
        scroller: {
            overflow: 'auto',
            height: '500px'
        },
        item: {
            base: {
                boxShadow: '0 1px 2px rgba(0, 0, 0, .12)',
                backgroundColor: '#fff',
                borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
                borderRadius: '3px',
                padding: '12px',
                position: 'relative',
                wordWrap: 'break-word',
                marginTop: '10px'
            },
            header: {
                base: {
                    marginBottom: '11px',
                    height: '40px'
                },
                iconLink: {
                    float: 'left',
                    marginRight: '8px'
                },
                iconImg: {
                    height: '40px',
                    width: '40px'
                },
                details: {
                    display: 'inline-block',
                    marginTop: '4px'
                },
                name: _.extend({}, link, {
                    marginBottom: '2px',
                    paddingRight: '22px',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    lineHeight: 1.38,
                    overflow: 'hidden'
                }),
                datetime: _.extend({}, link, {
                    color: '#9197a3',
                    display: 'block'
                })
            },
            statistics: _.extend({}, link, {
                marginBottom: '12px',
                marginTop: '12px',
                color: '#7f7f7f',
                fontSize: '12px'
            }),
            actions: {
                base: {
                    borderBottom: '1px solid #f0f0f0',
                    color: '#7f7f7f',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    lineHeight: '16px',
                    textAlign: 'center',
                    width: '100%'
                }
            },
            content: {
                fontSize: '13px'
            },
            video: {
                player: {
                    width: '100%'
                }
            },
            photo: {
                image: {
                    width: '100%'
                }
            }
        }
    }
};
//if height is not larger than this cover height. position.