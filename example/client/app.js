'use strict';

import React from 'react';
import AltComponent from '../../src/flux/alt-component';

import FbPage from '../../src/components/page';
import fbStore from '../../src/flux/stores';
import fbActions from '../../src/flux/actions';
import theme from '../../src/theme';

theme.base.width = '50%';

class FbPageController extends AltComponent {
    getStores(){
        return [fbStore];
    }
    getPropsFromStores(){
        return { store: fbStore.getState() };
    }
    componentDidMount(){
        super.componentDidMount();
        fbActions.load('reeflaughingdog');
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
React.render(<FbPageController/>, page);