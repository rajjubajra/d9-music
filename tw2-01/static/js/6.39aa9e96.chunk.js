(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[6],{72:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return a}))},767:function(e,t,r){"use strict";r.r(t);var n=r(72),a=r(0),i=r(16),c=r(77),o=r(80),s=r(3);t.default=function(){var e=Object(i.c)((function(e){return e.reducerHomePage.home_data.data})),t=Object(i.c)((function(e){return e.reducerHomePage.home_data.included})),r=Object(i.c)((function(e){return e.reducerHomePage.home_dataLength})),l=Object(i.c)((function(e){return e.reducerHomePage.home_fetched}));console.log("one",e),console.log("two",t),console.log("homepage",l,"length",r);var d=Object(a.useState)([]),u=Object(n.a)(d,2),m=u[0],h=u[1];return Object(a.useEffect)((function(){var r=[];l&&e.map((function(e){var n=e.attributes,a=n.title,i=n.field_home_body,c=t[1].attributes.uri.url,o=t[0].relationships.field_media_image.data.meta.width,s=t[0].relationships.field_media_image.data.meta.height;r.push({title:a,body:i.value,image:c,image_height:s,image_width:o})})),h(r)}),[e,l,t]),console.log("new array ",m),Object(s.jsx)("div",{children:m.length>0&&m.map((function(e){return Object(s.jsx)("div",{className:"w-full p-5 max-w-screen-xl m-auto",children:Object(s.jsxs)("div",{className:"grid gap-3  md:grid-cols-2 md:grid-rows-2  lg:grid-cols-3 lg:grid-rows-1",children:[Object(s.jsx)("div",{className:"px-10",children:Object(s.jsx)("h1",{className:"text-5xl font-thin text-right py-5 tracking-widest md:w-1/2 md:transform md:-rotate-90 md:relative md:top-24 md:left-1/4 ",children:e.title})}),Object(s.jsx)("div",{className:"px-10",children:Object(s.jsx)("div",{className:"py-5 md:flex md:justify-end lg:w-2/3",children:Object(s.jsx)(c.a,{height:e.image_height,width:e.image_width,src:e.image,alt:"Homepage",cssClass:"h-64 w-full md:h-96 md:w-64 object-cover"})})}),Object(s.jsx)("div",{className:"px-10  md:col-span-2 md:flex md:justify-end  lg:col-auto",children:Object(s.jsxs)("div",{className:"md:w-1/2 lg:w-full pb-8 text-right",children:[Object(s.jsx)("div",{className:"font-extralight my-5 text-right",dangerouslySetInnerHTML:{__html:e.body}}),Object(s.jsx)("div",{className:"md:text-right md:mt-10",children:Object(s.jsx)(o.a,{link:e.link})})]})})]})},e.id)}))})}},77:function(e,t,r){"use strict";var n=r(72),a=r(0),i=r(3);t.a=function(e){var t=e.src,r=e.alt,c=e.cssClass,o=Object(a.useState)(!1),s=Object(n.a)(o,2),l=s[0],d=s[1],u=Object(a.useState)("hidden"),m=Object(n.a)(u,2),h=m[0],f=m[1];return console.log(l),Object(a.useEffect)((function(){l&&f("")}),[l]),Object(i.jsx)("img",{width:"100%",height:"100%",className:"".concat(h," ").concat(c),onLoad:function(){return d(!0)},onError:function(){return d(!1)},src:t,alt:r})}},80:function(e,t,r){"use strict";var n=r(24),a=r(3);t.a=function(e){var t=e.link;return Object(a.jsx)("div",{children:Object(a.jsx)(n.b,{className:"text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50",to:t,children:"Read More"})})}}}]);
//# sourceMappingURL=6.39aa9e96.chunk.js.map