'use strict';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const storeFactory = applyMiddleware(thunk, logger())(createStore);

export default function configureStore(state){
    return storeFactory(reducers, state);
}
