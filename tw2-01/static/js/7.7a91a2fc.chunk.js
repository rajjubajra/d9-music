(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[7],{72:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,c=void 0;try{for(var a,u=e[Symbol.iterator]();!(i=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(s){r=!0,c=s}finally{try{i||null==u.return||u.return()}finally{if(r)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},77:function(e,t,n){"use strict";var i=n(72),r=n(0),c=n(3);t.a=function(e){var t=e.src,n=e.alt,a=e.cssClass,u=Object(r.useState)(!1),s=Object(i.a)(u,2),o=s[0],l=s[1],d=Object(r.useState)("hidden"),f=Object(i.a)(d,2),b=f[0],j=f[1];return console.log(o),Object(r.useEffect)((function(){o&&j("")}),[o]),Object(c.jsx)("img",{width:"100%",height:"100%",className:"".concat(b," ").concat(a),onLoad:function(){return l(!0)},onError:function(){return l(!1)},src:t,alt:n})}},772:function(e,t,n){"use strict";n.r(t);var i=n(72),r=n(0),c=n(16),a=n(19),u=n(80),s=n(77),o=n(3);var l=function(e){var t=e.listdata;return Object(o.jsx)("div",{className:"max-width-screen-xl m-auto p-10  grid grid-cols-1 grid-flow-row gap-6  md:grid-cols-2 lg:grid-cols-3 font-extralight",children:t.length>0&&t.map((function(e){return Object(o.jsxs)("div",{className:"w-full lg:max-w-screen-sm",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h3",{className:"text-3xl py-4",children:e.title})}),Object(o.jsx)("div",{children:e.image&&Object(o.jsx)(s.a,{cssClass:"w-full h-64 object-cover",src:e.image[0].url,alt:"Cover"})}),Object(o.jsx)("div",{className:"py-4",children:Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body.substring(0,400)}})}),Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{link:"/d9-music/themes/tw2-01/music/".concat(e.id)})})]},e.id)}))})},d=n(4);var f=function(e){var t=e.singleData;return console.log("passsing",t),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Music Page"}),t.length>0&&Object(o.jsxs)("div",{className:"m-5 p-3",children:[Object(o.jsx)("h2",{className:"my-2",children:t[0].title}),Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:t[0].body}}),Object(o.jsx)("ul",{className:"m-5 border p-4"})]})]})};t.default=function(){var e=Object(d.f)().id,t=Object(c.b)();Object(r.useEffect)((function(){t(Object(a.e)())}),[t]);var n=Object(c.c)((function(e){return e.reducerMusic.music_data.data})),u=Object(c.c)((function(e){return e.reducerMusic.music_fetched})),s=Object(c.c)((function(e){return e.reducerMusic.music_data.included})),b=Object(r.useState)([]),j=Object(i.a)(b,2),m=j[0],h=j[1],g=Object(r.useState)([]),O=Object(i.a)(g,2),p=O[0],v=O[1],y=Object(r.useState)([]),x=Object(i.a)(y,2),_=x[0],w=x[1],S=Object(r.useState)([]),I=Object(i.a)(S,2),E=I[0],N=I[1],M=Object(r.useState)(""),A=Object(i.a)(M,2),k=A[0],C=A[1];function D(e,t){var n=t.findIndex((function(t){return t.id===e}));return t[n].uri}function L(e,t){var n=t.findIndex((function(t){return t.id===e}));return t[n].filetype}function T(e,t){var n=[];return t.length>0&&e.length>0&&t.map((function(t){return e.some((function(e){return e.id===t.id}))&&n.push({id:t.id,filetype:t.filetype,name:t.name,url:t.uri})})),n}function H(e,t){var n=t.findIndex((function(t){return t.id===e}));return[{id:t[n].id,filetype:t[n].filetype,name:t[n].name,url:t[n].uri.url}]}return Object(r.useEffect)((function(){var e=[];u&&s.map((function(t){return"file--file"===t.type&&e.push({id:t.id,uri:t.attributes.uri,filetype:t.attributes.filemime})})),h(e)}),[u,s]),Object(r.useEffect)((function(){var e=[];u&&s.map((function(t){return"file--file"!==t.type&&e.push({id:t.id,name:t.attributes.name,mediaId:"media--audio"===t.type?t.relationships.field_media_audio_file.data.id:t.relationships.field_media_image.data.id})})),v(e)}),[u,s]),Object(r.useEffect)((function(){var e=[];p.length>0&&p.map((function(t){return e.push({id:t.id,name:t.name,uri:D(t.mediaId,m),filetype:L(t.mediaId,m)})})),w(e)}),[m,p]),console.log("usethisData",E),Object(r.useEffect)((function(){var e=[];u&&n.map((function(t){var n=t.attributes,i=n.title,r=n.field_music_body.processed,c=t.relationships.field_music_audio.data,a=t.relationships.field_music_image.data.id;return e.push({id:t.id,title:i,body:r,audio:_.length>0&&T(c,_),image:_.length>0&&H(a,_)})})),N(e)}),[_,n,u]),Object(r.useEffect)((function(){var t=E.length>0&&e&&E.findIndex((function(t){return t.id===e}));console.log("INDEX",t),console.log("selected data",E[t]),console.log("type of data",typeof E[t]),C(E[t])}),[E,e]),console.log("Single data",k),Object(o.jsx)(o.Fragment,{children:e?Object(o.jsx)(f,{singleData:k}):E.length>0&&Object(o.jsx)(l,{listdata:E})})}},80:function(e,t,n){"use strict";var i=n(24),r=n(3);t.a=function(e){var t=e.link;return Object(r.jsx)("div",{children:Object(r.jsx)(i.b,{className:"text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50",to:t,children:"Read More"})})}}}]);
//# sourceMappingURL=7.7a91a2fc.chunk.js.map