(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},6:function(e,t,n){"use strict";n.r(t),n.d(t,"actionTypes",(function(){return a}));var a={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR"}},63:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),i=(n(34),n(35),n(2));var d=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Test Page"})})},_=n(7),h=n(6),E=n(14),s=n.n(E),u="https://yellow-website.com/d9-music/d9-music",T=n(29);var f=function(){var e=Object(_.c)((function(e){return e.reducerNav.nav_data.data})),t=Object(_.c)((function(e){return e.reducerNav.nav_dataLength}));return console.log("Nav",e),console.log("Length:",t),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Main Nav"}),t>0?e.map((function(e,t){return Object(i.jsx)(T.a,{children:e.attributes.title},t)})):"data not loaded yet"]})};var N=function(){var e=Object(_.b)();return Object(a.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(u,"/jsonapi/menu_items/main"),n="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t,a="".concat(u,"/jsonapi/media/image?include=field_media_image");return function(t){t({type:h.actionTypes.MAINMENU_START_FETCHING}),s.a.get(n,e).then((function(e){console.log("MAIN MENU",e.data),t({type:h.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:h.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})})),t({type:h.actionTypes.HOME_START_FETCHING}),s.a.get(a,e).then((function(e){console.log("action",e.data),t({type:h.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){t({type:h.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)(f,{}),Object(i.jsx)(d,{})]})})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},M=n(11),O=n(27),v=n(28),g=n(6).actionTypes,H={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},j={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},p=Object(M.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case g.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.data.length};case g.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case g.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.length};case g.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}}}),R=Object(M.a)(v.a,Object(O.createLogger)()),m=Object(M.c)(p,R);o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(_.a,{store:m,children:Object(i.jsx)(N,{})})}),document.getElementById("root")),l()}},[[63,1,2]]]);
//# sourceMappingURL=main.91351e39.chunk.js.map