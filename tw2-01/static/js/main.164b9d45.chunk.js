(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},3:function(e,t,n){"use strict";n.r(t),n.d(t,"actionTypes",(function(){return a}));var a={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR"}},53:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),r=n.n(o),i=(n(25),n.p,n(26),n(5)),_=n(6),E=n(19),h=n(20),d=n(3).actionTypes,s={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},T={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},u=Object(_.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case d.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.length};case d.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case d.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.length};case d.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}}}),f=Object(_.a)(h.a,Object(E.createLogger)()),M=Object(_.c)(u,f),H=n(3),N=n(9),p=n.n(N),O="https://yellow-website.com/d9-music/d9-music",g=n(2);var R=function(){var e=Object(i.b)();return Object(a.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(O,"/jsonapi/menu_items/main"),n="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t,a="".concat(O,"/jsonapi/media/image?include=field_media_image");return function(t){t({type:H.actionTypes.MAINMENU_START_FETCHING}),p.a.get(n,e).then((function(e){console.log("MAIN MENU",e.data),t({type:H.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:H.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})})),t({type:H.actionTypes.HOME_START_FETCHING}),p.a.get(a,e).then((function(e){console.log("action",e.data),t({type:H.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){t({type:H.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:"Test Page"})})};var l=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)("header",{className:"App-header",children:Object(g.jsx)(i.a,{store:M,children:Object(g.jsx)(R,{})})})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(l,{})}),document.getElementById("root")),m()}},[[53,1,2]]]);
//# sourceMappingURL=main.164b9d45.chunk.js.map