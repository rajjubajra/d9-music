(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[11],{72:function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var i=[],n=!0,r=!1,u=void 0;try{for(var c,a=t[Symbol.iterator]();!(n=(c=a.next()).done)&&(i.push(c.value),!e||i.length!==e);n=!0);}catch(o){r=!0,u=o}finally{try{n||null==a.return||a.return()}finally{if(r)throw u}}return i}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.d(e,"a",(function(){return r}))},769:function(t,e,i){"use strict";i.r(e);var n=i(72),r=i(0),u=i(16),c=i(19),a=i(3);e.default=function(){var t=Object(u.b)();Object(r.useEffect)((function(){t(Object(c.e)())}),[t]);var e=Object(u.c)((function(t){return t.reducerMusic.music_data.data})),i=Object(u.c)((function(t){return t.reducerMusic.music_fetched})),o=Object(u.c)((function(t){return t.reducerMusic.music_data.included}));console.log(i,o);var f=Object(r.useState)([]),d=Object(n.a)(f,2),s=d[0],l=d[1],b=Object(r.useState)([]),m=Object(n.a)(b,2),p=m[0],y=m[1],j=Object(r.useState)([]),h=Object(n.a)(j,2),v=h[0],O=h[1],_=Object(r.useState)([]),g=Object(n.a)(_,2),S=(g[0],g[1]);function I(t,e){var i=e.findIndex((function(e){return e.id===t}));return e[i].uri}function w(t,e){var i=e.findIndex((function(e){return e.id===t}));return e[i].filetype}function A(t,e){var i=e.findIndex((function(e){return e.id===t}));return e[i].uri}return Object(r.useEffect)((function(){var t=[];i&&o.map((function(e){"file--file"===e.type&&t.push({id:e.id,uri:e.attributes.uri,filetype:e.attributes.filemime})})),l(t)}),[i,o]),Object(r.useEffect)((function(){var t=[];i&&o.map((function(e){return"file--file"!==e.type&&t.push({id:e.id,name:e.attributes.name,mediaId:"media--audio"===e.type?e.relationships.field_media_audio_file.data.id:e.relationships.field_media_image.data.id})})),y(t)}),[i,o]),Object(r.useEffect)((function(){var t=[];p.length>0&&p.map((function(e){return t.push({id:e.id,name:e.name,uri:I(e.mediaId,s),filetype:w(e.mediaId,s)})})),O(t)}),[s,p]),console.log("Result",v),console.log("musicData",e),Object(r.useEffect)((function(){var t=[];i&&e.map((function(e){var i=e.attributes.title,n=e.field_music_body.processed,r=e.relationships.field_music_audio.data.id;t.push({id:e.id,title:i,body:n,url_image:A(r,v)})})),S(t)}),[v,e,i]),Object(a.jsx)("div",{children:"Music"})}}}]);
//# sourceMappingURL=11.ca144bd2.chunk.js.map