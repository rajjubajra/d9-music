(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{1:function(e,t,a){"use strict";a.r(t),a.d(t,"actionTypes",(function(){return n}));var n={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR",TOUR_START_FETCHING:"TOUR_START_FETCHING",TOUR_FETCHED:"TOUR_FETCHED",TOUR_FETCH_ERROR:"TOUR_FETCH_ERROR",NEWS_START_FETCHING:"NEWS_START_FETCHING",NEWS_FETCHED:"NEWS_FETCHED",NEWS_FETCH_ERROR:"NEWS_FETCH_ERROR",ABOUT_START_FETCHING:"ABOUT_START_FETCHING",ABOUT_FETCHED:"ABOUT_FETCHED",ABOUT_FETCH_ERROR:"ABOUT_FETCH_ERROR",GALLERY_START_FETCHING:"GALLERY_START_FETCHING",GALLERY_FETCHED:"GALLERY_FETCHED",GALLERY_FETCH_ERROR:"GALLERY_FETCH_ERROR",MUSIC_START_FETCHING:"MUSIC_START_FETCHING",MUSIC_FETCHED:"MUSIC_FETCHED",MUSIC_FETCH_ERROR:"MUSIC_FETCH_ERROR",MEDIA_AUDIO_START_FETCHING:"MEDIA_AUDIO_START_FETCHING",MEDIA_AUDIO_FETCHED:"MEDIA_AUDIO_FETCHED",MEDIA_AUDIO_FETCH_ERROR:"MEDIA_AUDIO_FETCH_ERROR",MEDIA_IMAGE_START_FETCHING:"MEDIA_IMAGE_START_FETCHING",MEDIA_IMAGE_FETCHED:"MEDIA_IMAGE_FETCHED",MEDIA_IMAGE_FETCH_ERROR:"MEDIA_IMAGE_FETCH_ERROR",MEDIA_REMOTE_VIDEO_START_FETCHING:"MEDIA_REMOTE_VIDEO_FETCHING",MEDIA_REMOTE_VIDEO_FETCHED:"MEDIA_REMOTE_VIDEO_FETCHED",MEDIA_REMOTE_VIDEO_FETCH_ERROR:"MEDIA_REMOTE_VIDEO_FETCH_ERROR",BASIC_CONTACT_FORM_START_FETCHING:"BASIC_CONTACT_FORM_FETCHING",BASIC_CONTACT_FORM_FETCHED:"BASIC_CONTACT_FORM_FETCHED",BASIC_CONTACT_FORM_FETCH_ERROR:"BASIC_CONTACT_FORM_FETCH_ERROR",CONTACT_INFO_START_FETCHING:"CONTACT_INFO_FETCHING",CONTACT_INFO_FETCHED:"CONTACT_INFO_FETCHED",CONTACT_INFO_FETCH_ERROR:"CONTACT_INFO_FETCH_ERROR",SUBSCRIPTION_FORM_START_FETCHING:"SUBSCRIPTION_FORM_FETCHING",SUBSCRIPTION_FORM_FETCHED:"SUBSCRIPTION_FORM_FETCHED",SUBSCRIPTION_FORM_FETCH_ERROR:"SUBSCRIPTION_FORM_FETCH_ERROR"}},12:function(e,t,a){"use strict";a(45);var n=a(3);t.a=function(){return Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("div",{className:"loaderBar"})})}},19:function(e,t,a){"use strict";a.d(t,"f",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"i",(function(){return d})),a.d(t,"g",(function(){return E})),a.d(t,"a",(function(){return T})),a.d(t,"c",(function(){return u})),a.d(t,"e",(function(){return f})),a.d(t,"b",(function(){return h})),a.d(t,"h",(function(){return R}));var n=a(1),_=a(10),c=a.n(_),r=a(7),o=function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(r.a.URL,"/jsonapi/menu_items/main"),a="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t;return function(t){t({type:n.actionTypes.MAINMENU_START_FETCHING}),c.a.get(a,e).then((function(e){console.log("MAIN MENU",e.data),t({type:n.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:n.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})}))}},i=function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(r.a.URL,"/jsonapi/node/home_page?include=field_home_main_media,field_home_main_media.field_media_image");return function(a){a({type:n.actionTypes.HOME_START_FETCHING}),c.a.get(t,e).then((function(e){console.log("action",e.data),a({type:n.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){a({type:n.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}},d=function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(r.a.URL,"/jsonapi/node/tour");return function(a){a({type:n.actionTypes.TOUR_START_FETCHING}),c.a.get(t,e).then((function(e){console.log("action",e.data),a({type:n.actionTypes.TOUR_FETCHED,data:e.data})})).catch((function(e){a({type:n.actionTypes.TOUR_FETCH_ERROR,fetched:!1,error:e})}))}},E=function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(r.a.URL,"/jsonapi/node/news?include=field_news_media,field_news_media.field_media_image&fields[file--file]=filename,uri");return function(a){a({type:n.actionTypes.NEWS_START_FETCHING}),c.a.get(t,e).then((function(e){a({type:n.actionTypes.NEWS_FETCHED,data:e.data})})).catch((function(e){a({type:n.actionTypes.NEWS_FETCH_ERROR,fetched:!1,error:e})}))}},T=function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(r.a.URL,"/jsonapi/node/about_page?include=field_about_page_media,field_about_page_media.field_media_image");return function(a){a({type:n.actionTypes.ABOUT_START_FETCHING}),c.a.get(t,e).then((function(e){a({type:n.actionTypes.ABOUT_FETCHED,data:e.data})})).catch((function(e){a({type:n.actionTypes.ABOUT_FETCH_ERROR,fetched:!1,error:e})}))}},u=function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(r.a.URL,"/jsonapi/node/gallery?include=field_gallery_media,field_gallery_media.field_media_image");return function(a){a({type:n.actionTypes.GALLERY_START_FETCHING}),c.a.get(t,e).then((function(e){a({type:n.actionTypes.GALLERY_FETCHED,data:e.data})})).catch((function(e){a({type:n.actionTypes.GALLERY_FETCH_ERROR,fetched:!1,error:e})}))}},f=function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(r.a.URL,"/jsonapi/node/music_album?include=field_music_audio,field_music_audio.field_media_audio_file,field_music_image.field_media_image");return function(a){a({type:n.actionTypes.MUSIC_START_FETCHING}),c.a.get(t,e).then((function(e){a({type:n.actionTypes.MUSIC_FETCHED,data:e.data})})).catch((function(e){a({type:n.actionTypes.MUSIC_FETCH_ERROR,fetched:!1,error:e})}))}},h=function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(r.a.URL,"/jsonapi/node/contact_info?include=field_contact_info_image,field_contact_info_image.field_media_image");return function(a){a({type:n.actionTypes.CONTACT_INFO_START_FETCHING}),c.a.get(t,e).then((function(e){a({type:n.actionTypes.CONTACT_INFO_FETCHED,data:e.data})})).catch((function(e){a({type:n.actionTypes.CONTACT_INFO_FETCH_ERROR,fetched:!1,error:e})}))}},R=function(){console.log("THIS IS is action subscription");var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(r.a.URL,"/jsonapi/webform/webform/32fd5b50-c69f-403a-acca-dbc485a125d4");return console.log("THIS IS is action subscription",t),function(a){a({type:n.actionTypes.SUBSCRIPTION_FORM_START_FETCHING}),c.a.get(t,e).then((function(e){console.log("action Subscription",e.data),a({type:n.actionTypes.SUBSCRIPTION_FORM_FETCHED,data:e.data})})).catch((function(e){a({type:n.actionTypes.SUBSCRIPTION_FORM_FETCH_ERROR,fetched:!1,error:e})}))}}},42:function(e,t,a){},45:function(e,t,a){},7:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={URL:"https://yellow-website.com/d9-music/d9-music"}},70:function(e,t,a){"use strict";a.r(t);var n=a(0),_=a.n(n),c=a(17),r=a.n(c),o=(a(42),a(13)),i=a.n(o),d=a(12),E=a(16),T=a(19),u=a(24),f=a(4),h=a(3),R=i()({loader:function(){return a.e(12).then(a.bind(null,777))},loading:d.a}),s=i()({loader:function(){return a.e(7).then(a.bind(null,774))},loading:d.a}),C=i()({loader:function(){return Promise.all([a.e(2),a.e(4)]).then(a.bind(null,780))},loading:d.a}),O=i()({loader:function(){return a.e(9).then(a.bind(null,775))},loading:d.a}),l=i()({loader:function(){return a.e(10).then(a.bind(null,781))},loading:d.a}),m=i()({loader:function(){return Promise.all([a.e(5),a.e(11)]).then(a.bind(null,778))},loading:d.a}),F=i()({loader:function(){return Promise.all([a.e(6),a.e(13)]).then(a.bind(null,779))},loading:d.a}),g=i()({loader:function(){return a.e(8).then(a.bind(null,782))},loading:d.a});var I=function(){var e=Object(E.b)();Object(n.useEffect)((function(){e(Object(T.f)()),e(Object(T.d)())}),[e]);var t="/d9-music/themes/tw2-01";return Object(n.useEffect)((function(){return console.log("Refresh")})),Object(h.jsx)("div",{className:"max-w-screen-xl m-auto",children:Object(h.jsx)("header",{className:"App-header",children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(R,{}),Object(h.jsxs)(f.c,{children:[Object(h.jsx)(f.a,{exact:!0,path:"".concat(t,"/"),component:s}),Object(h.jsx)(f.a,{exact:!0,path:"".concat(t,"/tour"),component:C}),Object(h.jsx)(f.a,{exact:!0,path:"".concat(t,"/news"),component:g}),Object(h.jsx)(f.a,{exact:!0,path:"".concat(t,"/about"),component:O}),Object(h.jsx)(f.a,{exact:!0,path:"".concat(t,"/music"),component:m}),Object(h.jsx)(f.a,{exact:!0,path:"".concat(t,"/music/:id"),component:m}),Object(h.jsx)(f.a,{exact:!0,path:"".concat(t,"/gallery"),component:l}),Object(h.jsx)(f.a,{exact:!0,path:"".concat(t,"/form/fansclub"),component:F})]})]})})})},A=function(e){e&&e instanceof Function&&a.e(14).then(a.bind(null,776)).then((function(t){var a=t.getCLS,n=t.getFID,_=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),_(e),c(e),r(e)}))},p=a(18),H=a(35),N=a(36),M=a(1).actionTypes,S={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},v={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},D={tour_fetching:!1,tour_fetched:!1,tour_fetch_error:"",tour_data:[],tour_dataLength:0},y={news_fetching:!1,news_fetched:!1,news_fetch_error:"",news_data:[],news_dataLength:0},b={about_fetching:!1,about_fetched:!1,about_fetch_error:"",about_data:[],about_dataLength:0},U={gallery_fetching:!1,gallery_fetched:!1,gallery_fetch_error:"",gallery_data:[],gallery_dataLength:0},G={music_fetching:!1,music_fetched:!1,music_fetch_error:"",music_data:[],music_dataLength:0},j={media_audio_fetching:!1,media_audio_fetched:!1,media_audio_fetch_error:"",media_audio_data:[],media_audio_dataLength:0},L={media_image_fetching:!1,media_image_fetched:!1,media_image_fetch_error:"",media_image_data:[],media_image_dataLength:0},w={media_remote_video_fetching:!1,media_remote_video_fetched:!1,media_remote_video_fetch_error:"",media_remote_video_data:[],media_remote_video_dataLength:0},B={contact_form_fetching:!1,contact_form_fetched:!1,contact_form_fetch_error:"",contact_form_data:[],contact_form_dataLength:0},x={contact_info_fetching:!1,contact_info_fetched:!1,contact_info_fetch_error:"",contact_info_data:[],contact_info_dataLength:0},P={subscription_form_fetching:!1,subscription_form_fetched:!1,subscription_form_fetch_error:"",subscription_form_data:[],subscription_form_dataLength:0},W=Object(p.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case M.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.data.length};case M.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case M.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.data.length};case M.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}},reducerTour:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.TOUR_START_FETCHING:return{fetching:!0,tour_data:[]};case M.TOUR_FETCHED:return{tour_data:t.data,tour_fetched:!0,tour_dataLength:t.data.data.length};case M.TOUR_FETCH_ERROR:return{tour_fetched:!1,tour_fetching:!1,tour_fetch_error:t.error};default:return e}},reducerNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.NEWS_START_FETCHING:return{fetching:!0,news_data:[]};case M.NEWS_FETCHED:return{news_data:t.data,news_fetched:!0,news_dataLength:t.data.data.length};case M.NEWS_FETCH_ERROR:return{news_fetched:!1,news_fetching:!1,news_fetch_error:t.error};default:return e}},reducerAbout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.ABOUT_START_FETCHING:return{fetching:!0,about_data:[]};case M.ABOUT_FETCHED:return{about_data:t.data,about_fetched:!0,about_dataLength:t.data.data.length};case M.ABOUT_FETCH_ERROR:return{about_fetched:!1,about_fetching:!1,about_fetch_error:t.error};default:return e}},reducerGallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.GALLERY_START_FETCHING:return{fetching:!0,gallery_data:[]};case M.GALLERY_FETCHED:return{gallery_data:t.data,gallery_fetched:!0,gallery_dataLength:t.data.data.length};case M.GALLERY_FETCH_ERROR:return{gallery_fetched:!1,gallery_fetching:!1,gallery_fetch_error:t.error};default:return e}},reducerMusic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.MUSIC_START_FETCHING:return{fetching:!0,music_data:[]};case M.MUSIC_FETCHED:return{music_data:t.data,music_fetched:!0,music_dataLength:t.data.data.length};case M.MUSIC_FETCH_ERROR:return{music_fetched:!1,music_fetching:!1,music_fetch_error:t.error};default:return e}},reducerMediaAudio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.MEDIA_AUDIO_START_FETCHING:return{media_audio_fetching:!0,media_audio_dataLength:0,media_audio_data:[]};case M.MEDIA_AUDIO_FETCHED:return{media_audio_data:t.data,media_audio_fetched:!0,media_audio_dataLength:t.data.data.length};case M.MEDIA_AUDIO_FETCH_ERROR:return{media_audio_fetched:!1,media_audio_fetching:!1,media_audio_fetch_error:t.error};default:return e}},reducerMediaImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.MEDIA_IMAGE_START_FETCHING:return{fetching:!0,media_image_data:[]};case M.MEDIA_IMAGE_FETCHED:return{media_image_data:t.data,media_image_fetched:!0,media_image_dataLength:t.data.data.length};case M.MEDIA_IMAGE_FETCH_ERROR:return{media_image_fetched:!1,media_image_fetching:!1,media_image_fetch_error:t.error};default:return e}},reducerMediaRemoteVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.MEDIA_REMOTE_VIDEO_START_FETCHING:return{fetching:!0,media_remote_video_data:[]};case M.MEDIA_REMOTE_VIDEO_FETCHED:return{media_remote_video_data:t.data,media_remote_video_fetched:!0,media_remote_video_dataLength:t.data.data.length};case M.MEDIA_REMOTE_VIDEO_FETCH_ERROR:return{media_remote_video_fetched:!1,media_remote_video_fetching:!1,media_remote_video_fetch_error:t.error};default:return e}},reducerBasicContactForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.BASIC_CONTACT_FORM_START_FETCHING:return{contact_form_fetching:!0,contact_form_data:[]};case M.BASIC_CONTACT_FORM_FETCHED:return{contact_form_data:t.data,contact_form_fetched:!0,contact_form_dataLength:t.data.data.length};case M.BASIC_CONTACT_FORM_FETCH_ERROR:return{contact_form_fetched:!1,contact_form_fetching:!1,contact_form_fetch_error:t.error};default:return e}},reducerContactInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.CONTACT_INFO_START_FETCHING:return{contact_info_fetching:!0,contact_info_data:[]};case M.CONTACT_INFO_FETCHED:return{contact_info_data:t.data,contact_info_fetched:!0,contact_info_dataLength:t.data.data.length};case M.CONTACT_INFO_FETCH_ERROR:return{contact_info_fetched:!1,contact_info_fetching:!1,contact_info_fetch_error:t.error};default:return e}},reducerSubscriptionForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.SUBSCRIPTION_FORM_START_FETCHING:return{subscription_form_fetching:!0,subscription_form_data:[]};case M.SUBSCRIPTION_FORM_FETCHED:return{subscription_form_data:t.data,subscription_form_fetched:!0,subscription_form_dataLength:t.data.length};case M.SUBSCRIPTIONS_FORM_FETCH_ERROR:return{subscription_form_fetched:!1,subscription_form_fetching:!1,subscription_form_fetch_error:t.error};default:return e}}}),Y=Object(p.a)(N.a,Object(H.createLogger)()),V=Object(p.c)(W,Y);r.a.render(Object(h.jsx)(_.a.StrictMode,{children:Object(h.jsx)(E.a,{store:V,children:Object(h.jsx)(I,{})})}),document.getElementById("root")),A()}},[[70,1,3]]]);
//# sourceMappingURL=main.7551aef0.chunk.js.map