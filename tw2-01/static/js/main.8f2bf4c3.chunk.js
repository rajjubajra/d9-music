(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},3:function(e,t,n){"use strict";n.r(t),n.d(t,"actionTypes",(function(){return c}));var c={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR"}},53:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(4),i=n.n(o),r=(n(25),n.p,n(26),n(5)),E=n(6),s=n(19),_=n(20),h=n(3).actionTypes,d={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},T=Object(E.b)({reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case h.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.length};case h.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}}}),u=Object(E.a)(_.a,Object(s.createLogger)()),H=Object(E.c)(T,u),p=n(3),M=n(9),O=n.n(M),f="https://yellow-website.com/d9-music/d9-music",m=n(2);var N=function(){var e=Object(r.b)();return Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(f,"/jsonapi/menu_items/main"),n="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t,c="".concat(f,"/jsonapi/media/image?include=field_media_image");return function(t){t({type:p.actionTypes.MAINMENU_START_FETCHING}),O.a.get(n,e).then((function(e){console.log("MAIN MENU",e.data),t({type:p.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:p.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})})),t({type:p.actionTypes.HOME_START_FETCHING}),O.a.get(c,e).then((function(e){console.log("action",e.data),t({type:p.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){t({type:p.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Test Page"})})};var R=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("header",{className:"App-header",children:Object(m.jsx)(r.a,{store:H,children:Object(m.jsx)(N,{})})})})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root")),l()}},[[53,1,2]]]);
//# sourceMappingURL=main.8f2bf4c3.chunk.js.map