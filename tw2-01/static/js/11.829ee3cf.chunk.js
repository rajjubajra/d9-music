(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[11],{72:function(t,e,r){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],i=!0,n=!1,u=void 0;try{for(var c,o=t[Symbol.iterator]();!(i=(c=o.next()).done)&&(r.push(c.value),!e||r.length!==e);i=!0);}catch(a){n=!0,u=a}finally{try{i||null==o.return||o.return()}finally{if(n)throw u}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return n}))},769:function(t,e,r){"use strict";r.r(e);var i=r(72),n=r(0),u=r(16),c=r(19),o=r(3);e.default=function(){var t=Object(u.b)();Object(n.useEffect)((function(){t(Object(c.e)())}),[t]);var e=Object(u.c)((function(t){return t.reducerMusic.music_fetched})),r=Object(u.c)((function(t){return t.reducerMusic.music_data.included}));console.log(e,r);var a=Object(n.useState)([]),f=Object(i.a)(a,2),s=f[0],l=f[1];return Object(n.useEffect)((function(){var t=[];e&&r.map((function(e){("media--audio"===e.type&&e.relationships.field_media_audio_file.data.id)===e.id&&("media-image"===e.type&&e.relationships.field_media_image.data.id)===e.id&&"file--file"===e.type&&t.push({id:e.id,uri:e.attributes.uri,filetype:e.filemime})})),l(t)}),[e,r]),console.log("NEW INCLUDED",s),Object(o.jsx)("div",{children:"Music"})}}}]);
//# sourceMappingURL=11.829ee3cf.chunk.js.map