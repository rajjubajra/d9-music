(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[11],{72:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,u=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(o){i=!0,u=o}finally{try{r||null==a.return||a.return()}finally{if(i)throw u}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return i}))},769:function(t,e,n){"use strict";n.r(e);var r=n(72),i=n(0),u=n(16),c=n(19),a=n(3);e.default=function(){var t=Object(u.b)();Object(i.useEffect)((function(){t(Object(c.e)())}),[t]);var e=Object(u.c)((function(t){return t.reducerMusic.music_fetched})),n=Object(u.c)((function(t){return t.reducerMusic.music_data.included}));console.log(e,n);var o=Object(i.useState)([]),f=Object(r.a)(o,2),l=f[0],s=f[1],d=Object(i.useState)([]),m=Object(r.a)(d,2),b=m[0],p=m[1],y=Object(i.useState)([]),h=Object(r.a)(y,2),j=h[0],O=h[1];function v(t,e){return e.map((function(e){return e.id===t?e.uri:null}))}function g(t,e){return console.log("meidiaId filetype",typeof t),e.map((function(e){return e.id===t?e.filetype:null}))}return Object(i.useEffect)((function(){var t=[];e&&n.map((function(e){"file--file"===e.type&&t.push({id:e.id,uri:e.attributes.uri,filetype:e.attributes.filemime})})),s(t)}),[e,n]),Object(i.useEffect)((function(){var t=[];e&&n.map((function(e){return"file--file"!==e.type&&t.push({id:e.id,name:e.attributes.name,mediaId:"media--audio"===e.type?e.relationships.field_media_audio_file.data.id:e.relationships.field_media_image.data.id})})),p(t)}),[e,n]),Object(i.useEffect)((function(){var t=[];b.length>0&&b.map((function(e){return t.push({id:e.id,name:e.name,uri:v(e.mediaId,l),filetype:g(e.mediaId,l)})})),O(t)}),[l,b]),console.log("FILE ARRAY",l),console.log("Media Array",b),console.log("Result",j),Object(a.jsx)("div",{children:"Music"})}}}]);
//# sourceMappingURL=11.225c74d2.chunk.js.map