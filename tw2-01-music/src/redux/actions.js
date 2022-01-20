import {actionTypes} from './actionTypes';
import axios from "axios";
import { baseurl } from '../config/config';


export const actionNav = () => {
 
  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  /**
   * REMOTE SITE
   * jsonapi
   * fetch data from local json file.
   */
  // /** MAIN NAVIGATION */
  const NavLocal = './data/mainnav.json';
  const NavRemote = `${baseurl.URL}/jsonapi/menu_items/main`;
  const NAV = window.location.origin === 'http://localhost:3000' 
                    ? NavLocal
                    : NavRemote;

  
  return function (dispatch) {

      /** MAIN MENU  */
      dispatch({
        type: actionTypes.MAINMENU_START_FETCHING
      })
      const reqNAV= axios.get(NAV, headers)
      reqNAV.then((res) => {
          console.log("MAIN MENU",res.data)
          dispatch({
            type: actionTypes.MAINMENU_FETCHED,
            data: res.data
          })
        })
        .catch(err => {
          dispatch({
            type: actionTypes.MAINMENU_FETCH_ERROR,
            fetched: false,
            error: err
          })
        })
  }
}//ActionNav closed


/** HOME PAGE  */
export const actionHome = () => {


  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  const homeUrl = `${baseurl.URL}/jsonapi/node/home_page?include=field_home_main_media,field_home_main_media.field_media_image`;
  const HOME = homeUrl;

  return function (dispatch) {

 /** HOME */
 dispatch({
  type: actionTypes.HOME_START_FETCHING
})
const reqHome= axios.get(HOME, headers)
reqHome.then((res) => {
    console.log("action",res.data)
    dispatch({
      type: actionTypes.HOME_FETCHED,
      data: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: actionTypes.HOME_FETCH_ERROR,
      fetched: false,
      error: err
    })
  })

  }


}// actionHome Closed


export const actionTour = () => {


  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }


  const tourUrl = `${baseurl.URL}/jsonapi/node/tour`;
  const TOUR = tourUrl;

  return function (dispatch) {

  /** TOUR */
  dispatch({
    type: actionTypes.TOUR_START_FETCHING
  })
  const reqTour = axios.get(TOUR, headers)
  reqTour.then((res) => {
      console.log("action",res.data)
      dispatch({
        type: actionTypes.TOUR_FETCHED,
        data: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: actionTypes.TOUR_FETCH_ERROR,
        fetched: false,
        error: err
      })
    }) 

  }


}// actionTour Closed



/** NEWS */
export const actionNews = () => {


  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }


  const newsUrl = `${baseurl.URL}/jsonapi/node/news?include=field_news_media,field_news_media.field_media_image&fields[file--file]=filename,uri`;
  const NEWS = newsUrl;

  return function (dispatch) {

  /** TOUR */
  dispatch({
    type: actionTypes.NEWS_START_FETCHING
  })
  const reqNews = axios.get(NEWS, headers)
  reqNews.then((res) => {
      //console.log("action news",res.data)
      dispatch({
        type: actionTypes.NEWS_FETCHED,
        data: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: actionTypes.NEWS_FETCH_ERROR,
        fetched: false,
        error: err
      })
    }) 

  }

}// actionNews Closed


/** ABOUT PAGE */
export const actionAbout = () => {

  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  const aboutUrl = `${baseurl.URL}/jsonapi/node/about_page?include=field_about_page_media,field_about_page_media.field_media_image`;
  const ABOUT = aboutUrl;

  return function (dispatch) {

  /** TOUR */
  dispatch({
    type: actionTypes.ABOUT_START_FETCHING
  })
  const reqAbout = axios.get(ABOUT, headers)
  reqAbout.then((res) => {
     // console.log("action ABOUT",res.data)
      dispatch({
        type: actionTypes.ABOUT_FETCHED,
        data: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: actionTypes.ABOUT_FETCH_ERROR,
        fetched: false,
        error: err
      })
    }) 
  }

}// actionABOUT Closed


/** GALLARY PAGE */
export const actionGallery = () => {

  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  const galleryUrl = `${baseurl.URL}/jsonapi/node/gallery?include=field_gallery_media,field_gallery_media.field_media_image`;
  const GALLERY = galleryUrl;

  return function (dispatch) {

  /** TOUR */
  dispatch({
    type: actionTypes.GALLERY_START_FETCHING
  })
  const reqAbout = axios.get(GALLERY, headers)
  reqAbout.then((res) => {
     // console.log("action GALLERY",res.data)
      dispatch({
        type: actionTypes.GALLERY_FETCHED,
        data: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: actionTypes.GALLERY_FETCH_ERROR,
        fetched: false,
        error: err
      })
    }) 
  }

}// actionGallery Closed



/** MUSIC PAGE */
export const actionMusic = () => {

  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  const musicUrl = `${baseurl.URL}/jsonapi/node/music_album?include=field_music_audio,field_music_audio.field_media_audio_file,field_music_image.field_media_image,field_music_video`;
  
  const MUSIC = musicUrl;

  return function (dispatch) {

  /** TOUR */
  dispatch({
    type: actionTypes.MUSIC_START_FETCHING
  })
  const reqAbout = axios.get(MUSIC, headers)
  reqAbout.then((res) => {
      //console.log("action MUSIC",res.data)
      dispatch({
        type: actionTypes.MUSIC_FETCHED,
        data: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: actionTypes.MUSIC_FETCH_ERROR,
        fetched: false,
        error: err
      })
    }) 
  }

}// actionMusic Closed


/** MEDIA AUDIO PAGE */
export const actionMediaAudio = () => {

  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  const audioUrl = `${baseurl.URL}/jsonapi/media/audio?include=field_media_audio_file`;
  const AUDIO = audioUrl;

  return function (dispatch) {

  /** TOUR */
  dispatch({
    type: actionTypes.MEDIA_AUDIO_START_FETCHING
  })
  const reqAudio = axios.get(AUDIO, headers)
  reqAudio.then((res) => {
     // console.log("action audio",res.data)
      dispatch({
        type: actionTypes.MEDIA_AUDIO_FETCHED,
        data: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: actionTypes.MEDIA_AUDIO_FETCH_ERROR,
        fetched: false,
        error: err
      })
    }) 
  }

}// actionMediaAudio Closed


/** MEDIA IMAGE PAGE */
export const actionMediaImage = () => {

  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  const imageUrl = `${baseurl.URL}/jsonapi/media/image?include=field_media_image_file&field[file--file]=id,filename,uri`;
  const IMAGE = imageUrl;

  return function (dispatch) {

  /** TOUR */
  dispatch({
    type: actionTypes.MEDIA_IMAGE_START_FETCHING
  })
  const reqImage = axios.get(IMAGE, headers)
  reqImage.then((res) => {
      //console.log("action IMAGE MEDIA",res.data)
      dispatch({
        type: actionTypes.MEDIA_IMAGE_FETCHED,
        data: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: actionTypes.MEDIA_IMAGE_FETCH_ERROR,
        fetched: false,
        error: err
      })
    }) 
  }
}// actionMediaImage Closed


/** MEDIA REMOTE VIDEO PAGE */
export const actionMediaRemoteVideo = () => {

  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  const imageUrl = `${baseurl.URL}/jsonapi/media/remote_video?include=field_media_remote_video_file&field[file--file]=id,filename,uri`;
  const REMOTE_VIDEO = imageUrl;

  return function (dispatch) {

  /** TOUR */
  dispatch({
    type: actionTypes.MEDIA_REMOTE_VIDEO_START_FETCHING
  })
  const reqImage = axios.get(REMOTE_VIDEO, headers)
  reqImage.then((res) => {
     // console.log("action VIDIO MEDIA",res.data)
      dispatch({
        type: actionTypes.MEDIA_REMOTE_VIDEO_FETCHED,
        data: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: actionTypes.MEDIA_REMOTE_VIDEO_FETCH_ERROR,
        fetched: false,
        error: err
      })
    }) 
  }
}// actionMediaRemoteVideo Closed



// /** BASIC CONTACT FORM */
// export const actionBasicContactForm = () => {

//   const headers = {
//     headers: {
//     'Accept': 'application/vnd.api+json'
//     }
//   }

//   const imageUrl = `${baseurl.URL}/jsonapi/webform/webform/8979d944-eba5-4587-9d0b-2002f663d15b`;
//   const CONTACT_FORM = imageUrl;

//   return function (dispatch) {

//   /** TOUR */
//   dispatch({
//     type: actionTypes.BASIC_CONTACT_FORM_START_FETCHING
//   });
  
//   const reqImage = axios.get(CONTACT_FORM, headers)
//   reqImage.then((res) => {
//       console.log("action news",res.data)
//       dispatch({
//         type: actionTypes.BASIC_CONTACT_FORM_FETCHED,
//         data: res.data
//       })
//     })
//     .catch(err => {
//       dispatch({
//         type: actionTypes.BASIC_CONTACT_FORM_FETCH_ERROR,
//         fetched: false,
//         error: err
//       })
//     }) 
//   }
// }// actionBasicContactForm Closed




/** CONTACT INFO */
export const actionContactInfo = () => {

  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  const contactInfoUrl = `${baseurl.URL}/jsonapi/node/contact_info?include=field_contact_info_image,field_contact_info_image.field_media_image`;
  const CONTACT_INFO = contactInfoUrl;

  return function (dispatch) {

  /** TOUR */
  dispatch({
    type: actionTypes.CONTACT_INFO_START_FETCHING
  });
  
  const reqImage = axios.get(CONTACT_INFO, headers)
  reqImage.then((res) => {
      //console.log("action contact info",res.data)
      dispatch({
        type: actionTypes.CONTACT_INFO_FETCHED,
        data: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: actionTypes.CONTACT_INFO_FETCH_ERROR,
        fetched: false,
        error: err
      })
    }) 
  }
}// actionContactInfo Closed



/** SUBSCRIPTION FORM */
/** NOTE: 
 * Webform Permission access 
 * "ACCESS Webform Configuration" 
 * to be allowed to anonymouse user
 *  */

export const actionSubscriptionForm = () => {

  console.log("THIS IS is action subscription");

  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  const subscriptionUrl = `${baseurl.URL}/jsonapi/webform/webform/32fd5b50-c69f-403a-acca-dbc485a125d4`;
  const SUBSCRIPTION_FORM = subscriptionUrl;

  console.log("THIS IS is action subscription", SUBSCRIPTION_FORM);

  return function (dispatch) {

  /** TOUR */
  dispatch({
    type: actionTypes.SUBSCRIPTION_FORM_START_FETCHING
  });
  
  const reqImage = axios.get(SUBSCRIPTION_FORM, headers)
  reqImage.then((res) => {
      console.log("action Subscription",res.data)
      dispatch({
        type: actionTypes.SUBSCRIPTION_FORM_FETCHED,
        data: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: actionTypes.SUBSCRIPTION_FORM_FETCH_ERROR,
        fetched: false,
        error: err
      })
    }) 
  }
}// actionSubscriptionForm Closed






export const actionSetYearMonth = (YearMonth) => (
  {
    type: actionTypes.SELECTED_YEAR_MONTH,
    YearMonth: YearMonth
  }
)

