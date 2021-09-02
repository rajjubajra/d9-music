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



/** GALLERY PAGE */
const initalStateGallery = {  
  gallery_fetching: false,
  gallery_fetched: false,
  gallery_fetch_error: '',
  gallery_data: [],
  gallery_dataLength: 0,
}

export const reducerGallery = (state = initalStateGallery, action) => {

  switch (action.type) {

    case actionTypes.GALLERY_START_FETCHING:
      return {
        fetching: true,
        gallery_data: []
      }
    case actionTypes.GALLERY_FETCHED:
      return {
        gallery_data: action.data,
        gallery_fetched: true,
        gallery_dataLength: action.data.data.length
      }
    case actionTypes.GALLERY_FETCH_ERROR:
      return {
        gallery_fetched: false,
        gallery_fetching: false,
        gallery_fetch_error: action.error
      }
    
    /** default state */
    default:
      return state;
  }

}// Gallery CLOSED




/** MUSIC PAGE */
const initalStateMusic = {  
  music_fetching: false,
  music_fetched: false,
  music_fetch_error: '',
  music_data: [],
  music_dataLength: 0,
}

export const reducerMusic = (state = initalStateMusic, action) => {

  switch (action.type) {

    case actionTypes.MUSIC_START_FETCHING:
      return {
        fetching: true,
        music_data: []
      }
    case actionTypes.MUSIC_FETCHED:
      return {
        music_data: action.data,
        music_fetched: true,
        music_dataLength: action.data.data.length
      }
    case actionTypes.MUSIC_FETCH_ERROR:
      return {
        music_fetched: false,
        music_fetching: false,
        music_fetch_error: action.error
      }
    
    /** default state */
    default:
      return state;
  }

}// Music CLOSED



/** MEDIA AUDIO */
const initalStateMediaAudio = {  
  media_audio_fetching: false,
  media_audio_fetched: false,
  media_audio_fetch_error: '',
  media_audio_data: [],
  media_audio_dataLength: 0,
}

export const reducerMediaAudio = (state = initalStateMediaAudio, action) => {

  switch (action.type) {

    case actionTypes.MEDIA_AUDIO_START_FETCHING:
      return {
        media_audio_fetching: true,
        media_audio_dataLength: 0,
        media_audio_data: []
      }
    case actionTypes.MEDIA_AUDIO_FETCHED:
      return {
        media_audio_data: action.data,
        media_audio_fetched: true,
        media_audio_dataLength: action.data.data.length
      }
    case actionTypes.MEDIA_AUDIO_FETCH_ERROR:
      return {
        media_audio_fetched: false,
        media_audio_fetching: false,
        media_audio_fetch_error: action.error
      }
    
    /** default state */
    default:
      return state;
  }

}// Media Audio CLOSED



/** MEDIA IMAGE */
const initalStateMediaImage = {  
  media_image_fetching: false,
  media_image_fetched: false,
  media_image_fetch_error: '',
  media_image_data: [],
  media_image_dataLength: 0,
}

export const reducerMediaImage = (state = initalStateMediaImage, action) => {

  switch (action.type) {

    case actionTypes.MEDIA_IMAGE_START_FETCHING:
      return {
        fetching: true,
        media_image_data: []
      }
    case actionTypes.MEDIA_IMAGE_FETCHED:
      return {
        media_image_data: action.data,
        media_image_fetched: true,
        media_image_dataLength: action.data.data.length
      }
    case actionTypes.MEDIA_IMAGE_FETCH_ERROR:
      return {
        media_image_fetched: false,
        media_image_fetching: false,
        media_image_fetch_error: action.error
      }
    
    /** default state */
    default:
      return state;
  }

}// Media IMAGE CLOSED



/** MEDIA REMOTE VIDEO */
const initalStateMediaRemoteVideo = {  
  media_remote_video_fetching: false,
  media_remote_video_fetched: false,
  media_remote_video_fetch_error: '',
  media_remote_video_data: [],
  media_remote_video_dataLength: 0,
}

export const reducerMediaRemoteVideo = (state = initalStateMediaRemoteVideo, action) => {

  switch (action.type) {

    case actionTypes.MEDIA_REMOTE_VIDEO_START_FETCHING:
      return {
        fetching: true,
        media_remote_video_data: []
      }
    case actionTypes.MEDIA_REMOTE_VIDEO_FETCHED:
      return {
        media_remote_video_data: action.data,
        media_remote_video_fetched: true,
        media_remote_video_dataLength: action.data.data.length
      }
    case actionTypes.MEDIA_REMOTE_VIDEO_FETCH_ERROR:
      return {
        media_remote_video_fetched: false,
        media_remote_video_fetching: false,
        media_remote_video_fetch_error: action.error
      }
    
    /** default state */
    default:
      return state;
  }

}// Media REMOTE VIDEO CLOSED




/** BASIC CONTACT FORM */
const initalStateBasicContactForm = {  
  contact_form_fetching: false,
  contact_form_fetched: false,
  contact_form_fetch_error: '',
  contact_form_data: [],
  contact_form_dataLength: 0,
}

export const reducerBasicContactForm = (state = initalStateBasicContactForm, action) => {

  switch (action.type) {

    case actionTypes.BASIC_CONTACT_FORM_START_FETCHING:
      return {
        contact_form_fetching: true,
        contact_form_data: []
      }
    case actionTypes.BASIC_CONTACT_FORM_FETCHED:
      return {
        contact_form_data: action.data,
        contact_form_fetched: true,
        contact_form_dataLength: action.data.data.length
      }
    case actionTypes.BASIC_CONTACT_FORM_FETCH_ERROR:
      return {
        contact_form_fetched: false,
        contact_form_fetching: false,
        contact_form_fetch_error: action.error
      }
    
    /** default state */
    default:
      return state;
  }

}// BASIC CONTACT FORM CLOSED
