(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{3:function(e,t,a){"use strict";a.r(t),a.d(t,"actionTypes",(function(){return c}));var c={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR",TOUR_START_FETCHING:"TOUR_START_FETCHING",TOUR_FETCHED:"TOUR_FETCHED",TOUR_FETCH_ERROR:"TOUR_FETCH_ERROR",NEWS_START_FETCHING:"NEWS_START_FETCHING",NEWS_FETCHED:"NEWS_FETCHED",NEWS_FETCH_ERROR:"NEWS_FETCH_ERROR",ABOUT_START_FETCHING:"ABOUT_START_FETCHING",ABOUT_FETCHED:"ABOUT_FETCHED",ABOUT_FETCH_ERROR:"ABOUT_FETCH_ERROR",GALLERY_START_FETCHING:"GALLERY_START_FETCHING",GALLERY_FETCHED:"GALLERY_FETCHED",GALLERY_FETCH_ERROR:"GALLERY_FETCH_ERROR",MUSIC_START_FETCHING:"MUSIC_START_FETCHING",MUSIC_FETCHED:"MUSIC_FETCHED",MUSIC_FETCH_ERROR:"MUSIC_FETCH_ERROR",MEDIA_AUDIO_START_FETCHING:"MEDIA_AUDIO_START_FETCHING",MEDIA_AUDIO_FETCHED:"MEDIA_AUDIO_FETCHED",MEDIA_AUDIO_FETCH_ERROR:"MEDIA_AUDIO_FETCH_ERROR",MEDIA_IMAGE_START_FETCHING:"MEDIA_IMAGE_START_FETCHING",MEDIA_IMAGE_FETCHED:"MEDIA_IMAGE_FETCHED",MEDIA_IMAGE_FETCH_ERROR:"MEDIA_IMAGE_FETCH_ERROR",MEDIA_REMOTE_VIDEO_START_FETCHING:"MEDIA_REMOTE_VIDEO_FETCHING",MEDIA_REMOTE_VIDEO_FETCHED:"MEDIA_REMOTE_VIDEO_FETCHED",MEDIA_REMOTE_VIDEO_FETCH_ERROR:"MEDIA_REMOTE_VIDEO_FETCH_ERROR"}},38:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(16),i=a.n(r),_=(a(38),a(12)),d=a(2),o=a(3),u=a(11),s=a.n(u),l="https://yellow-website.com/d9-music/d9-music",E=a(1);var h=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerHomePage.home_data.data})),a=Object(d.c)((function(e){return e.reducerHomePage.home_data.included})),n=Object(d.c)((function(e){return e.reducerHomePage.home_dataLength})),r=Object(c.useState)(),i=Object(_.a)(r,2),u=i[0],h=i[1];return Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/home_page?include=field_home_main_media,field_home_main_media.field_media_image");return function(a){a({type:o.actionTypes.HOME_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action",e.data),a({type:o.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){a({type:o.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(c.useEffect)((function(){var e=[];n>0&&t.map((function(t){var c=t.attributes,n=c.title,r=c.field_home_body,i=a[1].attributes.uri.url;e.push({title:n,body:r.value,image:i})})),h(e)}),[t,a,n]),Object(E.jsx)("div",{children:n>0?u.map((function(e){return Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{className:"text-2xl",children:e.title}),Object(E.jsx)("div",{children:Object(E.jsx)("img",{className:"w-60",src:e.image,alt:"homepage"})}),Object(E.jsx)("div",{children:Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})})]})})):"Loading..."})},f=a(14);var T=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerTour.tour_data.data})),a=Object(d.c)((function(e){return e.reducerTour.tour_dataLength}));return console.log(t,"length",a),Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/tour");return function(a){a({type:o.actionTypes.TOUR_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action",e.data),a({type:o.actionTypes.TOUR_FETCHED,data:e.data})})).catch((function(e){a({type:o.actionTypes.TOUR_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(E.jsx)("div",{children:a>0&&t.map((function(e){var t=e.attributes,a=t.title,c=t.field_event_details,n=t.field_event_location,r=t.field_buy_ticket;return Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{className:"text-2xl",children:a}),Object(E.jsxs)("div",{children:[Object(E.jsx)("h2",{children:"Details:"}),Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:c.value}}),Object(E.jsx)("h2",{children:"Location:"}),Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:n.value}}),Object(E.jsx)("h2",{children:"Ticket"}),Object(E.jsx)("div",{children:Object(E.jsx)(f.b,{to:r.uri,children:r.title})})]})]})}))})};var m=function(){var e=Object(d.b)();Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/about_page?include=field_about_page_media,field_about_page_media.field_media_image");return function(a){a({type:o.actionTypes.ABOUT_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:o.actionTypes.ABOUT_FETCHED,data:e.data})})).catch((function(e){a({type:o.actionTypes.ABOUT_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t=Object(d.c)((function(e){return e.reducerAbout.about_data.data})),a=Object(d.c)((function(e){return e.reducerAbout.about_dataLength})),n=Object(d.c)((function(e){return e.reducerAbout.about_data.included}));console.log("about data",t,"about lng",n);var r=Object(c.useState)([]),i=Object(_.a)(r,2),u=i[0],h=i[1];return Object(c.useEffect)((function(){var e=[];a>0&&t.map((function(t){var a=t.attributes,c=a.title,r=a.field_about_page;n.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;e.push({title:c,body:r.processed,image:a.url})}return h(e)}))}))}),[n,a,t]),console.log("Array about data",u),Object(E.jsx)("div",{children:a>0&&u.map((function(e){return Object(E.jsxs)("div",{className:"m-12",children:[Object(E.jsx)("h1",{className:"text-2xl",children:e.title}),Object(E.jsx)("div",{children:Object(E.jsx)("img",{className:"w-56",src:e.image,alt:""})}),Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}))})};var O=function(){var e=Object(d.b)();Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/gallery?include=field_gallery_media,field_gallery_media.field_media_image");return function(a){a({type:o.actionTypes.GALLERY_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:o.actionTypes.GALLERY_FETCHED,data:e.data})})).catch((function(e){a({type:o.actionTypes.GALLERY_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t=Object(d.c)((function(e){return e.reducerGallery.gallery_data.data})),a=Object(d.c)((function(e){return e.reducerGallery.gallery_data.included})),n=Object(d.c)((function(e){return e.reducerGallery.gallery_dataLength})),r=Object(c.useState)([]),i=Object(_.a)(r,2),u=i[0],h=i[1];return console.log("gallery state",t,"include gallery",a,"length",n),Object(c.useEffect)((function(){var e=[];n>0&&t.map((function(t){var c=t.attributes,n=c.title,r=c.field_gallery_body;console.log("loop 1"),a.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;!e.some((function(e){return e.id===t.id}))&&e.push({id:t.id,title:n,body:r.processed,image:a.url})}}))})),h(e)}),[a,n,t]),console.log("gallery arr",u),Object(E.jsx)("div",{children:u.map((function(e){return Object(E.jsxs)("div",{className:"m-12",children:[Object(E.jsx)("h1",{children:e.title}),Object(E.jsx)("div",{children:Object(E.jsx)("img",{className:"w-64",src:e.image,alt:"gallery"})}),Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]},e.id)}))})};var g=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerMusic.music_data.data})),a=Object(d.c)((function(e){return e.reducerMusic.music_data.included})),n=Object(d.c)((function(e){return e.reducerMusic.music_dataLength}));return Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/music_album?include=field_music_audio,field_music_audio.field_media_audio_file,field_music_image.field_media_image");return function(a){a({type:o.actionTypes.MUSIC_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:o.actionTypes.MUSIC_FETCHED,data:e.data})})).catch((function(e){a({type:o.actionTypes.MUSIC_FETCH_ERROR,fetched:!1,error:e})}))}}()),e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/media/audio?include=field_media_audio_file&field[file--file]=id,filename,uri");return function(a){a({type:o.actionTypes.MEDIA_AUDIO_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:o.actionTypes.MEDIA_AUDIO_FETCHED,data:e.data})})).catch((function(e){a({type:o.actionTypes.MEDIA_AUDIO_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),console.log(t,a,n),Object(c.useEffect)((function(){var e=[];n>0&&t.map((function(t){var a=t.attributes,c=a.title,n=a.field_music_body,r=t.relationships.field_music_audio.data;return e.push({title:c,body:n.processed,data:r})})),console.log(e)}),[n,t]),Object(E.jsx)("div",{children:Object(E.jsx)("h1",{children:"Music Page"})})};var j=function(){return Object(E.jsx)("div",{children:Object(E.jsx)("h1",{children:"Contact Page"})})};var R=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerNews.news_data.data})),a=Object(d.c)((function(e){return e.reducerNews.news_data.included})),n=Object(d.c)((function(e){return e.reducerNews.news_dataLength})),r=Object(c.useState)([]),i=Object(_.a)(r,2),u=i[0],h=i[1];return console.log("news",t,"news length",n),Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/news?include=field_news_media,field_news_media.field_media_image&fields[file--file]=filename,uri");return function(a){a({type:o.actionTypes.NEWS_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:o.actionTypes.NEWS_FETCHED,data:e.data})})).catch((function(e){a({type:o.actionTypes.NEWS_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(c.useEffect)((function(){var e=[];n>0&&t.map((function(t){var c=t.attributes,n=c.title,r=c.field_news_body,i=c.field_news_date;a.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;e.push({title:n,body:r.processed,data:i,image:a.url})}return h(e)}))}))}),[t,a,n]),console.log("data arr news",u),Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{className:"m-10",children:"Note: Need to check array repeat"}),n>0&&u.map((function(e){return Object(E.jsxs)("div",{className:"m-5",children:[Object(E.jsx)("h1",{className:"text-2xl",children:e.title}),Object(E.jsx)("div",{children:Object(E.jsx)("img",{src:e.image,alt:"news"})}),Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}))]})};var b=function(){var e=Object(d.c)((function(e){return e.reducerNav.nav_data.data})),t=Object(d.c)((function(e){return e.reducerNav.nav_dataLength}));return console.log("Nav",e),console.log("Length:",t),Object(E.jsx)("div",{className:"w-full h-8 bg-gray-100 flex justify-center align-middle",children:t>0?e.map((function(e,t){var a=e.attributes,c=a.title,n=a.url.split("/");n[0]="d9-music",n[1]="themes",n[2]="tw2-01";var r=n.join("/");return Object(E.jsx)(f.b,{className:"m-1",to:"/".concat(r),children:c})})):"data not loaded yet"})},p=a(5);var v=function(){var e=Object(d.b)();Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/menu_items/main"),a="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t;return function(t){t({type:o.actionTypes.MAINMENU_START_FETCHING}),s.a.get(a,e).then((function(e){console.log("MAIN MENU",e.data),t({type:o.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:o.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t="/d9-music/themes/tw2-01";return Object(E.jsx)("div",{className:"App",children:Object(E.jsx)("header",{className:"App-header",children:Object(E.jsxs)(f.a,{children:[Object(E.jsx)(b,{}),Object(E.jsxs)(p.c,{children:[Object(E.jsx)(p.a,{exact:!0,path:"".concat(t),component:h}),Object(E.jsx)(p.a,{exact:!0,path:"".concat(t,"/tour"),component:T}),Object(E.jsx)(p.a,{exact:!0,path:"".concat(t,"/news"),component:R}),Object(E.jsx)(p.a,{exact:!0,path:"".concat(t,"/about"),component:m}),Object(E.jsx)(p.a,{exact:!0,path:"".concat(t,"/music"),component:g}),Object(E.jsx)(p.a,{exact:!0,path:"".concat(t,"/gallery"),component:O}),Object(E.jsx)(p.a,{exact:!0,path:"".concat(t,"/form/contact"),component:j})]})]})})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))},H=a(17),I=a(32),C=a(33),y=a(3).actionTypes,F={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},M={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},N={tour_fetching:!1,tour_fetched:!1,tour_fetch_error:"",tour_data:[],tour_dataLength:0},D={news_fetching:!1,news_fetched:!1,news_fetch_error:"",news_data:[],news_dataLength:0},x={about_fetching:!1,about_fetched:!1,about_fetch_error:"",about_data:[],about_dataLength:0},S={gallery_fetching:!1,gallery_fetched:!1,gallery_fetch_error:"",gallery_data:[],gallery_dataLength:0},G={music_fetching:!1,music_fetched:!1,music_fetch_error:"",music_data:[],music_dataLength:0},L={media_audio_fetching:!1,media_audio_fetched:!1,media_audio_fetch_error:"",media_audio_data:[],media_audio_dataLength:0},U={media_image_fetching:!1,media_image_fetched:!1,media_image_fetch_error:"",media_image_data:[],media_image_dataLength:0},w={media_remote_video_fetching:!1,media_remote_video_fetched:!1,media_remote_video_fetch_error:"",media_remote_video_data:[],media_remote_video_dataLength:0},B=Object(H.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case y.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.data.length};case y.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case y.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.data.length};case y.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}},reducerTour:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.TOUR_START_FETCHING:return{fetching:!0,tour_data:[]};case y.TOUR_FETCHED:return{tour_data:t.data,tour_fetched:!0,tour_dataLength:t.data.data.length};case y.TOUR_FETCH_ERROR:return{tour_fetched:!1,tour_fetching:!1,tour_fetch_error:t.error};default:return e}},reducerNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.NEWS_START_FETCHING:return{fetching:!0,news_data:[]};case y.NEWS_FETCHED:return{news_data:t.data,news_fetched:!0,news_dataLength:t.data.data.length};case y.NEWS_FETCH_ERROR:return{news_fetched:!1,news_fetching:!1,news_fetch_error:t.error};default:return e}},reducerAbout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.ABOUT_START_FETCHING:return{fetching:!0,about_data:[]};case y.ABOUT_FETCHED:return{about_data:t.data,about_fetched:!0,about_dataLength:t.data.data.length};case y.ABOUT_FETCH_ERROR:return{about_fetched:!1,about_fetching:!1,about_fetch_error:t.error};default:return e}},reducerGallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.GALLERY_START_FETCHING:return{fetching:!0,gallery_data:[]};case y.GALLERY_FETCHED:return{gallery_data:t.data,gallery_fetched:!0,gallery_dataLength:t.data.data.length};case y.GALLERY_FETCH_ERROR:return{gallery_fetched:!1,gallery_fetching:!1,gallery_fetch_error:t.error};default:return e}},reducerMusic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.MUSIC_START_FETCHING:return{fetching:!0,music_data:[]};case y.MUSIC_FETCHED:return{music_data:t.data,music_fetched:!0,music_dataLength:t.data.data.length};case y.MUSIC_FETCH_ERROR:return{music_fetched:!1,music_fetching:!1,music_fetch_error:t.error};default:return e}},reducerMediaAudio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.MEDIA_AUDIO_START_FETCHING:return{media_audio_fetching:!0,media_audio_data:[]};case y.MEDIA_AUDIO_FETCHED:return{media_audio_data:t.data,media_audio_fetched:!0,media_audio_dataLength:t.data.data.length};case y.MEDIA_AUDIO_FETCH_ERROR:return{media_audio_fetched:!1,media_audio_fetching:!1,media_audio_fetch_error:t.error};default:return e}},reducerMediaImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.MEDIA_IMAGE_START_FETCHING:return{fetching:!0,media_image_data:[]};case y.MEDIA_IMAGE_FETCHED:return{media_image_data:t.data,media_image_fetched:!0,media_image_dataLength:t.data.data.length};case y.MEDIA_IMAGE_FETCH_ERROR:return{media_image_fetched:!1,media_image_fetching:!1,media_image_fetch_error:t.error};default:return e}},reducerMediaRemoteVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.MEDIA_REMOTE_VIDEO_START_FETCHING:return{fetching:!0,media_remote_video_data:[]};case y.MEDIA_REMOTE_VIDEO_FETCHED:return{media_remote_video_data:t.data,media_remote_video_fetched:!0,media_remote_video_dataLength:t.data.data.length};case y.MEDIA_REMOTE_VIDEO_FETCH_ERROR:return{media_remote_video_fetched:!1,media_remote_video_fetching:!1,media_remote_video_fetch_error:t.error};default:return e}}}),W=Object(H.a)(C.a,Object(I.createLogger)()),Y=Object(H.c)(B,W);i.a.render(Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(d.a,{store:Y,children:Object(E.jsx)(v,{})})}),document.getElementById("root")),A()}},[[66,1,2]]]);
//# sourceMappingURL=main.2c5a844e.chunk.js.map