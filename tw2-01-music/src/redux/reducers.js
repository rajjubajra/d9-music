const { actionTypes } = require('./actionTypes');




/** MAIN NAV */
const initalStateNav = {  
  nav_fetching: false,
  nav_fetched: false,
  nav_fetch_error: '',
  nav_data: [],
  nav_dataLength: 0,
}

export const reducerNav = (state = initalStateNav, action) => {

  switch (action.type) {

    case actionTypes.MAINMENU_START_FETCHING:
      return {
        fetching: true,
        nav_data: []
      }
    case actionTypes.MAINMENU_FETCHED:
      return {
        nav_data: action.data,
        nav_fetched: true,
        nav_dataLength: action.data.data.length
      }
    case actionTypes.MAINMENU_FETCH_ERROR:
      return {
        nav_fetched: false,
        nav_fetching: false,
        nav_fetch_error: action.error
      }
    
    /** default state */
    default:
      return state;
  }

}// MAIN NAV CLOSED


/** HOMEPAGE */
const initalStateHome = {  
  home_fetching: false,
  home_fetched: false,
  home_fetch_error: '',
  home_data: [],
  home_dataLength: 0,
}

export const reducerHomePage = (state = initalStateHome, action) => {

  switch (action.type) {

    case actionTypes.HOME_START_FETCHING:
      return {
        fetching: true,
        home_data: []
      }
    case actionTypes.HOME_FETCHED:
      return {
        home_data: action.data,
        home_fetched: true,
        home_dataLength: action.data.data.length
      }
    case actionTypes.HOME_FETCH_ERROR:
      return {
        home_fetched: false,
        home_fetching: false,
        home_fetch_error: action.error
      }
    
    /** default state */
    default:
      return state;
  }

}// Home CLOSED



/** TOUR PAGE */
const initalStateTour = {  
  tour_fetching: false,
  tour_fetched: false,
  tour_fetch_error: '',
  tour_data: [],
  tour_dataLength: 0,
}

export const reducerTour = (state = initalStateTour, action) => {

  switch (action.type) {

    case actionTypes.TOUR_START_FETCHING:
      return {
        fetching: true,
        tour_data: []
      }
    case actionTypes.TOUR_FETCHED:
      return {
        tour_data: action.data,
        tour_fetched: true,
        tour_dataLength: action.data.data.length
      }
    case actionTypes.TOUR_FETCH_ERROR:
      return {
        tour_fetched: false,
        tour_fetching: false,
        tour_fetch_error: action.error
      }
    
    /** default state */
    default:
      return state;
  }

}// Tour CLOSED



/** NEWS PAGE */
const initalStateNews = {  
  news_fetching: false,
  news_fetched: false,
  news_fetch_error: '',
  news_data: [],
  news_dataLength: 0,
}

export const reducerNews = (state = initalStateNews, action) => {

  switch (action.type) {

    case actionTypes.NEWS_START_FETCHING:
      return {
        fetching: true,
        news_data: []
      }
    case actionTypes.NEWS_FETCHED:
      return {
        news_data: action.data,
        news_fetched: true,
        news_dataLength: action.data.data.length
      }
    case actionTypes.NEWS_FETCH_ERROR:
      return {
        news_fetched: false,
        news_fetching: false,
        news_fetch_error: action.error
      }
    
    /** default state */
    default:
      return state;
  }

}// News CLOSED



/** ABOUT PAGE */
const initalStateAbout = {  
  about_fetching: false,
  about_fetched: false,
  about_fetch_error: '',
  about_data: [],
  about_dataLength: 0,
}

export const reducerAbout = (state = initalStateAbout, action) => {

  switch (action.type) {

    case actionTypes.ABOUT_START_FETCHING:
      return {
        fetching: true,
        about_data: []
      }
    case actionTypes.ABOUT_FETCHED:
      return {
        about_data: action.data,
        about_fetched: true,
        about_dataLength: action.data.data.length
      }
    case actionTypes.ABOUT_FETCH_ERROR:
      return {
        about_fetched: false,
        about_fetching: false,
        about_fetch_error: action.error
      }
    
    /** default state */
    default:
      return state;
  }

}// About CLOSED

