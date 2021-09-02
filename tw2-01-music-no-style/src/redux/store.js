import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {
  reducerNav,
  reducerHomePage,
  reducerTour,
  reducerNews,
  reducerAbout,
  reducerGallery,
  reducerMusic,

  reducerMediaAudio,
  reducerMediaImage,
  reducerMediaRemoteVideo,
  reducerBasicContactForm
  
  
} from './reducers';

const reducer = combineReducers(
  {
    //reducerFetchData,
    reducerNav,
    reducerHomePage,
    reducerTour,
    reducerNews,
    reducerAbout,
    reducerGallery,
    reducerMusic,
    
    reducerMediaAudio,
    reducerMediaImage,
    reducerMediaRemoteVideo,
    reducerBasicContactForm

    
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
