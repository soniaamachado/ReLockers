import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer';

const initialState = {};

const store = createStore(reducer, initialState, applyMiddleware(thunk, logger));

export default store;