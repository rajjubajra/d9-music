import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {
  reducerHomePage
  
} from './reducers';

const reducer = combineReducers(
  {
    // reducerFetchData,
    reducerHomePage,
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
