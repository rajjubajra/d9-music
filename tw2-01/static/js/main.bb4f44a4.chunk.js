(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{38:function(e,t,a){},5:function(e,t,a){"use strict";a.r(t),a.d(t,"actionTypes",(function(){return n}));var n={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR",TOUR_START_FETCHING:"TOUR_START_FETCHING",TOUR_FETCHED:"TOUR_FETCHED",TOUR_FETCH_ERROR:"TOUR_FETCH_ERROR",NEWS_START_FETCHING:"NEWS_START_FETCHING",NEWS_FETCHED:"NEWS_FETCHED",NEWS_FETCH_ERROR:"NEWS_FETCH_ERROR",ABOUT_START_FETCHING:"ABOUT_START_FETCHING",ABOUT_FETCHED:"ABOUT_FETCHED",ABOUT_FETCH_ERROR:"ABOUT_FETCH_ERROR"}},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),o=a.n(r),i=(a(38),a(16)),d=a(3),u=a(5),s=a(13),_=a.n(s),h="https://yellow-website.com/d9-music/d9-music",l=a(1);var f=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerHomePage.home_data.data})),a=Object(d.c)((function(e){return e.reducerHomePage.home_data.included})),c=Object(d.c)((function(e){return e.reducerHomePage.home_dataLength})),r=Object(n.useState)(),o=Object(i.a)(r,2),s=o[0],f=o[1];return Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(h,"/jsonapi/node/home_page?include=field_home_main_media,field_home_main_media.field_media_image");return function(a){a({type:u.actionTypes.HOME_START_FETCHING}),_.a.get(t,e).then((function(e){console.log("action",e.data),a({type:u.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){a({type:u.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(n.useEffect)((function(){var e=[];c>0&&t.map((function(t){var n=t.attributes,c=n.title,r=n.field_home_body,o=a[1].attributes.uri.url;e.push({title:c,body:r.value,image:o})})),f(e)}),[t,a,c]),Object(l.jsx)("div",{children:c>0?s.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-2xl",children:e.title}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"w-60",src:e.image,alt:"homepage"})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})})]})})):"Loading..."})},T=a(12);var j=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerTour.tour_data.data})),a=Object(d.c)((function(e){return e.reducerTour.tour_dataLength}));return console.log(t,"length",a),Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(h,"/jsonapi/node/tour");return function(a){a({type:u.actionTypes.TOUR_START_FETCHING}),_.a.get(t,e).then((function(e){console.log("action",e.data),a({type:u.actionTypes.TOUR_FETCHED,data:e.data})})).catch((function(e){a({type:u.actionTypes.TOUR_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(l.jsx)("div",{children:a>0&&t.map((function(e){var t=e.attributes,a=t.title,n=t.field_event_details,c=t.field_event_location,r=t.field_buy_ticket;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-2xl",children:a}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Details:"}),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:n.value}}),Object(l.jsx)("h2",{children:"Location:"}),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:c.value}}),Object(l.jsx)("h2",{children:"Ticket"}),Object(l.jsx)("div",{children:Object(l.jsx)(T.b,{to:r.uri,children:r.title})})]})]})}))})};var E=function(){var e=Object(d.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(h,"/jsonapi/node/about_page?include=field_about_page_media,field_about_page_media.field_media_image");return function(a){a({type:u.actionTypes.ABOUT_START_FETCHING}),_.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:u.actionTypes.ABOUT_FETCHED,data:e.data})})).catch((function(e){a({type:u.actionTypes.ABOUT_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t=Object(d.c)((function(e){return e.reducerAbout.about_data.data})),a=Object(d.c)((function(e){return e.reducerAbout.about_data.included}));return console.log("about data",t,"about lng",a),Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"About Page"})})};var O=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Gallery Page"})})};var b=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Music Page"})})};var g=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Contact Page"})})};var p=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerNews.news_data.data})),a=Object(d.c)((function(e){return e.reducerNews.news_data.included})),c=Object(d.c)((function(e){return e.reducerNews.news_dataLength})),r=Object(n.useState)([]),o=Object(i.a)(r,2),s=o[0],f=o[1];return console.log("news",t,"news length",c),Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(h,"/jsonapi/node/news?include=field_news_media,field_news_media.field_media_image&fields[file--file]=filename,uri");return function(a){a({type:u.actionTypes.NEWS_START_FETCHING}),_.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:u.actionTypes.NEWS_FETCHED,data:e.data})})).catch((function(e){a({type:u.actionTypes.NEWS_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(n.useEffect)((function(){var e=[];console.log("newdata",e),c>0&&t.map((function(t){var n=t.attributes,c=n.title,r=n.field_news_body,o=n.field_news_date;a.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;return e.push({title:c,body:r.processed,data:o,image:a.url})}}))})),f(e)}),[t,a,c]),console.log("data arr news",s),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"m-10",children:"Note: Need to check array repeat"}),c>0&&s.map((function(e){return Object(l.jsxs)("div",{className:"m-5",children:[Object(l.jsx)("h1",{className:"text-2xl",children:e.title}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.image,alt:"news"})}),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}))]})};var v=function(){var e=Object(d.c)((function(e){return e.reducerNav.nav_data.data})),t=Object(d.c)((function(e){return e.reducerNav.nav_dataLength}));return console.log("Nav",e),console.log("Length:",t),Object(l.jsx)("div",{className:"w-full h-8 bg-gray-100 flex justify-center align-middle",children:t>0?e.map((function(e,t){var a=e.attributes,n=a.title,c=a.url.split("/");c[0]="d9-music",c[1]="themes",c[2]="tw2-01";var r=c.join("/");return Object(l.jsx)(T.b,{className:"m-1",to:"/".concat(r),children:n})})):"data not loaded yet"})},m=a(4);var R=function(){var e=Object(d.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(h,"/jsonapi/menu_items/main"),a="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t;return function(t){t({type:u.actionTypes.MAINMENU_START_FETCHING}),_.a.get(a,e).then((function(e){console.log("MAIN MENU",e.data),t({type:u.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:u.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t="/d9-music/themes/tw2-01";return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsxs)(T.a,{children:[Object(l.jsx)(v,{}),Object(l.jsxs)(m.c,{children:[Object(l.jsx)(m.a,{exact:!0,path:"".concat(t),component:f}),Object(l.jsx)(m.a,{exact:!0,path:"".concat(t,"/tour"),component:j}),Object(l.jsx)(m.a,{exact:!0,path:"".concat(t,"/news"),component:p}),Object(l.jsx)(m.a,{exact:!0,path:"".concat(t,"/about"),component:E}),Object(l.jsx)(m.a,{exact:!0,path:"".concat(t,"/music"),component:b}),Object(l.jsx)(m.a,{exact:!0,path:"".concat(t,"/gallery"),component:O}),Object(l.jsx)(m.a,{exact:!0,path:"".concat(t,"/form/contact"),component:g})]})]})})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))},N=a(17),x=a(32),C=a(33),F=a(5).actionTypes,y={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},A={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},w={tour_fetching:!1,tour_fetched:!1,tour_fetch_error:"",tour_data:[],tour_dataLength:0},M={news_fetching:!1,news_fetched:!1,news_fetch_error:"",news_data:[],news_dataLength:0},S={about_fetching:!1,about_fetched:!1,about_fetch_error:"",about_data:[],about_dataLength:0},I=Object(N.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case F.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.data.length};case F.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case F.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.data.length};case F.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}},reducerTour:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.TOUR_START_FETCHING:return{fetching:!0,tour_data:[]};case F.TOUR_FETCHED:return{tour_data:t.data,tour_fetched:!0,tour_dataLength:t.data.data.length};case F.TOUR_FETCH_ERROR:return{tour_fetched:!1,tour_fetching:!1,tour_fetch_error:t.error};default:return e}},reducerNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.NEWS_START_FETCHING:return{fetching:!0,news_data:[]};case F.NEWS_FETCHED:return{news_data:t.data,news_fetched:!0,news_dataLength:t.data.data.length};case F.NEWS_FETCH_ERROR:return{news_fetched:!1,news_fetching:!1,news_fetch_error:t.error};default:return e}},reducerAbout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.ABOUT_START_FETCHING:return{fetching:!0,about_data:[]};case F.ABOUT_FETCHED:return{about_data:t.data,about_fetched:!0,about_dataLength:t.data.data.length};case F.ABOUT_FETCH_ERROR:return{about_fetched:!1,about_fetching:!1,about_fetch_error:t.error};default:return e}}}),U=Object(N.a)(C.a,Object(x.createLogger)()),L=Object(N.c)(I,U);o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d.a,{store:L,children:Object(l.jsx)(R,{})})}),document.getElementById("root")),H()}},[[66,1,2]]]);
//# sourceMappingURL=main.bb4f44a4.chunk.js.map