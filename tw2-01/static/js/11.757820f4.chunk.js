(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[11],{72:function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));var n=e(74);function i(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,i=!1,o=void 0;try{for(var c,u=t[Symbol.iterator]();!(n=(c=u.next()).done)&&(e.push(c.value),!r||e.length!==r);n=!0);}catch(a){i=!0,o=a}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return e}}(t,r)||Object(n.a)(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},74:function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));var n=e(75);function i(t,r){if(t){if("string"===typeof t)return Object(n.a)(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(n.a)(t,r):void 0}}},75:function(t,r,e){"use strict";function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}e.d(r,"a",(function(){return n}))},773:function(t,r,e){"use strict";e.r(r);var n=e(75);var i=e(74);function o(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=e(72),u=e(0),a=e(16),f=e(19),s=e(3);r.default=function(){var t=Object(a.b)();Object(u.useEffect)((function(){t(Object(f.e)())}),[t]);var r=Object(a.c)((function(t){return t.reducerMusic.music_fetched})),e=Object(a.c)((function(t){return t.reducerMusic.music_data.included}));console.log(r,e);var n=Object(u.useState)([]),i=Object(c.a)(n,2);return i[0],i[1],Object(u.useEffect)((function(){var t=[],n=[];r&&e.map((function(r){return"file--file"===r.type&&t.push({id:r.id,uri:r.attributes.uri})&&"file--file"!==r.type&&n.push.apply(n,o(e))})),console.log("FILE",t),console.log("MEDIA",n)}),[r,e]),Object(s.jsx)("div",{children:"Music"})}}}]);
//# sourceMappingURL=11.757820f4.chunk.js.map