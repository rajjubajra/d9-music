(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},3:function(e,t,n){"use strict";n.r(t),n.d(t,"actionTypes",(function(){return a}));var a={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR"}},53:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),i=(n(25),n(26),n(1));var _=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Test Page"})})},E=n(4),d=n(3),h=n(9),s=n.n(h),u="https://yellow-website.com/d9-music/d9-music";var T=function(){var e=Object(E.c)((function(e){return e.reducerNav.nav_data}));return console.log("Nav",e),Object(i.jsx)("div",{})};var f=function(){var e=Object(E.b)();return Object(a.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(u,"/jsonapi/menu_items/main"),n="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t,a="".concat(u,"/jsonapi/media/image?include=field_media_image");return function(t){t({type:d.actionTypes.MAINMENU_START_FETCHING}),s.a.get(n,e).then((function(e){console.log("MAIN MENU",e.data),t({type:d.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:d.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})})),t({type:d.actionTypes.HOME_START_FETCHING}),s.a.get(a,e).then((function(e){console.log("action",e.data),t({type:d.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){t({type:d.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)(T,{}),Object(i.jsx)(_,{})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},N=n(6),H=n(19),O=n(20),v=n(3).actionTypes,g={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},l={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},p=Object(N.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case v.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.length};case v.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case v.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.length};case v.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}}}),R=Object(N.a)(O.a,Object(H.createLogger)()),j=Object(N.c)(p,R);o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(E.a,{store:j,children:Object(i.jsx)(f,{})})}),document.getElementById("root")),M()}},[[53,1,2]]]);
//# sourceMappingURL=main.9538071e.chunk.js.map