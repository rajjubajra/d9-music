(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},6:function(e,t,n){"use strict";n.r(t),n.d(t,"actionTypes",(function(){return a}));var a={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR"}},63:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),i=(n(34),n(35),n(2));var _=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Test Page"})})},d=n(8),h=n(6),E=n(14),s=n.n(E),u="https://yellow-website.com/d9-music/d9-music",T=n(29);var f=function(){var e=Object(d.c)((function(e){return e.reducerNav.nav_data}));return console.log("Nav",e),Object(i.jsx)("div",{children:e.data.length>0?e.map((function(e){var t=e.attribution,n=t.title,a=t.url;return Object(i.jsx)(T.a,{to:a,children:n})})):"Data not loaded"})};var l=function(){var e=Object(d.b)();return Object(a.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(u,"/jsonapi/menu_items/main"),n="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t,a="".concat(u,"/jsonapi/media/image?include=field_media_image");return function(t){t({type:h.actionTypes.MAINMENU_START_FETCHING}),s.a.get(n,e).then((function(e){console.log("MAIN MENU",e.data),t({type:h.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:h.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})})),t({type:h.actionTypes.HOME_START_FETCHING}),s.a.get(a,e).then((function(e){console.log("action",e.data),t({type:h.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){t({type:h.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)(f,{}),Object(i.jsx)(_,{})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},N=n(11),O=n(27),v=n(28),H=n(6).actionTypes,g={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},p={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},j=Object(N.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case H.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.length};case H.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case H.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.length};case H.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}}}),R=Object(N.a)(v.a,Object(O.createLogger)()),m=Object(N.c)(j,R);o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(d.a,{store:m,children:Object(i.jsx)(l,{})})}),document.getElementById("root")),M()}},[[63,1,2]]]);
//# sourceMappingURL=main.96bcef97.chunk.js.map