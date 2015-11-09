'use strict';

import VideoPost from './video';
import PhotoPost from './photo';
import LinkPost from './link';
import StatusPost from './status';

const factories = {};

const bootstrap = function(components){
    components.forEach((component) => {
        const type = component.type;
        if(!type){ throw new Error('No Type Found. Invalid Component.'); }
        factories[component.type] = component;
    });
    return factories;
};

bootstrap([VideoPost, PhotoPost, LinkPost, StatusPost]);

export default function(type){
    const component = factories[type];
    if(!component){ throw new Error(`No Component Factory With Type ${type}`); }
    return factories[type];
}
