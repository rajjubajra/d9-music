(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{3:function(e,t,a){"use strict";a.r(t),a.d(t,"actionTypes",(function(){return n}));var n={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR",TOUR_START_FETCHING:"TOUR_START_FETCHING",TOUR_FETCHED:"TOUR_FETCHED",TOUR_FETCH_ERROR:"TOUR_FETCH_ERROR",NEWS_START_FETCHING:"NEWS_START_FETCHING",NEWS_FETCHED:"NEWS_FETCHED",NEWS_FETCH_ERROR:"NEWS_FETCH_ERROR",ABOUT_START_FETCHING:"ABOUT_START_FETCHING",ABOUT_FETCHED:"ABOUT_FETCHED",ABOUT_FETCH_ERROR:"ABOUT_FETCH_ERROR",GALLERY_START_FETCHING:"GALLERY_START_FETCHING",GALLERY_FETCHED:"GALLERY_FETCHED",GALLERY_FETCH_ERROR:"GALLERY_FETCH_ERROR",MUSIC_START_FETCHING:"MUSIC_START_FETCHING",MUSIC_FETCHED:"MUSIC_FETCHED",MUSIC_FETCH_ERROR:"MUSIC_FETCH_ERROR",MEDIA_AUDIO_START_FETCHING:"MEDIA_AUDIO_START_FETCHING",MEDIA_AUDIO_FETCHED:"MEDIA_AUDIO_FETCHED",MEDIA_AUDIO_FETCH_ERROR:"MEDIA_AUDIO_FETCH_ERROR",MEDIA_IMAGE_START_FETCHING:"MEDIA_IMAGE_START_FETCHING",MEDIA_IMAGE_FETCHED:"MEDIA_IMAGE_FETCHED",MEDIA_IMAGE_FETCH_ERROR:"MEDIA_IMAGE_FETCH_ERROR",MEDIA_REMOTE_VIDEO_START_FETCHING:"MEDIA_REMOTE_VIDEO_FETCHING",MEDIA_REMOTE_VIDEO_FETCHED:"MEDIA_REMOTE_VIDEO_FETCHED",MEDIA_REMOTE_VIDEO_FETCH_ERROR:"MEDIA_REMOTE_VIDEO_FETCH_ERROR"}},38:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(16),r=a.n(i),d=(a(38),a(11)),o=a(2),_=a(3),u=a(12),s=a.n(u),l="https://yellow-website.com/d9-music/d9-music",E=a(1);var h=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.reducerHomePage.home_data.data})),a=Object(o.c)((function(e){return e.reducerHomePage.home_data.included})),c=Object(o.c)((function(e){return e.reducerHomePage.home_dataLength})),i=Object(n.useState)(),r=Object(d.a)(i,2),u=r[0],h=r[1];return Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/home_page?include=field_home_main_media,field_home_main_media.field_media_image");return function(a){a({type:_.actionTypes.HOME_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action",e.data),a({type:_.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(n.useEffect)((function(){var e=[];c>0&&t.map((function(t){var n=t.attributes,c=n.title,i=n.field_home_body,r=a[1].attributes.uri.url;e.push({title:c,body:i.value,image:r})})),h(e)}),[t,a,c]),Object(E.jsx)("div",{children:c>0?u.map((function(e){return Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{className:"text-2xl",children:e.title}),Object(E.jsx)("div",{children:Object(E.jsx)("img",{className:"w-60",src:e.image,alt:"homepage"})}),Object(E.jsx)("div",{children:Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})})]})})):"Loading..."})},f=a(14);var T=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.reducerTour.tour_data.data})),a=Object(o.c)((function(e){return e.reducerTour.tour_dataLength}));return console.log(t,"length",a),Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/tour");return function(a){a({type:_.actionTypes.TOUR_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action",e.data),a({type:_.actionTypes.TOUR_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.TOUR_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(E.jsx)("div",{children:a>0&&t.map((function(e){var t=e.attributes,a=t.title,n=t.field_event_details,c=t.field_event_location,i=t.field_buy_ticket;return Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{className:"text-2xl",children:a}),Object(E.jsxs)("div",{children:[Object(E.jsx)("h2",{children:"Details:"}),Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:n.value}}),Object(E.jsx)("h2",{children:"Location:"}),Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:c.value}}),Object(E.jsx)("h2",{children:"Ticket"}),Object(E.jsx)("div",{children:Object(E.jsx)(f.b,{to:i.uri,children:i.title})})]})]})}))})};var m=function(){var e=Object(o.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/about_page?include=field_about_page_media,field_about_page_media.field_media_image");return function(a){a({type:_.actionTypes.ABOUT_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.ABOUT_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.ABOUT_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t=Object(o.c)((function(e){return e.reducerAbout.about_data.data})),a=Object(o.c)((function(e){return e.reducerAbout.about_dataLength})),c=Object(o.c)((function(e){return e.reducerAbout.about_data.included}));console.log("about data",t,"about lng",c);var i=Object(n.useState)([]),r=Object(d.a)(i,2),u=r[0],h=r[1];return Object(n.useEffect)((function(){var e=[];a>0&&t.map((function(t){var a=t.attributes,n=a.title,i=a.field_about_page;c.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;e.push({title:n,body:i.processed,image:a.url})}return h(e)}))}))}),[c,a,t]),console.log("Array about data",u),Object(E.jsx)("div",{children:a>0&&u.map((function(e){return Object(E.jsxs)("div",{className:"m-12",children:[Object(E.jsx)("h1",{className:"text-2xl",children:e.title}),Object(E.jsx)("div",{children:Object(E.jsx)("img",{className:"w-56",src:e.image,alt:""})}),Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}))})};var O=function(){var e=Object(o.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/gallery?include=field_gallery_media,field_gallery_media.field_media_image");return function(a){a({type:_.actionTypes.GALLERY_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.GALLERY_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.GALLERY_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t=Object(o.c)((function(e){return e.reducerGallery.gallery_data.data})),a=Object(o.c)((function(e){return e.reducerGallery.gallery_data.included})),c=Object(o.c)((function(e){return e.reducerGallery.gallery_dataLength})),i=Object(n.useState)([]),r=Object(d.a)(i,2),u=r[0],h=r[1];return console.log("gallery state",t,"include gallery",a,"length",c),Object(n.useEffect)((function(){var e=[];c>0&&t.map((function(t){var n=t.attributes,c=n.title,i=n.field_gallery_body;console.log("loop 1"),a.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;!e.some((function(e){return e.id===t.id}))&&e.push({id:t.id,title:c,body:i.processed,image:a.url})}}))})),h(e)}),[a,c,t]),console.log("gallery arr",u),Object(E.jsx)("div",{children:u.map((function(e){return Object(E.jsxs)("div",{className:"m-12",children:[Object(E.jsx)("h1",{children:e.title}),Object(E.jsx)("div",{children:Object(E.jsx)("img",{className:"w-64",src:e.image,alt:"gallery"})}),Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]},e.id)}))})};var g=function(e){return e.data.map((function(e){var t=e.title,a=e.uri;return Object(E.jsxs)("li",{children:[Object(E.jsx)("h3",{children:t}),Object(E.jsxs)("div",{children:["Audio link: ",a.url]})]})}))};var j=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.reducerMediaAudio.media_audio_data.data})),a=Object(o.c)((function(e){return e.reducerMediaAudio.media_audio_data.included})),c=Object(o.c)((function(e){return e.reducerMediaAudio.media_audio_dataLength})),i=Object(o.c)((function(e){return e.reducerMusic.music_data.data})),r=Object(o.c)((function(e){return e.reducerMusic.music_data.included})),u=Object(o.c)((function(e){return e.reducerMusic.music_dataLength})),h=Object(n.useState)([]),f=Object(d.a)(h,2),T=f[0],m=f[1],O=Object(n.useState)([]),j=Object(d.a)(O,2),b=j[0],R=j[1];function p(e,t){var a=[];return t.map((function(t){return e.some((function(e){return e.id===t.id}))&&a.push({id:t.id,title:t.title,uri:t.uri})})),a}return Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/music_album?include=field_music_audio,field_music_audio.field_media_audio_file,field_music_image.field_media_image");return function(a){a({type:_.actionTypes.MUSIC_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.MUSIC_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.MUSIC_FETCH_ERROR,fetched:!1,error:e})}))}}()),e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/media/audio?include=field_media_audio_file");return function(a){a({type:_.actionTypes.MEDIA_AUDIO_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.MEDIA_AUDIO_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.MEDIA_AUDIO_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),console.log(i,r,u),Object(n.useEffect)((function(){var e=c>0&&t.map((function(e,t){return Object.assign({},e,a[t])}));R(e)}),[t,a,c]),console.log("Audio data +: ",b),Object(n.useEffect)((function(){var e=[];console.log("final array",e),u>0&&b.length>0&&i.map((function(t){var a=t.attributes,n=a.title,c=a.field_music_body,i=t.relationships.field_music_audio.data;e.push({id:t.id,title:n,body:c.processed,data:p(i,b)})})),m(e)}),[b,i,u]),console.log("view Data",T,"vlength ",T.length),console.log("view data type: ",typeof T),Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{children:"Music Page"}),T.length>0&&T.map((function(e){var t=e.id,a=e.title,n=e.body,c=e.data;return Object(E.jsxs)("div",{className:"m-5 p-3",children:[Object(E.jsx)("h2",{className:"my-2",children:a}),Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:n}}),console.log(typeof c),console.log(c),Object(E.jsx)("ul",{className:"m-5 border p-4",children:g({data:c})})]},t)}))]})};var b=function(){return Object(E.jsx)("div",{children:Object(E.jsx)("h1",{children:"Contact Page"})})};var R=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.reducerNews.news_data.data})),a=Object(o.c)((function(e){return e.reducerNews.news_data.included})),c=Object(o.c)((function(e){return e.reducerNews.news_dataLength})),i=Object(n.useState)([]),r=Object(d.a)(i,2),u=r[0],h=r[1];return console.log("news",t,"news length",c),Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/news?include=field_news_media,field_news_media.field_media_image&fields[file--file]=filename,uri");return function(a){a({type:_.actionTypes.NEWS_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.NEWS_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.NEWS_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(n.useEffect)((function(){var e=[];c>0&&t.map((function(t){var n=t.attributes,c=n.title,i=n.field_news_body,r=n.field_news_date;a.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;e.push({title:c,body:i.processed,data:r,image:a.url})}return h(e)}))}))}),[t,a,c]),console.log("data arr news",u),Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{className:"m-10",children:"Note: Need to check array repeat"}),c>0&&u.map((function(e){return Object(E.jsxs)("div",{className:"m-5",children:[Object(E.jsx)("h1",{className:"text-2xl",children:e.title}),Object(E.jsx)("div",{children:Object(E.jsx)("img",{src:e.image,alt:"news"})}),Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}))]})};var p=function(){var e=Object(o.c)((function(e){return e.reducerNav.nav_data.data})),t=Object(o.c)((function(e){return e.reducerNav.nav_dataLength}));return console.log("Nav",e),console.log("Length:",t),Object(E.jsx)("div",{className:"w-full h-8 bg-gray-100 flex justify-center align-middle",children:t>0?e.map((function(e,t){var a=e.attributes,n=a.title,c=a.url.split("/");c[0]="d9-music",c[1]="themes",c[2]="tw2-01";var i=c.join("/");return Object(E.jsx)(f.b,{className:"m-1",to:"/".concat(i),children:n})})):"data not loaded yet"})},v=a(5);var A=function(){var e=Object(o.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/menu_items/main"),a="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t;return function(t){t({type:_.actionTypes.MAINMENU_START_FETCHING}),s.a.get(a,e).then((function(e){console.log("MAIN MENU",e.data),t({type:_.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:_.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t="/d9-music/themes/tw2-01";return Object(E.jsx)("div",{className:"App",children:Object(E.jsx)("header",{className:"App-header",children:Object(E.jsxs)(f.a,{children:[Object(E.jsx)(p,{}),Object(E.jsxs)(v.c,{children:[Object(E.jsx)(v.a,{exact:!0,path:"".concat(t),component:h}),Object(E.jsx)(v.a,{exact:!0,path:"".concat(t,"/tour"),component:T}),Object(E.jsx)(v.a,{exact:!0,path:"".concat(t,"/news"),component:R}),Object(E.jsx)(v.a,{exact:!0,path:"".concat(t,"/about"),component:m}),Object(E.jsx)(v.a,{exact:!0,path:"".concat(t,"/music"),component:j}),Object(E.jsx)(v.a,{exact:!0,path:"".concat(t,"/gallery"),component:O}),Object(E.jsx)(v.a,{exact:!0,path:"".concat(t,"/form/contact"),component:b})]})]})})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))},I=a(17),C=a(32),y=a(33),F=a(3).actionTypes,M={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},N={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},D={tour_fetching:!1,tour_fetched:!1,tour_fetch_error:"",tour_data:[],tour_dataLength:0},x={news_fetching:!1,news_fetched:!1,news_fetch_error:"",news_data:[],news_dataLength:0},S={about_fetching:!1,about_fetched:!1,about_fetch_error:"",about_data:[],about_dataLength:0},L={gallery_fetching:!1,gallery_fetched:!1,gallery_fetch_error:"",gallery_data:[],gallery_dataLength:0},G={music_fetching:!1,music_fetched:!1,music_fetch_error:"",music_data:[],music_dataLength:0},U={media_audio_fetching:!1,media_audio_fetched:!1,media_audio_fetch_error:"",media_audio_data:[],media_audio_dataLength:0},w={media_image_fetching:!1,media_image_fetched:!1,media_image_fetch_error:"",media_image_data:[],media_image_dataLength:0},B={media_remote_video_fetching:!1,media_remote_video_fetched:!1,media_remote_video_fetch_error:"",media_remote_video_data:[],media_remote_video_dataLength:0},W=Object(I.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case F.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.data.length};case F.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case F.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.data.length};case F.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}},reducerTour:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.TOUR_START_FETCHING:return{fetching:!0,tour_data:[]};case F.TOUR_FETCHED:return{tour_data:t.data,tour_fetched:!0,tour_dataLength:t.data.data.length};case F.TOUR_FETCH_ERROR:return{tour_fetched:!1,tour_fetching:!1,tour_fetch_error:t.error};default:return e}},reducerNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.NEWS_START_FETCHING:return{fetching:!0,news_data:[]};case F.NEWS_FETCHED:return{news_data:t.data,news_fetched:!0,news_dataLength:t.data.data.length};case F.NEWS_FETCH_ERROR:return{news_fetched:!1,news_fetching:!1,news_fetch_error:t.error};default:return e}},reducerAbout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.ABOUT_START_FETCHING:return{fetching:!0,about_data:[]};case F.ABOUT_FETCHED:return{about_data:t.data,about_fetched:!0,about_dataLength:t.data.data.length};case F.ABOUT_FETCH_ERROR:return{about_fetched:!1,about_fetching:!1,about_fetch_error:t.error};default:return e}},reducerGallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.GALLERY_START_FETCHING:return{fetching:!0,gallery_data:[]};case F.GALLERY_FETCHED:return{gallery_data:t.data,gallery_fetched:!0,gallery_dataLength:t.data.data.length};case F.GALLERY_FETCH_ERROR:return{gallery_fetched:!1,gallery_fetching:!1,gallery_fetch_error:t.error};default:return e}},reducerMusic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.MUSIC_START_FETCHING:return{fetching:!0,music_data:[]};case F.MUSIC_FETCHED:return{music_data:t.data,music_fetched:!0,music_dataLength:t.data.data.length};case F.MUSIC_FETCH_ERROR:return{music_fetched:!1,music_fetching:!1,music_fetch_error:t.error};default:return e}},reducerMediaAudio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.MEDIA_AUDIO_START_FETCHING:return{media_audio_fetching:!0,media_audio_dataLength:0,media_audio_data:[]};case F.MEDIA_AUDIO_FETCHED:return{media_audio_data:t.data,media_audio_fetched:!0,media_audio_dataLength:t.data.data.length};case F.MEDIA_AUDIO_FETCH_ERROR:return{media_audio_fetched:!1,media_audio_fetching:!1,media_audio_fetch_error:t.error};default:return e}},reducerMediaImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.MEDIA_IMAGE_START_FETCHING:return{fetching:!0,media_image_data:[]};case F.MEDIA_IMAGE_FETCHED:return{media_image_data:t.data,media_image_fetched:!0,media_image_dataLength:t.data.data.length};case F.MEDIA_IMAGE_FETCH_ERROR:return{media_image_fetched:!1,media_image_fetching:!1,media_image_fetch_error:t.error};default:return e}},reducerMediaRemoteVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.MEDIA_REMOTE_VIDEO_START_FETCHING:return{fetching:!0,media_remote_video_data:[]};case F.MEDIA_REMOTE_VIDEO_FETCHED:return{media_remote_video_data:t.data,media_remote_video_fetched:!0,media_remote_video_dataLength:t.data.data.length};case F.MEDIA_REMOTE_VIDEO_FETCH_ERROR:return{media_remote_video_fetched:!1,media_remote_video_fetching:!1,media_remote_video_fetch_error:t.error};default:return e}}}),Y=Object(I.a)(y.a,Object(C.createLogger)()),V=Object(I.c)(W,Y);r.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(o.a,{store:V,children:Object(E.jsx)(A,{})})}),document.getElementById("root")),H()}},[[66,1,2]]]);
//# sourceMappingURL=main.63577be1.chunk.js.map