(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[11],{77:function(e,t,c){"use strict";var i=c(72),r=c(0),n=c(3);t.a=function(e){var t=e.src,c=e.alt,a=e.cssClass,s=Object(r.useState)(!1),u=Object(i.a)(s,2),o=u[0],d=u[1],l=Object(r.useState)("hidden"),f=Object(i.a)(l,2),b=f[0],j=f[1];return console.log(o),Object(r.useEffect)((function(){o&&j("")}),[o]),Object(n.jsx)("img",{width:"100%",height:"100%",className:"".concat(b," ").concat(a),onLoad:function(){return d(!0)},onError:function(){return d(!1)},src:t,alt:c})}},778:function(e,t,c){"use strict";c.r(t);var i=c(72),r=c(0),n=c(16),a=c(19),s=(c(80),c(77),c(3));var u=c(4);c(768),c(769),c(770),c(771);t.default=function(){Object(u.f)().id;var e=Object(n.b)();Object(r.useEffect)((function(){e(Object(a.e)())}),[e]);var t=Object(n.c)((function(e){return e.reducerMusic.music_data.data})),c=Object(n.c)((function(e){return e.reducerMusic.music_fetched})),o=Object(n.c)((function(e){return e.reducerMusic.music_data.included}));console.log("MUSIC DATA",t),console.log("FETCHED",c),console.log("INCLUDED",o);var d=Object(r.useState)([]),l=Object(i.a)(d,2),f=l[0],b=l[1];function j(e,t){var c=[];return t.map((function(t){return"media--audio"===t.type&&e.some((function(e){return e.id===t.id}))&&t.relationships.field_media_audio_file.data.id===t.id&&c.push(t.attributes.uri)})),c}return Object(r.useEffect)((function(){var e=[];c&&t.map((function(t){var c=t.attributes,i=c.title,r=c.field_music_body.processed,n=t.relationships.field_music_audio.data,a=t.relationships.field_music_image.data,s=t.relationships.field_music_video.data;return e.push({id:t.id,title:i,body:r,audio:j(n,o),image:a,video:s})})),b(e)}),[t,c,o]),console.log("NEW ARRAY",f),Object(s.jsx)("div",{className:"max-w-screen-xl p-10 m-auto",children:Object(s.jsx)("h3",{children:"Music Album"})})}},80:function(e,t,c){"use strict";var i=c(24),r=c(3);t.a=function(e){var t=e.link;return Object(r.jsx)("div",{children:Object(r.jsx)(i.b,{className:"text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50",to:t,children:"Read More"})})}}}]);
//# sourceMappingURL=11.68add90a.chunk.js.map