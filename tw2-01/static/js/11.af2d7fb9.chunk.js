(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[11],{77:function(e,t,i){"use strict";var c=i(72),s=i(0),n=i(3);t.a=function(e){var t=e.src,i=e.alt,a=e.cssClass,r=Object(s.useState)(!1),d=Object(c.a)(r,2),l=d[0],u=d[1],j=Object(s.useState)("hidden"),o=Object(c.a)(j,2),b=o[0],f=o[1];return console.log(l),Object(s.useEffect)((function(){l&&f("")}),[l]),Object(n.jsx)("img",{width:"100%",height:"100%",className:"".concat(b," ").concat(a),onLoad:function(){return u(!0)},onError:function(){return u(!1)},src:t,alt:i})}},778:function(e,t,i){"use strict";i.r(t);var c=i(72),s=i(0),n=i(16),a=i(19),r=i(80),d=i(77),l=i(3);var u=function(e){var t=e.listdata;return Object(l.jsx)("div",{className:"max-width-screen-xl m-auto p-10  grid grid-cols-1 grid-flow-row gap-6  md:grid-cols-2 lg:grid-cols-3 font-extralight",children:t.length>0&&t.map((function(e){return Object(l.jsxs)("div",{className:"w-full lg:max-w-screen-sm",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{className:"text-3xl py-4",children:e.title})}),Object(l.jsx)("div",{children:e.image&&Object(l.jsx)(d.a,{cssClass:"w-full h-64 object-cover",src:e.image[0].url,alt:"Cover"})}),Object(l.jsx)("div",{className:"py-4",children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body.substring(0,400)}})}),Object(l.jsx)("div",{children:Object(l.jsx)(r.a,{link:"/d9-music/themes/tw2-01/music/".concat(e.id)})})]},e.id)}))})},j=i(4),o=i(768),b=i(769),f=i(770),h=i(771);var m=function(){return Object(l.jsx)("div",{children:"x"})};var x=function(e){var t=e.singleData;return console.log("single data",t),console.log("passsing",typeof t),console.log("If undefined",void 0!==t&&t.title),Object(l.jsx)("div",{children:void 0!==t&&Object(l.jsxs)("div",{className:"grid grid-cols-12 gap-8 max-w-screen-xl m-auto p-10 font-extralight tracking-wide",children:[Object(l.jsx)("div",{className:"col-span-11 text-right",children:"share"}),Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)(m,{})}),Object(l.jsx)("div",{className:"col-span-12 md:col-span-6",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{className:"text-3xl my-5",children:t.title})}),Object(l.jsx)("div",{children:Object(l.jsx)(d.a,{src:t.image[0].url})}),Object(l.jsx)("div",{className:"my-6",children:Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:t.body}})})]})}),Object(l.jsxs)("div",{className:"col-span-12 md:col-span-6",children:[Object(l.jsxs)("div",{className:"px-10",children:[Object(l.jsx)("h3",{className:"py-4",children:"Shop"}),Object(l.jsxs)("div",{className:"grid grid-cols-6 grid-rows-1",children:[Object(l.jsx)("div",{children:Object(l.jsx)(b.a,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(f.b,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(f.a,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(h.a,{})})]})]}),Object(l.jsxs)("div",{className:"px-10 py-8",children:[Object(l.jsx)("h3",{className:"py-4",children:"Listen"}),Object(l.jsxs)("div",{className:"grid grid-cols-6 grid-rows-1",children:[Object(l.jsx)("div",{children:Object(l.jsx)(f.c,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(f.b,{})}),Object(l.jsx)("div",{children:Object(l.jsx)(h.a,{})})]})]}),Object(l.jsxs)("div",{className:"px-10 py-8",children:[Object(l.jsx)("h3",{className:"py-4",children:"Play"}),Object(l.jsx)(o.a,{url:"https://open.spotify.com/embed/playlist/37i9dQZF1DX3PFzdbtx1Us",width:"100%",height:"380",id:"myId"})]})]})]})})};t.default=function(){var e=Object(j.f)().id,t=Object(n.b)();Object(s.useEffect)((function(){t(Object(a.e)())}),[t]);var i=Object(n.c)((function(e){return e.reducerMusic.music_data.data})),r=Object(n.c)((function(e){return e.reducerMusic.music_fetched})),d=Object(n.c)((function(e){return e.reducerMusic.music_data.included})),o=Object(s.useState)([]),b=Object(c.a)(o,2),f=b[0],h=b[1],m=Object(s.useState)([]),O=Object(c.a)(m,2),p=O[0],g=O[1],v=Object(s.useState)([]),y=Object(c.a)(v,2),_=y[0],N=y[1],w=Object(s.useState)([]),I=Object(c.a)(w,2),S=I[0],E=I[1],M=Object(s.useState)(""),k=Object(c.a)(M,2),D=k[0],L=k[1];function C(e,t){var i=t.findIndex((function(t){return t.id===e}));return t[i].uri}function F(e,t){var i=t.findIndex((function(t){return t.id===e}));return t[i].filetype}function H(e,t){var i=[];return t.length>0&&e.length>0&&t.map((function(t){return e.some((function(e){return e.id===t.id}))&&i.push({id:t.id,title:t.audio_title,filetype:t.filetype,name:t.name,url:t.uri})})),i}function J(e,t){var i=t.findIndex((function(t){return t.id===e}));return[{id:t[i].id,filetype:t[i].filetype,name:t[i].name,url:t[i].uri.url}]}return Object(s.useEffect)((function(){var e=[];r&&d.map((function(t){return"file--file"===t.type&&e.push({id:t.id,uri:t.attributes.uri,filetype:t.attributes.filemime})})),h(e)}),[r,d]),Object(s.useEffect)((function(){var e=[];r&&d.map((function(t){return"file--file"!==t.type&&e.push({id:t.id,audio_title:"media--audio"===t.type?t.attributes.field_audio_title:null,name:t.attributes.name,mediaId:"media--audio"===t.type?t.relationships.field_media_audio_file.data.id:t.relationships.field_media_image.data.id})})),g(e)}),[r,d]),Object(s.useEffect)((function(){var e=[];p.length>0&&p.map((function(t){return e.push({id:t.id,name:t.name,audio_title:t.audio_title,uri:C(t.mediaId,f),filetype:F(t.mediaId,f)})})),N(e)}),[f,p]),console.log("Result",_),console.log("usethisData",S),Object(s.useEffect)((function(){var e=[];r&&i.map((function(t){var i=t.attributes,c=i.title,s=i.field_music_body.processed,n=t.relationships.field_music_audio.data,a=t.relationships.field_music_image.data.id;return e.push({id:t.id,title:c,body:s,audio:_.length>0&&H(n,_),image:_.length>0&&J(a,_)})})),E(e)}),[_,i,r]),Object(s.useEffect)((function(){var t=S.length>0&&e&&S.findIndex((function(t){return t.id===e}));console.log("INDEX",t),console.log("selected data",S[t]),console.log("type of data",typeof S[t]),L(S[t])}),[S,e]),console.log("Single data",D),Object(l.jsx)("div",{className:"max-w-screen-xl p-10 m-auto",children:e?Object(l.jsx)(x,{singleData:D}):S.length>0&&Object(l.jsx)(u,{listdata:S})})}},80:function(e,t,i){"use strict";var c=i(24),s=i(3);t.a=function(e){var t=e.link;return Object(s.jsx)("div",{children:Object(s.jsx)(c.b,{className:"text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50",to:t,children:"Read More"})})}}}]);
//# sourceMappingURL=11.af2d7fb9.chunk.js.map