(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{37:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(13),o=n.n(r),i=(n(37),n(1));var d=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Test Page"})})};var h=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Tour Page"})})};var s=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"About Page"})})};var u=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Gallery Page"})})};var j=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Music Page"})})};var _=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Contact Page"})})};var l=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"News Page"})})},E=n(10),O=n(9),f=n(18),v=n.n(f),T="https://yellow-website.com/d9-music/d9-music",b=n(14);var p=function(){var e=Object(E.c)((function(e){return e.reducerNav.nav_data.data})),t=Object(E.c)((function(e){return e.reducerNav.nav_dataLength}));return console.log("Nav",e),console.log("Length:",t),Object(i.jsx)("div",{className:"w-full h-8 bg-gray-100 flex justify-center align-middle",children:t>0?e.map((function(e,t){var n=e.attributes,c=n.title,a=n.url;return Object(i.jsx)(b.b,{className:"m-1",to:a,children:c})})):"data not loaded yet"})},g=n(3);var m=function(){var e=Object(E.b)();Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(T,"/jsonapi/menu_items/main"),n="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t,c="".concat(T,"/jsonapi/media/image?include=field_media_image");return function(t){t({type:O.actionTypes.MAINMENU_START_FETCHING}),v.a.get(n,e).then((function(e){console.log("MAIN MENU",e.data),t({type:O.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:O.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})})),t({type:O.actionTypes.HOME_START_FETCHING}),v.a.get(c,e).then((function(e){console.log("action",e.data),t({type:O.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){t({type:O.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t="https://yellow-website.com/d9-music/d9-music";return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("header",{className:"App-header",children:Object(i.jsxs)(b.a,{children:[Object(i.jsx)(p,{}),Object(i.jsxs)(g.c,{children:[Object(i.jsx)(g.a,{path:"".concat(t),component:d}),Object(i.jsx)(g.a,{path:"".concat(t,"/tour"),component:h}),Object(i.jsx)(g.a,{path:"".concat(t,"/news"),component:l}),Object(i.jsx)(g.a,{path:"".concat(t,"/about"),component:s}),Object(i.jsx)(g.a,{path:"".concat(t,"/music"),component:j}),Object(i.jsx)(g.a,{path:"".concat(t,"/gallery"),component:u}),Object(i.jsx)(g.a,{path:"".concat(t,"/contact"),component:_})]})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))},M=n(15),H=n(31),x=n(32),R=n(9).actionTypes,C={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},F={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},A=Object(M.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case R.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.data.length};case R.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case R.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.length};case R.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}}}),y=Object(M.a)(x.a,Object(H.createLogger)()),I=Object(M.c)(A,y);o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(E.a,{store:I,children:Object(i.jsx)(m,{})})}),document.getElementById("root")),N()},9:function(e,t,n){"use strict";n.r(t),n.d(t,"actionTypes",(function(){return c}));var c={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR"}}},[[65,1,2]]]);
//# sourceMappingURL=main.0a6077c4.chunk.js.map