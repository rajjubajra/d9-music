(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{38:function(e,t,n){},5:function(e,t,n){"use strict";n.r(t),n.d(t,"actionTypes",(function(){return c}));var c={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR",TOUR_START_FETCHING:"TOUR_START_FETCHING",TOUR_FETCHED:"TOUR_FETCHED",TOUR_FETCH_ERROR:"TOUR_FETCH_ERROR",NEWS_START_FETCHING:"NEWS_START_FETCHING",NEWS_FETCHED:"NEWS_FETCHED",NEWS_FETCH_ERROR:"NEWS_FETCH_ERROR"}},66:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(15),i=n.n(r),o=(n(38),n(16)),d=n(4),s=n(5),u=n(14),_=n.n(u),h="https://yellow-website.com/d9-music/d9-music",l=n(1);var j=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerHomePage.home_data.data})),n=Object(d.c)((function(e){return e.reducerHomePage.home_data.included})),a=Object(d.c)((function(e){return e.reducerHomePage.home_dataLength})),r=Object(c.useState)(),i=Object(o.a)(r,2),u=i[0],j=i[1];return Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(h,"/jsonapi/node/home_page?include=field_home_main_media,field_home_main_media.field_media_image");return function(n){n({type:s.actionTypes.HOME_START_FETCHING}),_.a.get(t,e).then((function(e){console.log("action",e.data),n({type:s.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){n({type:s.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(c.useEffect)((function(){var e=[];a>0&&t.map((function(t){var c=t.attributes,a=c.title,r=c.field_home_body,i=n[1].attributes.uri.url;e.push({title:a,body:r.value,image:i})})),j(e)}),[t,n,a]),Object(l.jsx)("div",{children:a>0?u.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-2xl",children:e.title}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"w-60",src:e.image,alt:"homepage"})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})})]})})):"Loading..."})},f=n(12);var E=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerTour.tour_data.data})),n=Object(d.c)((function(e){return e.reducerTour.tour_dataLength}));return console.log(t,"length",n),Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(h,"/jsonapi/node/tour");return function(n){n({type:s.actionTypes.TOUR_START_FETCHING}),_.a.get(t,e).then((function(e){console.log("action",e.data),n({type:s.actionTypes.TOUR_FETCHED,data:e.data})})).catch((function(e){n({type:s.actionTypes.TOUR_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(l.jsx)("div",{children:n>0&&t.map((function(e){var t=e.attributes,n=t.title,c=t.field_event_details,a=t.field_event_location,r=t.field_buy_ticket;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-2xl",children:n}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Details:"}),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:c.value}}),Object(l.jsx)("h2",{children:"Location:"}),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:a.value}}),Object(l.jsx)("h2",{children:"Ticket"}),Object(l.jsx)("div",{children:Object(l.jsx)(f.b,{to:r.uri,children:r.title})})]})]})}))})};var O=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"About Page"})})};var T=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Gallery Page"})})};var b=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Music Page"})})};var v=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Contact Page"})})};var g=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerNews.news_data.data})),n=Object(d.c)((function(e){return e.reducerNews.news_data.included})),a=Object(d.c)((function(e){return e.reducerNews.news_dataLength})),r=Object(c.useState)([]),i=Object(o.a)(r,2),u=i[0],j=i[1];return console.log("news",t,"news length",a),Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(h,"/jsonapi/node/news?include=field_news_media,field_news_media.field_media_image&fields[file--file]=filename,uri");return function(n){n({type:s.actionTypes.NEWS_START_FETCHING}),_.a.get(t,e).then((function(e){console.log("action news",e.data),n({type:s.actionTypes.NEWS_FETCHED,data:e.data})})).catch((function(e){n({type:s.actionTypes.NEWS_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(c.useEffect)((function(){var e=[];console.log("newdata",e),a>0&&t.map((function(t){var c=t.attributes,a=c.title,r=c.field_news_body,i=c.field_news_date;n.map((function(t){if("file--file"===t.type){var n=t.attributes.uri;return e.push({title:a,body:r.processed,data:i,image:n.url})}}))})),j(e)}),[t,n,a]),console.log("data arr news",u),Object(l.jsx)("div",{children:a>0&&u.map((function(e){return Object(l.jsxs)("div",{className:"m-5",children:[Object(l.jsx)("h1",{className:"text-2xl",children:e.title}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.image,alt:"news"})}),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}))})};var p=function(){var e=Object(d.c)((function(e){return e.reducerNav.nav_data.data})),t=Object(d.c)((function(e){return e.reducerNav.nav_dataLength}));return console.log("Nav",e),console.log("Length:",t),Object(l.jsx)("div",{className:"w-full h-8 bg-gray-100 flex justify-center align-middle",children:t>0?e.map((function(e,t){var n=e.attributes,c=n.title,a=n.url.split("/");a[0]="d9-music",a[1]="themes",a[2]="tw2-01";var r=a.join("/");return Object(l.jsx)(f.b,{className:"m-1",to:"/".concat(r),children:c})})):"data not loaded yet"})},m=n(3);var R=function(){var e=Object(d.b)();Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(h,"/jsonapi/menu_items/main"),n="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t;return function(t){t({type:s.actionTypes.MAINMENU_START_FETCHING}),_.a.get(n,e).then((function(e){console.log("MAIN MENU",e.data),t({type:s.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:s.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t="/d9-music/themes/tw2-01";return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)(p,{}),Object(l.jsxs)(m.c,{children:[Object(l.jsx)(m.a,{exact:!0,path:"".concat(t),component:j}),Object(l.jsx)(m.a,{exact:!0,path:"".concat(t,"/tour"),component:E}),Object(l.jsx)(m.a,{exact:!0,path:"".concat(t,"/news"),component:g}),Object(l.jsx)(m.a,{exact:!0,path:"".concat(t,"/about"),component:O}),Object(l.jsx)(m.a,{exact:!0,path:"".concat(t,"/music"),component:b}),Object(l.jsx)(m.a,{exact:!0,path:"".concat(t,"/gallery"),component:T}),Object(l.jsx)(m.a,{exact:!0,path:"".concat(t,"/form/contact"),component:v})]})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},H=n(17),x=n(32),C=n(33),F=n(5).actionTypes,y={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},w={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},M={tour_fetching:!1,tour_fetched:!1,tour_fetch_error:"",tour_data:[],tour_dataLength:0},A={news_fetching:!1,news_fetched:!1,news_fetch_error:"",news_data:[],news_dataLength:0},S=Object(H.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case F.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.data.length};case F.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case F.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.data.length};case F.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}},reducerTour:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.TOUR_START_FETCHING:return{fetching:!0,tour_data:[]};case F.TOUR_FETCHED:return{tour_data:t.data,tour_fetched:!0,tour_dataLength:t.data.data.length};case F.TOUR_FETCH_ERROR:return{tour_fetched:!1,tour_fetching:!1,tour_fetch_error:t.error};default:return e}},reducerNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.NEWS_START_FETCHING:return{fetching:!0,news_data:[]};case F.NEWS_FETCHED:return{news_data:t.data,news_fetched:!0,news_dataLength:t.data.data.length};case F.NEWS_FETCH_ERROR:return{news_fetched:!1,news_fetching:!1,news_fetch_error:t.error};default:return e}}}),I=Object(H.a)(C.a,Object(x.createLogger)()),U=Object(H.c)(S,I);i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d.a,{store:U,children:Object(l.jsx)(R,{})})}),document.getElementById("root")),N()}},[[66,1,2]]]);
//# sourceMappingURL=main.e78de3e1.chunk.js.map