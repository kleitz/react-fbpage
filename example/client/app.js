'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AltComponent from '../../src/flux/alt-component';
import {FbPage, fbStore, fbActions, theme} from '../../src/index';

theme.base.width = '50%';

class FbPageApp extends AltComponent {
    getStores(){
        return [fbStore];
    }
    getPropsFromStores(){
        return { store: fbStore.getState() };
    }
    componentDidMount(){
        super.componentDidMount();
        fbActions.load('facebook');
    }
    render(){
        const store = this.state.store;
        return (
            <FbPage
                theme={theme}
                loading={store.get('loading')}
                header={store.get('header')}
                profile={store.get('profile')}
                feed={store.get('feed')}
                actions={store.get('actions')}
            />
        );
    }
}

const page = document.getElementById('page');
ReactDOM.render(<FbPageApp/>, page);
