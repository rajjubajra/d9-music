(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[11],{77:function(e,t,c){"use strict";var r=c(72),n=c(0),s=c(3);t.a=function(e){var t=e.src,c=e.alt,i=e.cssClass,u=Object(n.useState)(!1),o=Object(r.a)(u,2),a=o[0],d=o[1],b=Object(n.useState)("hidden"),l=Object(r.a)(b,2),f=l[0],j=l[1];return console.log(a),Object(n.useEffect)((function(){a&&j("")}),[a]),Object(s.jsx)("img",{width:"100%",height:"100%",className:"".concat(f," ").concat(i),onLoad:function(){return d(!0)},onError:function(){return d(!1)},src:t,alt:c})}},778:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(16),s=c(19),i=(c(80),c(77),c(3));var u=c(4);c(768),c(769),c(770),c(771);t.default=function(){Object(u.f)().id;var e=Object(n.b)();Object(r.useEffect)((function(){e(Object(s.e)())}),[e]);var t=Object(n.c)((function(e){return e.reducerMusic.music_data.data})),c=Object(n.c)((function(e){return e.reducerMusic.music_fetched})),o=Object(n.c)((function(e){return e.reducerMusic.music_data.included}));return console.log("MUSIC DATA",t),console.log("FETCHED",c),console.log("INCLUDED",o),Object(r.useEffect)((function(){var e=[];t.map((function(t){var c=t.attributes,r=c.title,n=c.field_music_body.processed;return e.push({id:t.id,title:r,body:n,audio:"",image:"",video:""})})),console.log("Array: ",e)}),[t]),Object(i.jsx)("div",{className:"max-w-screen-xl p-10 m-auto",children:Object(i.jsx)("h3",{children:"Music Album"})})}},80:function(e,t,c){"use strict";var r=c(24),n=c(3);t.a=function(e){var t=e.link;return Object(n.jsx)("div",{children:Object(n.jsx)(r.b,{className:"text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50",to:t,children:"Read More"})})}}}]);
//# sourceMappingURL=11.dbfca98c.chunk.js.map