(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[10],{77:function(e,t,i){"use strict";var n=i(72),c=i(0),r=i(3);t.a=function(e){var t=e.src,i=e.alt,a=e.cssClass,s=Object(c.useState)(!1),u=Object(n.a)(s,2),d=u[0],l=u[1],o=Object(c.useState)("hidden"),f=Object(n.a)(o,2),j=f[0],b=f[1];return console.log(d),Object(c.useEffect)((function(){d&&b("")}),[d]),Object(r.jsx)("img",{width:"100%",height:"100%",className:"".concat(j," ").concat(a),onLoad:function(){return l(!0)},onError:function(){return l(!1)},src:t,alt:i})}},772:function(e,t,i){"use strict";i.r(t);var n=i(72),c=i(0),r=i(16),a=i(19),s=i(80),u=i(77),d=i(3);var l=function(e){var t=e.listdata;return Object(d.jsx)("div",{className:"max-width-screen-xl m-auto p-10  grid grid-cols-1 grid-flow-row gap-6  md:grid-cols-2 lg:grid-cols-3 font-extralight",children:t.length>0&&t.map((function(e){return Object(d.jsxs)("div",{className:"w-full lg:max-w-screen-sm",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h3",{className:"text-3xl py-4",children:e.title})}),Object(d.jsx)("div",{children:e.image&&Object(d.jsx)(u.a,{cssClass:"w-full h-64 object-cover",src:e.image[0].url,alt:"Cover"})}),Object(d.jsx)("div",{className:"py-4",children:Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body.substring(0,400)}})}),Object(d.jsx)("div",{children:Object(d.jsx)(s.a,{link:"/d9-music/themes/tw2-01/music/".concat(e.id)})})]},e.id)}))})},o=i(4),f=i(767),j=function(e){var t=function(e){var t=Object(c.useState)(new Audio(e)),i=Object(n.a)(t,1)[0],r=Object(c.useState)(!1),a=Object(n.a)(r,2),s=a[0],u=a[1];return Object(c.useEffect)((function(){s?i.play():i.pause()}),[i,s]),Object(c.useEffect)((function(){return i.addEventListener("ended",(function(){return u(!1)})),function(){i.removeEventListener("ended",(function(){return u(!1)}))}}),[i]),console.log("duration?",i.duration,i),Object(c.useEffect)((function(){var e=function(){return setInterval((function(){console.log("update",i.ontimeupdate),console.log("tiemupdate",i.currentTime)}),1e3)};s?e():clearInterval(e)}),[i.currentTime,i.ontimeupdate,s]),[s,function(){return u(!s)}]}(e.url),i=Object(n.a)(t,2),r=i[0],a=i[1];return Object(d.jsxs)("div",{className:"grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4",children:[Object(d.jsx)("div",{className:"border border-gray-400",children:function(e){var t=e.progressPercentage;return Object(d.jsx)("div",{className:"h-1 w-full bg-gray-300",children:Object(d.jsx)("div",{style:{width:"".concat(t,"%")},className:"h-full ".concat(t<70?"bg-red-600":"bg-green-600")})})}(50)}),Object(d.jsx)("button",{onClick:a,children:r?Object(d.jsx)(f.a,{}):Object(d.jsx)(f.b,{})})]})};var b=function(e){return e.data.map((function(e){var t=e.title,i=e.url.url;return Object(d.jsxs)("li",{children:[Object(d.jsx)("h3",{children:t}),Object(d.jsx)(j,{url:i})]})}))};var m=function(e){var t=e.singleData;return console.log("single data",t),console.log("passsing",typeof t),console.log("If undefined",void 0!==t&&t.title),Object(d.jsx)("div",{children:void 0!==t&&Object(d.jsxs)("div",{className:"m-5 p-3",children:[Object(d.jsx)("h2",{className:"my-2",children:t.title}),Object(d.jsx)("ul",{className:"m-5 border p-4",children:Object(d.jsx)(u.a,{src:t.image[0].url,alt:"Cover"})}),Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:t.body}}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Play songs"}),Object(d.jsx)(b,{data:t.audio})]})]})})};t.default=function(){var e=Object(o.f)().id,t=Object(r.b)();Object(c.useEffect)((function(){t(Object(a.e)())}),[t]);var i=Object(r.c)((function(e){return e.reducerMusic.music_data.data})),s=Object(r.c)((function(e){return e.reducerMusic.music_fetched})),u=Object(r.c)((function(e){return e.reducerMusic.music_data.included})),f=Object(c.useState)([]),j=Object(n.a)(f,2),b=j[0],O=j[1],g=Object(c.useState)([]),h=Object(n.a)(g,2),v=h[0],p=h[1],x=Object(c.useState)([]),y=Object(n.a)(x,2),_=y[0],w=y[1],E=Object(c.useState)([]),N=Object(n.a)(E,2),I=N[0],S=N[1],M=Object(c.useState)(""),k=Object(n.a)(M,2),C=k[0],L=k[1];function D(e,t){var i=t.findIndex((function(t){return t.id===e}));return t[i].uri}function T(e,t){var i=t.findIndex((function(t){return t.id===e}));return t[i].filetype}function H(e,t){var i=[];return t.length>0&&e.length>0&&t.map((function(t){return e.some((function(e){return e.id===t.id}))&&i.push({id:t.id,title:t.audio_title,filetype:t.filetype,name:t.name,url:t.uri})})),i}function J(e,t){var i=t.findIndex((function(t){return t.id===e}));return[{id:t[i].id,filetype:t[i].filetype,name:t[i].name,url:t[i].uri.url}]}return Object(c.useEffect)((function(){var e=[];s&&u.map((function(t){return"file--file"===t.type&&e.push({id:t.id,uri:t.attributes.uri,filetype:t.attributes.filemime})})),O(e)}),[s,u]),Object(c.useEffect)((function(){var e=[];s&&u.map((function(t){return"file--file"!==t.type&&e.push({id:t.id,audio_title:"media--audio"===t.type?t.attributes.field_audio_title:null,name:t.attributes.name,mediaId:"media--audio"===t.type?t.relationships.field_media_audio_file.data.id:t.relationships.field_media_image.data.id})})),p(e)}),[s,u]),Object(c.useEffect)((function(){var e=[];v.length>0&&v.map((function(t){return e.push({id:t.id,name:t.name,audio_title:t.audio_title,uri:D(t.mediaId,b),filetype:T(t.mediaId,b)})})),w(e)}),[b,v]),console.log("Result",_),console.log("usethisData",I),Object(c.useEffect)((function(){var e=[];s&&i.map((function(t){var i=t.attributes,n=i.title,c=i.field_music_body.processed,r=t.relationships.field_music_audio.data,a=t.relationships.field_music_image.data.id;return e.push({id:t.id,title:n,body:c,audio:_.length>0&&H(r,_),image:_.length>0&&J(a,_)})})),S(e)}),[_,i,s]),Object(c.useEffect)((function(){var t=I.length>0&&e&&I.findIndex((function(t){return t.id===e}));console.log("INDEX",t),console.log("selected data",I[t]),console.log("type of data",typeof I[t]),L(I[t])}),[I,e]),console.log("Single data",C),Object(d.jsx)(d.Fragment,{children:e?Object(d.jsx)(m,{singleData:C}):I.length>0&&Object(d.jsx)(l,{listdata:I})})}},80:function(e,t,i){"use strict";var n=i(24),c=i(3);t.a=function(e){var t=e.link;return Object(c.jsx)("div",{children:Object(c.jsx)(n.b,{className:"text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50",to:t,children:"Read More"})})}}}]);
//# sourceMappingURL=10.0b57e41a.chunk.js.map