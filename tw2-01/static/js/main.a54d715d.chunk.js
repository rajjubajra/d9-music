(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{10:function(e,t,c){"use strict";c.r(t),c.d(t,"actionTypes",(function(){return n}));var n={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR"}},37:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(13),o=c.n(r),i=(c(37),c(9)),d=c(1);var s=function(){var e=Object(i.c)((function(e){return e.reducerHomepage.home_data.data}));return Object(i.c)((function(e){return e.reducerHomepage.home_data.included})),console.log("one",e.attributes),console.log("two",e[0].attributes),Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Test Page"})})};var h=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Tour Page"})})};var u=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"About Page"})})};var j=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Gallery Page"})})};var _=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Music Page"})})};var l=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Contact Page"})})};var E=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"News Page"})})},O=c(10),f=c(18),b=c.n(f),v="https://yellow-website.com/d9-music/d9-music",m=c(14);var T=function(){var e=Object(i.c)((function(e){return e.reducerNav.nav_data.data})),t=Object(i.c)((function(e){return e.reducerNav.nav_dataLength}));return console.log("Nav",e),console.log("Length:",t),Object(d.jsx)("div",{className:"w-full h-8 bg-gray-100 flex justify-center align-middle",children:t>0?e.map((function(e,t){var c=e.attributes,n=c.title,a=c.url.split("/");a[0]="d9-music",a[1]="themes",a[2]="tw2-01";var r=a.join("/");return Object(d.jsx)(m.b,{className:"m-1",to:"/".concat(r),children:n})})):"data not loaded yet"})},g=c(3);var p=function(){var e=Object(i.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(v,"/jsonapi/menu_items/main"),c="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t,n="".concat(v,"/jsonapi/media/image/6a41bf3a-8adb-4a6a-a998-024ae6de1f20?include=field_media_image");return function(t){t({type:O.actionTypes.MAINMENU_START_FETCHING}),b.a.get(c,e).then((function(e){console.log("MAIN MENU",e.data),t({type:O.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:O.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})})),t({type:O.actionTypes.HOME_START_FETCHING}),b.a.get(n,e).then((function(e){console.log("action",e.data),t({type:O.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){t({type:O.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t="/d9-music/themes/tw2-01";return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("header",{className:"App-header",children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)(T,{}),Object(d.jsxs)(g.c,{children:[Object(d.jsx)(g.a,{exact:!0,path:"".concat(t),component:s}),Object(d.jsx)(g.a,{exact:!0,path:"".concat(t,"/tour"),component:h}),Object(d.jsx)(g.a,{exact:!0,path:"".concat(t,"/news"),component:E}),Object(d.jsx)(g.a,{exact:!0,path:"".concat(t,"/about"),component:u}),Object(d.jsx)(g.a,{exact:!0,path:"".concat(t,"/music"),component:_}),Object(d.jsx)(g.a,{exact:!0,path:"".concat(t,"/gallery"),component:j}),Object(d.jsx)(g.a,{exact:!0,path:"".concat(t,"/form/contact"),component:l})]})]})})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),r(e),o(e)}))},M=c(15),x=c(31),H=c(32),R=c(10).actionTypes,C={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},F={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},A=Object(M.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case R.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.data.length};case R.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case R.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.length};case R.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}}}),y=Object(M.a)(H.a,Object(x.createLogger)()),I=Object(M.c)(A,y);o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(i.a,{store:I,children:Object(d.jsx)(p,{})})}),document.getElementById("root")),N()}},[[65,1,2]]]);
//# sourceMappingURL=main.a54d715d.chunk.js.map