(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[5],{71:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,c=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(l){c=!0,a=l}finally{try{n||null==o.return||o.return()}finally{if(c)throw a}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return c}))},72:function(t,e,r){"use strict";var n=r(71),c=r(0),a=r(3);e.a=function(t){var e=t.src,r=t.alt,i=t.cssClass,o=Object(c.useState)(!1),l=Object(n.a)(o,2),u=l[0],s=l[1],f=Object(c.useState)("hidden"),d=Object(n.a)(f,2),b=d[0],y=d[1];return console.log(u),Object(c.useEffect)((function(){u&&y("")}),[u]),Object(a.jsx)("img",{width:"100%",height:"100%",className:"".concat(b," ").concat(i),onLoad:function(){return s(!0)},onError:function(){return s(!1)},src:e,alt:r})}},79:function(t,e,r){"use strict";r.r(e);var n=r(71),c=r(0),a=r(16),i=r(72),o=r(19),l=r(3);e.default=function(){var t=Object(a.b)();Object(c.useEffect)((function(){t(Object(o.c)())}),[t]);var e=Object(a.c)((function(t){return t.reducerGallery.gallery_data.data})),r=Object(a.c)((function(t){return t.reducerGallery.gallery_data.included})),u=Object(a.c)((function(t){return t.reducerGallery.gallery_dataLength})),s=Object(c.useState)([]),f=Object(n.a)(s,2),d=f[0],b=f[1];return console.log("gallery state",e,"include gallery",r,"length",u),Object(c.useEffect)((function(){var t=[];u>0&&e.map((function(e){var n=e.attributes,c=n.title,a=n.field_gallery_body;console.log("loop 1"),r.map((function(e){if("file--file"===e.type){var r=e.attributes.uri;!t.some((function(t){return t.id===e.id}))&&t.push({id:e.id,title:c,body:a.processed,image:r.url})}}))})),b(t)}),[r,u,e]),console.log("gallery arr",d),Object(l.jsx)("div",{children:d.map((function(t){return Object(l.jsxs)("div",{className:"m-12",children:[Object(l.jsx)("h1",{children:t.title}),Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{cssClass:"w-64",src:t.image,alt:"gallery"})}),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:t.body}})]},t.id)}))})}}}]);
//# sourceMappingURL=5.145003ae.chunk.js.map