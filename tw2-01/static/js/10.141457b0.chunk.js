(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[10],{72:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,c=!1,a=void 0;try{for(var i,l=t[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(o){c=!0,a=o}finally{try{n||null==l.return||l.return()}finally{if(c)throw a}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return c}))},77:function(t,e,r){"use strict";var n=r(72),c=r(0),a=r(3);e.a=function(t){var e=t.src,r=t.alt,i=t.cssClass,l=Object(c.useState)(!1),o=Object(n.a)(l,2),s=o[0],u=o[1],d=Object(c.useState)("hidden"),f=Object(n.a)(d,2),b=f[0],j=f[1];return console.log(s),Object(c.useEffect)((function(){s&&j("")}),[s]),Object(a.jsx)("img",{width:"100%",height:"100%",className:"".concat(b," ").concat(i),onLoad:function(){return u(!0)},onError:function(){return u(!1)},src:e,alt:r})}},774:function(t,e,r){"use strict";r.r(e);var n=r(72),c=r(0),a=r(16),i=r(19),l=r(77),o=r(3);var s=function(t){return Object(o.jsxs)("div",{className:"grid w-full lg:max-w-screen-sm bg-gray-200 ",children:[Object(o.jsx)("div",{children:Object(o.jsx)(l.a,{src:t.src,alt:"Music Gear",cssClass:"w-full"})}),Object(o.jsx)("div",{className:"mt-2 px-3",children:Object(o.jsx)("h3",{className:"text-2xl",children:t.title?t.title:"Title"})}),Object(o.jsx)("div",{className:"px-3 py-2",children:t.text?Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:t.text}}):"Text contents goes here"})]})};e.default=function(){var t=Object(a.b)();Object(c.useEffect)((function(){t(Object(i.c)())}),[t]);var e=Object(a.c)((function(t){return t.reducerGallery.gallery_data.data})),r=Object(a.c)((function(t){return t.reducerGallery.gallery_data.included})),l=Object(a.c)((function(t){return t.reducerGallery.gallery_dataLength})),u=Object(c.useState)([]),d=Object(n.a)(u,2),f=d[0],b=d[1];return console.log("gallery state",e,"include gallery",r,"length",l),Object(c.useEffect)((function(){var t=[];l>0&&e.map((function(e){var n=e.attributes,c=n.title,a=n.field_gallery_body;console.log("loop 1"),r.map((function(e){if("file--file"===e.type){var r=e.attributes.uri;!t.some((function(t){return t.id===e.id}))&&t.push({id:e.id,title:c,body:a.processed,image:r.url})}}))})),b(t)}),[r,l,e]),console.log("gallery arr",f),Object(o.jsx)("div",{className:"grid grid-cols-3 grid-rows-3 gap-3 p-10",children:f.map((function(t){return Object(o.jsx)(s,{title:t.title,src:t.image,text:t.body})}))})}}}]);
//# sourceMappingURL=10.141457b0.chunk.js.map