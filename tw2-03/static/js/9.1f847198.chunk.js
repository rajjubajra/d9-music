(this["webpackJsonptw2-03-music"]=this["webpackJsonptw2-03-music"]||[]).push([[9],{72:function(e,t,c){"use strict";var i=c(71),s=c(0),r=c(12),a=c(3);t.a=function(e){var t=e.src,c=e.alt,n=e.cssClass,d=Object(s.useState)(!1),l=Object(i.a)(d,2),j=l[0],o=l[1];return Object(s.useEffect)((function(){var e=new Image;e.onload=function(){o(!0)},e.src=t}),[t]),j?Object(a.jsx)("img",{width:"100%",height:"100%",className:n,src:t,alt:c}):Object(a.jsx)(r.a,{})}},73:function(e,t,c){"use strict";var i=c(24),s=c(3);t.a=function(e){var t=e.link;return Object(s.jsx)("div",{children:Object(s.jsx)(i.b,{className:"text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50",to:t,children:"Read More"})})}},87:function(e,t,c){"use strict";c.r(t);var i=c(71),s=c(0),r=c(16),a=c(19),n=c(73),d=c(72),l=c(3);var j=function(e){var t=e.listdata;return Object(l.jsx)("div",{className:"max-width-screen-xl m-auto p-10  grid grid-cols-1 grid-flow-row gap-6  md:grid-cols-2 lg:grid-cols-3 font-extralight",children:t.length>0&&t.map((function(e,t){return Object(l.jsxs)("div",{className:"relative w-full lg:max-w-screen-sm",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{className:"text-xl lg:text-2xl  py-4",children:e.title})}),Object(l.jsx)("div",{children:e.image&&Object(l.jsx)(d.a,{cssClass:"w-full h-64 object-cover",src:e.image[0].url,alt:"Cover"})}),Object(l.jsx)("div",{className:"py-4 mb-5",children:Object(l.jsx)("div",{className:"text-sm tracking-wide",dangerouslySetInnerHTML:{__html:e.body.substring(0,400)}})}),Object(l.jsx)("div",{className:"absolute bottom-0",children:Object(l.jsx)(n.a,{link:"/d9-music/themes/tw2-03/music/".concat(t)})})]},e.id)}))})},o=c(4),u=c(77),b=c(78),x=c(79),m=c(80);var h=function(){return Object(l.jsx)("div",{children:"x"})},O=c(24);var v=function(e){var t=e.index,c=e.arr;console.log("MUSIC DETAILS",t,c);var r=Object(s.useState)(),a=Object(i.a)(r,2),n=a[0],j=a[1],o=Object(s.useState)("Share"),v=Object(i.a)(o,2),p=v[0],f=v[1];return Object(s.useEffect)((function(){var e=c[t].video[0].youtube;j(e.replace("https://youtu.be/",""))}),[c,t]),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"grid grid-cols-12 gap-8 max-w-screen-xl m-auto p-10 font-extralight tracking-wide",children:[Object(l.jsx)("div",{className:"col-span-11 text-right cursor-pointer text-xs",children:Object(l.jsx)("div",{onClick:function(){return navigator.clipboard.writeText(window.location.href),void f("Link copied")},title:p,children:Object(l.jsx)("div",{onMouseEnter:function(){return f("Link copied"!==p&&"Copy Link")},onMouseLeave:function(){return f("Link copied"!==p&&"Share")},children:p})})}),Object(l.jsx)("div",{className:"text-center cursor-pointer",children:Object(l.jsx)(O.b,{to:"/d9-music/themes/tw2-03/music",children:Object(l.jsx)(h,{})})}),Object(l.jsx)("div",{className:"col-span-12 md:col-span-6",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{className:"text-3xl my-5",children:c[t].title})}),Object(l.jsx)("div",{children:Object(l.jsx)(d.a,{src:c[t].image[0].url})}),Object(l.jsx)("div",{className:"my-6",children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:c[t].body}})})]})}),Object(l.jsxs)("div",{className:"col-span-12 md:col-span-6",children:[Object(l.jsxs)("div",{className:"px-10",children:[Object(l.jsx)("h3",{className:"py-4",children:"Shop"}),Object(l.jsxs)("div",{className:"grid grid-cols-6 grid-rows-1",children:[Object(l.jsx)("div",{children:Object(l.jsx)(b.a,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(x.b,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(x.a,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(m.a,{})})]})]}),Object(l.jsxs)("div",{className:"px-10 py-8",children:[Object(l.jsx)("h3",{className:"py-4",children:"Listen"}),Object(l.jsxs)("div",{className:"grid grid-cols-6 grid-rows-1",children:[Object(l.jsx)("div",{children:Object(l.jsx)(x.c,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(x.b,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(m.a,{})})]})]}),Object(l.jsxs)("div",{className:"px-10 py-8",children:[Object(l.jsx)("h3",{className:"py-4",children:"Play"}),Object(l.jsx)(u.a,{url:"https://open.spotify.com/embed/playlist/37i9dQZF1DX3PFzdbtx1Us",width:"100%",height:"380",id:"myId"})]}),Object(l.jsx)("div",{className:"px-10 py-8",children:Object(l.jsx)(u.a,{url:"https://www.youtube.com/embed/".concat(n),width:"100%",id:"myId"})})]})]})})},p=c(12);t.default=function(){var e=Object(o.f)().id,t=Object(r.b)();Object(s.useEffect)((function(){t(Object(a.f)())}),[t]);var c=Object(r.c)((function(e){return e.reducerMusic.music_data.data})),n=Object(r.c)((function(e){return e.reducerMusic.music_fetched})),d=Object(r.c)((function(e){return e.reducerMusic.music_data.included}));console.log("MUSIC DATA",c),console.log("FETCHED",n),console.log("INCLUDED",d);var u=Object(s.useState)([]),b=Object(i.a)(u,2),x=b[0],m=b[1];function h(e,t){var c=[];return t.map((function(i){return"media--audio"===i.type&&e.some((function(e){return e.id===i.id}))&&function(e,t){t.map((function(t){return e===t.id&&c.push(t.attributes.uri)}))}(i.relationships.field_media_audio_file.data.id,t)})),c}function O(e,t){var c=[];return t.map((function(i){return e===i.id&&function(e,t){t.map((function(t){return t.id===e&&c.push(t.attributes.uri)}))}(i.relationships.field_media_image.data.id,t)})),c}function f(e,t){var c=[];return t.map((function(t){return e===t.id&&c.push({youtube:t.attributes.field_media_oembed_video,name:t.attributes.name})})),c}return Object(s.useEffect)((function(){var e=[];n&&c.map((function(t){var c=t.attributes,i=c.title,s=c.field_music_body.processed,r=t.relationships.field_music_audio.data,a=t.relationships.field_music_image.data.id,n=t.relationships.field_music_video.data.id;return e.push({id:t.id,title:i,body:s,audio:h(r,d),image:O(a,d),video:f(n,d)})})),m(e)}),[c,n,d]),console.log("NEW ARRAY",x,e),Object(l.jsx)("div",{className:"max-w-screen-xl p-10 m-auto",children:n?e?Object(l.jsx)(v,{index:e,arr:x}):Object(l.jsx)(j,{listdata:x}):Object(l.jsx)(p.a,{})})}}}]);
//# sourceMappingURL=9.1f847198.chunk.js.map