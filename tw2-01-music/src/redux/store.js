import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {
  reducerNav,
  reducerHomePage,
  reducerTour,
  reducerNews,
  reducerAbout
  
  
} from './reducers';

const reducer = combineReducers(
  {
    //reducerFetchData,
    reducerNav,
    reducerHomePage,
    reducerTour,
    reducerNews,
    reducerAbout
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
