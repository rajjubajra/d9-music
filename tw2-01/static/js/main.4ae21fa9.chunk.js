(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{38:function(e,t,a){},4:function(e,t,a){"use strict";a.r(t),a.d(t,"actionTypes",(function(){return c}));var c={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR",TOUR_START_FETCHING:"TOUR_START_FETCHING",TOUR_FETCHED:"TOUR_FETCHED",TOUR_FETCH_ERROR:"TOUR_FETCH_ERROR",NEWS_START_FETCHING:"NEWS_START_FETCHING",NEWS_FETCHED:"NEWS_FETCHED",NEWS_FETCH_ERROR:"NEWS_FETCH_ERROR",ABOUT_START_FETCHING:"ABOUT_START_FETCHING",ABOUT_FETCHED:"ABOUT_FETCHED",ABOUT_FETCH_ERROR:"ABOUT_FETCH_ERROR",GALLERY_START_FETCHING:"GALLERY_START_FETCHING",GALLERY_FETCHED:"GALLERY_FETCHED",GALLERY_FETCH_ERROR:"GALLERY_FETCH_ERROR",MUSIC_START_FETCHING:"MUSIC_START_FETCHING",MUSIC_FETCHED:"MUSIC_FETCHED",MUSIC_FETCH_ERROR:"MUSIC_FETCH_ERROR"}},66:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(16),i=a.n(r),o=(a(38),a(11)),d=a(2),u=a(4),s=a(12),_=a.n(s),l="https://yellow-website.com/d9-music/d9-music",h=a(1);var f=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerHomePage.home_data.data})),a=Object(d.c)((function(e){return e.reducerHomePage.home_data.included})),n=Object(d.c)((function(e){return e.reducerHomePage.home_dataLength})),r=Object(c.useState)(),i=Object(o.a)(r,2),s=i[0],f=i[1];return Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/home_page?include=field_home_main_media,field_home_main_media.field_media_image");return function(a){a({type:u.actionTypes.HOME_START_FETCHING}),_.a.get(t,e).then((function(e){console.log("action",e.data),a({type:u.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){a({type:u.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(c.useEffect)((function(){var e=[];n>0&&t.map((function(t){var c=t.attributes,n=c.title,r=c.field_home_body,i=a[1].attributes.uri.url;e.push({title:n,body:r.value,image:i})})),f(e)}),[t,a,n]),Object(h.jsx)("div",{children:n>0?s.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"text-2xl",children:e.title}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"w-60",src:e.image,alt:"homepage"})}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})})]})})):"Loading..."})},E=a(14);var T=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerTour.tour_data.data})),a=Object(d.c)((function(e){return e.reducerTour.tour_dataLength}));return console.log(t,"length",a),Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/tour");return function(a){a({type:u.actionTypes.TOUR_START_FETCHING}),_.a.get(t,e).then((function(e){console.log("action",e.data),a({type:u.actionTypes.TOUR_FETCHED,data:e.data})})).catch((function(e){a({type:u.actionTypes.TOUR_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(h.jsx)("div",{children:a>0&&t.map((function(e){var t=e.attributes,a=t.title,c=t.field_event_details,n=t.field_event_location,r=t.field_buy_ticket;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"text-2xl",children:a}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Details:"}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:c.value}}),Object(h.jsx)("h2",{children:"Location:"}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:n.value}}),Object(h.jsx)("h2",{children:"Ticket"}),Object(h.jsx)("div",{children:Object(h.jsx)(E.b,{to:r.uri,children:r.title})})]})]})}))})};var j=function(){var e=Object(d.b)();Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/about_page?include=field_about_page_media,field_about_page_media.field_media_image");return function(a){a({type:u.actionTypes.ABOUT_START_FETCHING}),_.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:u.actionTypes.ABOUT_FETCHED,data:e.data})})).catch((function(e){a({type:u.actionTypes.ABOUT_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t=Object(d.c)((function(e){return e.reducerAbout.about_data.data})),a=Object(d.c)((function(e){return e.reducerAbout.about_dataLength})),n=Object(d.c)((function(e){return e.reducerAbout.about_data.included}));console.log("about data",t,"about lng",n);var r=Object(c.useState)([]),i=Object(o.a)(r,2),s=i[0],f=i[1];return Object(c.useEffect)((function(){var e=[];a>0&&t.map((function(t){var a=t.attributes,c=a.title,r=a.field_about_page;n.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;e.push({title:c,body:r.processed,image:a.url})}return f(e)}))}))}),[n,a,t]),console.log("Array about data",s),Object(h.jsx)("div",{children:a>0&&s.map((function(e){return Object(h.jsxs)("div",{className:"m-12",children:[Object(h.jsx)("h1",{className:"text-2xl",children:e.title}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"w-56",src:e.image,alt:""})}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}))})};var b=function(){var e=Object(d.b)();Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/gallery?include=field_gallery_media,field_gallery_media.field_media_image");return function(a){a({type:u.actionTypes.GALLERY_START_FETCHING}),_.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:u.actionTypes.GALLERY_FETCHED,data:e.data})})).catch((function(e){a({type:u.actionTypes.GALLERY_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t=Object(d.c)((function(e){return e.reducerGallery.gallery_data.data})),a=Object(d.c)((function(e){return e.reducerGallery.gallery_data.included})),n=Object(d.c)((function(e){return e.reducerGallery.gallery_dataLength})),r=Object(c.useState)([]),i=Object(o.a)(r,2),s=i[0],f=i[1];return console.log("gallery state",t,"include gallery",a,"length",n),Object(c.useEffect)((function(){var e=[];n>0&&t.map((function(t){var c=t.attributes,n=c.title,r=c.field_gallery_body;console.log("loop 1"),a.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;!e.some((function(e){return e.id===t.id}))&&e.push({id:t.id,title:n,body:r.processed,image:a.url})}}))})),f(e)}),[a,n,t]),console.log("gallery arr",s),Object(h.jsx)("div",{children:s.map((function(e){return Object(h.jsxs)("div",{className:"m-12",children:[Object(h.jsx)("h1",{children:e.title}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"w-64",src:e.image,alt:"gallery"})}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]},e.id)}))})};var O=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerMusic.music_data.data})),a=Object(d.c)((function(e){return e.reducerMusic.music_data.included})),n=Object(d.c)((function(e){return e.reducerMusic.music_dataLength}));Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/music_album?include=field_music_audio,field_music_audio.field_media_audio_file,field_music_image.field_media_image");return function(a){a({type:u.actionTypes.MUSIC_START_FETCHING}),_.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:u.actionTypes.MUSIC_FETCHED,data:e.data})})).catch((function(e){a({type:u.actionTypes.MUSIC_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),console.log(t,a,n);var r=Object(c.useState)([]),i=Object(o.a)(r,2);return i[0],i[1],Object(c.useEffect)((function(){console.log("data arr",[]),n>0&&t.map((function(e){var t=e.attributes,a=t.title,c=t.field_music_body,n=e.relationships.field_music_audio.data;return n.push({title:a,body:c.processed,data:n})}))}),[n,t]),Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Music Page"})})};var g=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Contact Page"})})};var m=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerNews.news_data.data})),a=Object(d.c)((function(e){return e.reducerNews.news_data.included})),n=Object(d.c)((function(e){return e.reducerNews.news_dataLength})),r=Object(c.useState)([]),i=Object(o.a)(r,2),s=i[0],f=i[1];return console.log("news",t,"news length",n),Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/news?include=field_news_media,field_news_media.field_media_image&fields[file--file]=filename,uri");return function(a){a({type:u.actionTypes.NEWS_START_FETCHING}),_.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:u.actionTypes.NEWS_FETCHED,data:e.data})})).catch((function(e){a({type:u.actionTypes.NEWS_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(c.useEffect)((function(){var e=[];n>0&&t.map((function(t){var c=t.attributes,n=c.title,r=c.field_news_body,i=c.field_news_date;a.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;e.push({title:n,body:r.processed,data:i,image:a.url})}return f(e)}))}))}),[t,a,n]),console.log("data arr news",s),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"m-10",children:"Note: Need to check array repeat"}),n>0&&s.map((function(e){return Object(h.jsxs)("div",{className:"m-5",children:[Object(h.jsx)("h1",{className:"text-2xl",children:e.title}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:e.image,alt:"news"})}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}))]})};var p=function(){var e=Object(d.c)((function(e){return e.reducerNav.nav_data.data})),t=Object(d.c)((function(e){return e.reducerNav.nav_dataLength}));return console.log("Nav",e),console.log("Length:",t),Object(h.jsx)("div",{className:"w-full h-8 bg-gray-100 flex justify-center align-middle",children:t>0?e.map((function(e,t){var a=e.attributes,c=a.title,n=a.url.split("/");n[0]="d9-music",n[1]="themes",n[2]="tw2-01";var r=n.join("/");return Object(h.jsx)(E.b,{className:"m-1",to:"/".concat(r),children:c})})):"data not loaded yet"})},R=a(5);var v=function(){var e=Object(d.b)();Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/menu_items/main"),a="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t;return function(t){t({type:u.actionTypes.MAINMENU_START_FETCHING}),_.a.get(a,e).then((function(e){console.log("MAIN MENU",e.data),t({type:u.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:u.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t="/d9-music/themes/tw2-01";return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("header",{className:"App-header",children:Object(h.jsxs)(E.a,{children:[Object(h.jsx)(p,{}),Object(h.jsxs)(R.c,{children:[Object(h.jsx)(R.a,{exact:!0,path:"".concat(t),component:f}),Object(h.jsx)(R.a,{exact:!0,path:"".concat(t,"/tour"),component:T}),Object(h.jsx)(R.a,{exact:!0,path:"".concat(t,"/news"),component:m}),Object(h.jsx)(R.a,{exact:!0,path:"".concat(t,"/about"),component:j}),Object(h.jsx)(R.a,{exact:!0,path:"".concat(t,"/music"),component:O}),Object(h.jsx)(R.a,{exact:!0,path:"".concat(t,"/gallery"),component:b}),Object(h.jsx)(R.a,{exact:!0,path:"".concat(t,"/form/contact"),component:g})]})]})})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))},H=a(17),C=a(32),N=a(33),F=a(4).actionTypes,A={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},x={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},S={tour_fetching:!1,tour_fetched:!1,tour_fetch_error:"",tour_data:[],tour_dataLength:0},M={news_fetching:!1,news_fetched:!1,news_fetch_error:"",news_data:[],news_dataLength:0},I={about_fetching:!1,about_fetched:!1,about_fetch_error:"",about_data:[],about_dataLength:0},L={gallery_fetching:!1,gallery_fetched:!1,gallery_fetch_error:"",gallery_data:[],gallery_dataLength:0},w={music_fetching:!1,music_fetched:!1,music_fetch_error:"",music_data:[],music_dataLength:0},U=Object(H.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case F.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.data.length};case F.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case F.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.data.length};case F.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}},reducerTour:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.TOUR_START_FETCHING:return{fetching:!0,tour_data:[]};case F.TOUR_FETCHED:return{tour_data:t.data,tour_fetched:!0,tour_dataLength:t.data.data.length};case F.TOUR_FETCH_ERROR:return{tour_fetched:!1,tour_fetching:!1,tour_fetch_error:t.error};default:return e}},reducerNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.NEWS_START_FETCHING:return{fetching:!0,news_data:[]};case F.NEWS_FETCHED:return{news_data:t.data,news_fetched:!0,news_dataLength:t.data.data.length};case F.NEWS_FETCH_ERROR:return{news_fetched:!1,news_fetching:!1,news_fetch_error:t.error};default:return e}},reducerAbout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.ABOUT_START_FETCHING:return{fetching:!0,about_data:[]};case F.ABOUT_FETCHED:return{about_data:t.data,about_fetched:!0,about_dataLength:t.data.data.length};case F.ABOUT_FETCH_ERROR:return{about_fetched:!1,about_fetching:!1,about_fetch_error:t.error};default:return e}},reducerGallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.GALLERY_START_FETCHING:return{fetching:!0,gallery_data:[]};case F.GALLERY_FETCHED:return{gallery_data:t.data,gallery_fetched:!0,gallery_dataLength:t.data.data.length};case F.GALLERY_FETCH_ERROR:return{gallery_fetched:!1,gallery_fetching:!1,gallery_fetch_error:t.error};default:return e}},reducerMusic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.MUSIC_START_FETCHING:return{fetching:!0,music_data:[]};case F.MUSIC_FETCHED:return{music_data:t.data,music_fetched:!0,music_dataLength:t.data.data.length};case F.MUSIC_FETCH_ERROR:return{music_fetched:!1,music_fetching:!1,music_fetch_error:t.error};default:return e}}}),G=Object(H.a)(N.a,Object(C.createLogger)()),D=Object(H.c)(U,G);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(d.a,{store:D,children:Object(h.jsx)(v,{})})}),document.getElementById("root")),y()}},[[66,1,2]]]);
//# sourceMappingURL=main.4ae21fa9.chunk.js.map