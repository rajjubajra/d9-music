(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},3:function(e,t,c){"use strict";c.r(t),c.d(t,"actionTypes",(function(){return n}));var n={HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),o=c(4),i=c.n(o),r=(c(25),c.p,c(26),c(5)),h=c(6),s=c(18),d=c(19),u=c(3).actionTypes,_={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},E=Object(h.b)({reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case u.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.length};case u.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}}}),O=Object(h.a)(d.a,Object(s.createLogger)()),f=Object(h.c)(E,O),T=c(3),m=c(20),p=c.n(m),H="https://yellow-website.com/d9-music/d9-music",j=c(2);var g=function(){var e=Object(r.b)();return Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(H,"/jsonapi/media/image?include=field_media_image");return function(c){c({type:T.actionTypes.HOME_START_FETCHING}),p.a.get(t,e).then((function(e){console.log("action",e.data),c({type:T.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){c({type:T.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Test Page"})})};var l=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(r.a,{store:f,children:Object(j.jsx)(g,{})})})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),o(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root")),b()}},[[53,1,2]]]);
//# sourceMappingURL=main.61f987c1.chunk.js.map