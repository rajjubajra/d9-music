(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{25:function(e,t,n){},3:function(e,t,n){"use strict";n.r(t),n.d(t,"actionTypes",(function(){return c}));var c={HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR"}},52:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(4),r=n.n(o),i=(n(25),n(5)),h=n(3),_=n(18),d=n.n(_),s="https://yellow-website.com/d9-music",u=n(2);var E=function(){var e=Object(i.b)();return Object(c.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(s,"/jsonapi/media/image?include=field_media_image");return function(n){n({type:h.actionTypes.HOME_START_FETCHING}),d.a.get(t,e).then((function(e){console.log("action",e.data),n({type:h.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){n({type:h.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(u.jsx)("div",{children:"HOme page"})},f=n(6),O=n(19),T=n(20),H=n(3).actionTypes,m={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},g=Object(f.b)({reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case H.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.length};case H.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}}}),p=Object(f.a)(T.a,Object(O.createLogger)()),j=Object(f.c)(g,p);var b=function(){return Object(u.jsx)(i.a,{store:j,children:Object(u.jsx)(E,{})})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),l()}},[[52,1,2]]]);
//# sourceMappingURL=main.44ef153f.chunk.js.map