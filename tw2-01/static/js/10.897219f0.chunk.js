(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[10],{72:function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,r=!1,c=void 0;try{for(var a,u=t[Symbol.iterator]();!(i=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(s){r=!0,c=s}finally{try{i||null==u.return||u.return()}finally{if(r)throw c}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return r}))},77:function(t,e,n){"use strict";var i=n(72),r=n(0),c=n(3);e.a=function(t){var e=t.src,n=t.alt,a=t.cssClass,u=Object(r.useState)(!1),s=Object(i.a)(u,2),o=s[0],l=s[1],d=Object(r.useState)("hidden"),f=Object(i.a)(d,2),b=f[0],m=f[1];return console.log(o),Object(r.useEffect)((function(){o&&m("")}),[o]),Object(c.jsx)("img",{width:"100%",height:"100%",className:"".concat(b," ").concat(a),onLoad:function(){return l(!0)},onError:function(){return l(!1)},src:e,alt:n})}},774:function(t,e,n){"use strict";n.r(e);var i=n(72),r=n(0),c=n(16),a=n(19),u=n(77),s=n(3);var o=function(t){var e=t.listdata;return Object(s.jsx)("div",{className:"p-10 grid grid-cols-3 grid-rows-3 gap-6  font-extralight",children:e.length>0&&e.map((function(t){return Object(s.jsxs)("div",{className:"w-full lg:max-w-screen-sm",children:[Object(s.jsx)("div",{children:Object(s.jsx)("h3",{className:"text-3xl py-4",children:t.title})}),Object(s.jsx)("div",{children:Object(s.jsx)(u.a,{cssClass:"w-full h-64 object-cover",src:t.image[0].url})}),Object(s.jsx)("div",{className:"py-4",children:Object(s.jsx)("div",{dangerouslySetInnerHTML:{__html:t.body.substring(0,400)}})})]})}))})};e.default=function(){var t=Object(c.b)();Object(r.useEffect)((function(){t(Object(a.e)())}),[t]);var e=Object(c.c)((function(t){return t.reducerMusic.music_data.data})),n=Object(c.c)((function(t){return t.reducerMusic.music_fetched})),u=Object(c.c)((function(t){return t.reducerMusic.music_data.included}));console.log(n,u);var l=Object(r.useState)([]),d=Object(i.a)(l,2),f=d[0],b=d[1],m=Object(r.useState)([]),j=Object(i.a)(m,2),h=j[0],p=j[1],O=Object(r.useState)([]),v=Object(i.a)(O,2),y=v[0],g=v[1],x=Object(r.useState)([]),_=Object(i.a)(x,2),w=_[0],S=_[1];function I(t,e){var n=e.findIndex((function(e){return e.id===t}));return e[n].uri}function E(t,e){var n=e.findIndex((function(e){return e.id===t}));return e[n].filetype}function A(t,e){var n=[];return e.length>0&&t.length>0&&e.map((function(e){t.some((function(t){return t.id===e.id}))&&n.push({id:e.id,filetype:e.filetype,name:e.name,url:e.uri})})),n}function M(t,e){var n=e.findIndex((function(e){return e.id===t}));return[{id:e[n].id,filetype:e[n].filetype,name:e[n].name,url:e[n].uri}]}return Object(r.useEffect)((function(){var t=[];n&&u.map((function(e){"file--file"===e.type&&t.push({id:e.id,uri:e.attributes.uri,filetype:e.attributes.filemime})})),b(t)}),[n,u]),Object(r.useEffect)((function(){var t=[];n&&u.map((function(e){return"file--file"!==e.type&&t.push({id:e.id,name:e.attributes.name,mediaId:"media--audio"===e.type?e.relationships.field_media_audio_file.data.id:e.relationships.field_media_image.data.id})})),p(t)}),[n,u]),Object(r.useEffect)((function(){var t=[];h.length>0&&h.map((function(e){return t.push({id:e.id,name:e.name,uri:I(e.mediaId,f),filetype:E(e.mediaId,f)})})),g(t)}),[f,h]),console.log("Result",y),console.log("musicData",e),console.log("usethisData",w),Object(r.useEffect)((function(){var t=[];n&&e.map((function(e){var n=e.attributes,i=n.title,r=n.field_music_body.processed,c=e.relationships.field_music_audio.data,a=e.relationships.field_music_image.data.id;t.push({id:e.id,title:i,body:r,audio:y.length>0&&A(c,y),image:y.length>0&&M(a,y)})})),S(t)}),[y,e,n]),Object(s.jsx)("div",{children:Object(s.jsx)(o,{listdata:w})})}}}]);
//# sourceMappingURL=10.897219f0.chunk.js.map