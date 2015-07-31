'use strict';

import React from 'react';
import ConnectToStores from 'alt/utils/connectToStores';

import FbPage from '../../src/components/page';
import fbStore from '../../src/flux/stores';
import fbActions from '../../src/flux/actions';
import theme from '../../src/theme';

@ConnectToStores
class FbPageController extends React.Component {
    static getStores(){
        return [fbStore];
    }
    static getPropsFromStores(){
        return fbStore.getState();
    }
    componentWillMount(){
        fbActions.load();
    }
    render(){
        const props = this.props;
        return (
            <FbPage
                theme={theme}
                loading={props.loading}
                header={props.header}
                profile={props.profile}
                feed={props.feed}
                actions={props.actions}
            />
        );
    }
}

const page = document.getElementById('page');
React.render(<FbPageController/>, page);
