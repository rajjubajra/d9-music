(this["webpackJsonptw2-03-music"]=this["webpackJsonptw2-03-music"]||[]).push([[8],{71:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(s){a=!0,c=s}finally{try{n||null==l.return||l.return()}finally{if(a)throw c}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return a}))},72:function(e,t,r){"use strict";var n=r(71),a=r(0),c=r(12),i=r(3);t.a=function(e){var t=e.src,r=e.alt,l=e.cssClass,s=Object(a.useState)(!1),o=Object(n.a)(s,2),u=o[0],d=o[1];return Object(a.useEffect)((function(){var e=new Image;e.onload=function(){d(!0)},e.src=t}),[t]),u?Object(i.jsx)("img",{width:"100%",height:"100%",className:l,src:t,alt:r}):Object(i.jsx)(c.a,{})}},87:function(e,t,r){"use strict";r.r(t);var n=r(71),a=r(0),c=r(16),i=r(72),l=r(3);var s=function(e){var t=e.image,r=e.title;return Object(l.jsxs)("div",{className:"col-span-8 lg:col-span-2 md:col-span-3",children:[Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{cssClass:"border border-gray-900",src:t})}),Object(l.jsx)("div",{className:"text-sm",children:r})]})};var o=function(e){var t=e.image,r=e.title;return Object(l.jsx)("div",{className:"col-span-8 lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-3",children:Object(l.jsxs)("div",{children:[Object(l.jsx)(i.a,{cssClass:"md:h-96 md:w-3/4 object-cover h-40 w-full p-3 md:p-0 border border-gray-900",src:t}),Object(l.jsx)("div",{className:"text-sm",children:r})]})})};var u=r(19);t.default=function(){var e=Object(c.b)();Object(a.useEffect)((function(){e(Object(u.d)())}),[e]);var t=Object(c.c)((function(e){return e.reducerGallery.gallery_data.data})),r=Object(c.c)((function(e){return e.reducerGallery.gallery_data.included})),i=Object(c.c)((function(e){return e.reducerGallery.gallery_dataLength})),d=Object(a.useState)([]),f=Object(n.a)(d,2),b=f[0],j=f[1];return console.log("gallery state",t,"include gallery",r,"length",i),Object(a.useEffect)((function(){var e=[];i>0&&t.map((function(t){var n=t.attributes,a=n.title,c=n.field_gallery_body;console.log("loop 1"),r.map((function(t){if("file--file"===t.type){var r=t.attributes.uri;!e.some((function(e){return e.id===t.id}))&&e.push({id:t.id,title:a,body:c.processed,image:r.url})}}))})),j(e)}),[r,i,t]),console.log("gallery arr",b),Object(l.jsx)("div",{className:"w-full max-w-screen-xl m-auto p-10",children:Object(l.jsx)("div",{className:"grid grid-cols-8 lg:grid-row-2 md:grid-rows-3 gap-4 ",children:b.map((function(e,t){return 0===t?Object(l.jsx)(o,{image:e.image,title:e.title}):Object(l.jsx)(s,{image:e.image,title:e.title})}))})})}}}]);
//# sourceMappingURL=8.f8127b6a.chunk.js.map