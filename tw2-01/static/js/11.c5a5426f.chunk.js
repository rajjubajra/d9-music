(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[11],{77:function(e,t,i){"use strict";var c=i(72),n=i(0),r=i(3);t.a=function(e){var t=e.src,i=e.alt,a=e.cssClass,u=Object(n.useState)(!1),o=Object(c.a)(u,2),s=o[0],d=o[1],f=Object(n.useState)("hidden"),l=Object(c.a)(f,2),b=l[0],m=l[1];return console.log(s),Object(n.useEffect)((function(){s&&m("")}),[s]),Object(r.jsx)("img",{width:"100%",height:"100%",className:"".concat(b," ").concat(a),onLoad:function(){return d(!0)},onError:function(){return d(!1)},src:t,alt:i})}},778:function(e,t,i){"use strict";i.r(t);var c=i(72),n=i(0),r=i(16),a=i(19),u=(i(80),i(77),i(3));var o=i(4);i(768),i(769),i(770),i(771);t.default=function(){Object(o.f)().id;var e=Object(r.b)();Object(n.useEffect)((function(){e(Object(a.e)())}),[e]);var t=Object(r.c)((function(e){return e.reducerMusic.music_data.data})),i=Object(r.c)((function(e){return e.reducerMusic.music_fetched})),s=Object(r.c)((function(e){return e.reducerMusic.music_data.included}));console.log("MUSIC DATA",t),console.log("FETCHED",i),console.log("INCLUDED",s);var d=Object(n.useState)([]),f=Object(c.a)(d,2),l=f[0],b=f[1];function m(e,t){var i=[];return t.map((function(t){return"media--audio"===t.type&&e.some((function(e){return e.id===t.id}))&&i.push(t.relationships.field_media_audio_file.data)})),i}function h(e,t){t.map((function(i){var c=i.relationships.field_media_image.data.id;return e===i.id&&function(e,t){var i=[];return t.map((function(t){return t.id===e&&i.push(t.attributes.uri)})),i}(c,t)}))}function j(e,t){var i=[];return t.map((function(t){return"media--remote_video"===t.type&&e===t.id&&i.push({youtube:t.attributes.field_media_oembed_video,name:t.attributes.name})})),i}return Object(n.useEffect)((function(){var e=[];i&&t.map((function(t){var i=t.attributes,c=i.title,n=i.field_music_body.processed,r=t.relationships.field_music_audio.data,a=t.relationships.field_music_image.data.id,u=t.relationships.field_music_video.data.id;return e.push({id:t.id,title:c,body:n,audio:m(r,s),image:h(a,s),video:j(u,s)})})),b(e)}),[t,i,s]),console.log("NEW ARRAY",l),Object(u.jsx)("div",{className:"max-w-screen-xl p-10 m-auto",children:Object(u.jsx)("h3",{children:"Music Album"})})}},80:function(e,t,i){"use strict";var c=i(24),n=i(3);t.a=function(e){var t=e.link;return Object(n.jsx)("div",{children:Object(n.jsx)(c.b,{className:"text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50",to:t,children:"Read More"})})}}}]);
//# sourceMappingURL=11.c5a5426f.chunk.js.map