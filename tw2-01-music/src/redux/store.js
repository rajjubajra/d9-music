import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {
  reducerNav,
  reducerHomePage,
  reducerTour
  
  
} from './reducers';

const reducer = combineReducers(
  {
    // reducerFetchData,
    reducerNav,
    reducerHomePage,
    reducerTour
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
