const { actionTypes } = require('./actionTypes');


/** NAVIGATION */
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
        home_dataLength: action.data.length
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

}// MAIN NAV CLOSED



// /** BLOG */
// const initialStateBlog = {
//  blog_fetching: false,
//  blog_fetched: false,
//  blog_fetch_error: '',
//  blog_data: [],
//  blog_dataLength: 0
// }

// export const reducerBlog = (state = initialStateBlog, action) => {
  
//   switch(action.type){

//     case actionTypes.BLOG_START_FETCHING:
//       return {
//         blog_fetching: true,
//         blog_data: []
//       }
//     case actionTypes.BLOG_FETCHED:
//       return {
//         blog_data: action.data,
//         blog_fetched: true,
//         blog_dataLength: action.data.length
//       }
//     case actionTypes.BLOG_FETCH_ERROR:
//       return {
//         blog_fetched: false,
//         blog_fetching: false,
//         blog_fetch_error: action.error
//       }
//       /** default state */
//       default:
//         return state;
//   }
// }


// /** TAXONOMY */
// const initialStateTaxonomy = {
//   taxonomy_fetching: false,
//   taxonomy_fetched: false,
//   taxonomy_fetch_error: '',
//   taxonomy_data: [],
//   taxonomy_dataLength: 0
// }

// export const reducerTaxonomy = (state = initialStateTaxonomy, action) => {
  
//   switch(action.type){

//     case actionTypes.TAXONOMY_START_FETCHING:
//       return {
//         taxonomy_fetching: true,
//         taxonomy_data: []
//       }
//     case actionTypes.TAXONOMY_FETCHED:
//       return {
//         taxonomy_data: action.data,
//         taxonomy_fetched: true,
//         taxonomy_dataLength: action.data.length
//       }
//     case actionTypes.TAXONOMY_FETCH_ERROR:
//       return {
//         taxonomy_fetched: false,
//         taxonomy_fetching: false,
//         taxonomy_fetch_error: action.error
//       }
//        /** default state */
//       default:
//         return state;
//   }
// }

// /** SET BLOG SELECTION FOR THE MONTH OF THE YEAR */
// const initialStateYearMonth = {
//   blog_YearMonth: null
// }
// export const reducerBlogYearMonth = (state = initialStateYearMonth, action)=>{
//   switch(action.type){
//     case actionTypes.SELECTED_YEAR_MONTH:
//       return {
//         blog_YearMonth: action.YearMonth
//       }
//     default:
//       return state;
//   }

// }



