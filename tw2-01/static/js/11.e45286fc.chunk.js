(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[11],{77:function(e,t,i){"use strict";var c=i(72),a=i(0),n=i(3);t.a=function(e){var t=e.src,i=e.alt,r=e.cssClass,u=Object(a.useState)(!1),o=Object(c.a)(u,2),s=o[0],d=o[1],l=Object(a.useState)("hidden"),f=Object(c.a)(l,2),m=f[0],b=f[1];return console.log(s),Object(a.useEffect)((function(){s&&b("")}),[s]),Object(n.jsx)("img",{width:"100%",height:"100%",className:"".concat(m," ").concat(r),onLoad:function(){return d(!0)},onError:function(){return d(!1)},src:t,alt:i})}},778:function(e,t,i){"use strict";i.r(t);var c=i(72),a=i(0),n=i(16),r=i(19),u=(i(80),i(77),i(3));var o=i(4);i(768),i(769),i(770),i(771);t.default=function(){Object(o.f)().id;var e=Object(n.b)();Object(a.useEffect)((function(){e(Object(r.e)())}),[e]);var t=Object(n.c)((function(e){return e.reducerMusic.music_data.data})),i=Object(n.c)((function(e){return e.reducerMusic.music_fetched})),s=Object(n.c)((function(e){return e.reducerMusic.music_data.included}));console.log("MUSIC DATA",t),console.log("FETCHED",i),console.log("INCLUDED",s);var d=Object(a.useState)([]),l=Object(c.a)(d,2),f=l[0],m=l[1];function b(e,t){var i=[];return t.map((function(t){return"media--audio"===t.type&&e.some((function(e){return e.id===t.id}))&&i.push(t.relationships.field_media_audio_file.data)})),i}function h(e,t){console.log("image id:-",e);var i=[];t.map((function(t){return"media--image"===t.type&&e===t.id&&i.push(t.relationships.field_media_image.data)}))}function j(e,t){var i=[];t.map((function(t){return"media--remote_video"===t.type&&e===t.id&&i.push({youtube:t.attributes.field_media_oembed_video,name:t.attributes.name})}))}return Object(a.useEffect)((function(){var e=[];i&&t.map((function(t){var i=t.attributes,c=i.title,a=i.field_music_body.processed,n=t.relationships.field_music_audio.data,r=t.relationships.field_music_image.data.id,u=t.relationships.field_music_video.data.id;return e.push({id:t.id,title:c,body:a,audio:b(n,s),image:h(r,s),video:j(u,s)})})),m(e)}),[t,i,s]),console.log("NEW ARRAY",f),Object(u.jsx)("div",{className:"max-w-screen-xl p-10 m-auto",children:Object(u.jsx)("h3",{children:"Music Album"})})}},80:function(e,t,i){"use strict";var c=i(24),a=i(3);t.a=function(e){var t=e.link;return Object(a.jsx)("div",{children:Object(a.jsx)(c.b,{className:"text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50",to:t,children:"Read More"})})}}}]);
//# sourceMappingURL=11.e45286fc.chunk.js.map