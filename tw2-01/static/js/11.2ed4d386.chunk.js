(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[11],{72:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,c=!1,u=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(a){c=!0,u=a}finally{try{n||null==o.return||o.return()}finally{if(c)throw u}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return c}))},769:function(t,e,r){"use strict";r.r(e);var n=r(72),c=r(0),u=r(16),i=r(19),o=r(3);e.default=function(){var t=Object(u.b)();Object(c.useEffect)((function(){t(Object(i.e)())}),[t]);var e=Object(u.c)((function(t){return t.reducerMusic.music_fetched})),r=Object(u.c)((function(t){return t.reducerMusic.music_data.included}));console.log(e,r);var a=Object(c.useState)([]),s=Object(n.a)(a,2),f=s[0],l=s[1],b=Object(c.useState)([]),d=Object(n.a)(b,2),y=d[0];return d[1],Object(c.useEffect)((function(){var t=[];e&&r.map((function(e){return"file--file"===e.type&&t.push({id:e.id,uri:e.attributes.uri})})),l(t)}),[f,e,r]),console.log("FILE ARRAY",f),console.log("MEDIA ARRAY",y),Object(o.jsx)("div",{children:"Music"})}}}]);
//# sourceMappingURL=11.2ed4d386.chunk.js.map