(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[11],{77:function(e,t,c){"use strict";var i=c(72),s=c(0),r=c(12),a=c(3);t.a=function(e){var t=e.src,c=e.alt,d=e.cssClass,n=Object(s.useState)(!1),l=Object(i.a)(n,2),j=l[0],o=l[1];return console.log("loading",j),Object(s.useEffect)((function(){var e=new Image;e.onload=function(){o(!0)},e.src=t}),[t]),j?Object(a.jsx)("img",{width:"100%",height:"100%",className:d,src:t,alt:c}):Object(a.jsx)(r.a,{})}},778:function(e,t,c){"use strict";c.r(t);var i=c(72),s=c(0),r=c(16),a=c(19),d=c(80),n=c(77),l=c(3);var j=function(e){var t=e.listdata;return Object(l.jsx)("div",{className:"max-width-screen-xl m-auto p-10  grid grid-cols-1 grid-flow-row gap-6  md:grid-cols-2 lg:grid-cols-3 font-extralight",children:t.length>0&&t.map((function(e,t){return Object(l.jsxs)("div",{className:"w-full lg:max-w-screen-sm",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{className:"text-3xl py-4",children:e.title})}),Object(l.jsx)("div",{children:e.image&&Object(l.jsx)(n.a,{cssClass:"w-full h-64 object-cover",src:e.image[0].url,alt:"Cover"})}),Object(l.jsx)("div",{className:"py-4",children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body.substring(0,400)}})}),Object(l.jsx)("div",{children:Object(l.jsx)(d.a,{link:"/d9-music/themes/tw2-01/music/".concat(t)})})]},e.id)}))})},o=c(4),u=c(768),b=c(769),x=c(770),h=c(771);var m=function(){return Object(l.jsx)("div",{children:"x"})};var O=function(e){var t=e.index,c=e.arr;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"grid grid-cols-12 gap-8 max-w-screen-xl m-auto p-10 font-extralight tracking-wide",children:[Object(l.jsx)("div",{className:"col-span-11 text-right",children:"share"}),Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)(m,{})}),Object(l.jsx)("div",{className:"col-span-12 md:col-span-6",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{className:"text-3xl my-5",children:c[t].title})}),Object(l.jsx)("div",{children:Object(l.jsx)(n.a,{src:c[t].image[0].url})}),Object(l.jsx)("div",{className:"my-6",children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:c[t].body}})})]})}),Object(l.jsxs)("div",{className:"col-span-12 md:col-span-6",children:[Object(l.jsxs)("div",{className:"px-10",children:[Object(l.jsx)("h3",{className:"py-4",children:"Shop"}),Object(l.jsxs)("div",{className:"grid grid-cols-6 grid-rows-1",children:[Object(l.jsx)("div",{children:Object(l.jsx)(b.a,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(x.b,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(x.a,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(h.a,{})})]})]}),Object(l.jsxs)("div",{className:"px-10 py-8",children:[Object(l.jsx)("h3",{className:"py-4",children:"Listen"}),Object(l.jsxs)("div",{className:"grid grid-cols-6 grid-rows-1",children:[Object(l.jsx)("div",{children:Object(l.jsx)(x.c,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(x.b,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(h.a,{})})]})]}),Object(l.jsxs)("div",{className:"px-10 py-8",children:[Object(l.jsx)("h3",{className:"py-4",children:"Play"}),Object(l.jsx)(u.a,{url:"https://open.spotify.com/embed/playlist/37i9dQZF1DX3PFzdbtx1Us",width:"100%",height:"380",id:"myId"})]}),Object(l.jsx)("div",{className:"px-10 py-8",children:Object(l.jsx)(u.a,{url:c[t].video[0].youtube,width:"100%",id:"myId"})})]})]})})},v=c(12);t.default=function(){var e=Object(o.f)().id,t=Object(r.b)();Object(s.useEffect)((function(){t(Object(a.e)())}),[t]);var c=Object(r.c)((function(e){return e.reducerMusic.music_data.data})),d=Object(r.c)((function(e){return e.reducerMusic.music_fetched})),n=Object(r.c)((function(e){return e.reducerMusic.music_data.included}));console.log("MUSIC DATA",c),console.log("FETCHED",d),console.log("INCLUDED",n);var u=Object(s.useState)([]),b=Object(i.a)(u,2),x=b[0],h=b[1];function m(e,t){var c=[];return t.map((function(i){return"media--audio"===i.type&&e.some((function(e){return e.id===i.id}))&&function(e,t){t.map((function(t){return e===t.id&&c.push(t.attributes.uri)}))}(i.relationships.field_media_audio_file.data.id,t)})),c}function f(e,t){var c=[];return t.map((function(i){return e===i.id&&function(e,t){t.map((function(t){return t.id===e&&c.push(t.attributes.uri)}))}(i.relationships.field_media_image.data.id,t)})),c}function p(e,t){var c=[];return t.map((function(t){return e===t.id&&c.push({youtube:t.attributes.field_media_oembed_video,name:t.attributes.name})})),c}return Object(s.useEffect)((function(){var e=[];d&&c.map((function(t){var c=t.attributes,i=c.title,s=c.field_music_body.processed,r=t.relationships.field_music_audio.data,a=t.relationships.field_music_image.data.id,d=t.relationships.field_music_video.data.id;return e.push({id:t.id,title:i,body:s,audio:m(r,n),image:f(a,n),video:p(d,n)})})),h(e)}),[c,d,n]),console.log("NEW ARRAY",x,e),Object(l.jsx)("div",{className:"max-w-screen-xl p-10 m-auto",children:d?e?Object(l.jsx)(O,{index:e,arr:x}):Object(l.jsx)(j,{listdata:x}):Object(l.jsx)(v.a,{})})}},80:function(e,t,c){"use strict";var i=c(24),s=c(3);t.a=function(e){var t=e.link;return Object(s.jsx)("div",{children:Object(s.jsx)(i.b,{className:"text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50",to:t,children:"Read More"})})}}}]);
//# sourceMappingURL=11.d946effb.chunk.js.map