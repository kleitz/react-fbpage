'use strict';

import React from 'react';
import { Provider } from 'react-redux';

import FbPage from './fbpage';
import configureStore from '../stores/configure';

const store = configureStore();

class App extends React.Component {
    render(){
        return (
            <div>
                <Provider store={store}>
                    <FbPage/>
                </Provider>
            </div>
        );
    }
}

export default App;
