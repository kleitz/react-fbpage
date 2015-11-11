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
                    <FbPage
                        style={this.props.style}
                        name={this.props.name}
                    />
                </Provider>
            </div>
        );
    }
}

App.propTypes = {
    style: React.PropTypes.object,
    name: React.PropTypes.string
};

export default App;
