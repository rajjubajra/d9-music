(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[13],{73:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(o){c=!0,a=o}finally{try{r||null==s.return||s.return()}finally{if(c)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return c}))},778:function(t,e,n){"use strict";n.r(e);var r=n(73),c=n(0),a=n(16),i=n(24),s=n(3);var o=function(t){var e=t.menudata,n=t.length,r=t.menu;return Object(s.jsxs)("div",{className:"flex justify-between",children:[Object(s.jsx)("div",{className:"px-3 text-xl font-extralight",children:"YW Music Two"}),Object(s.jsx)("div",{className:"flex",children:n>0&&e.map((function(t){var e=t.attributes.title;return r.some((function(t){return t===e}))&&Object(s.jsx)("div",{children:Object(s.jsx)(i.b,{className:"px-4 py-4 m-1 font-extralight  tracking-wider uppercase text-sm cursor-pointer",to:"#",children:e})})}))})]})};var u=function(t){var e=t.crossed;return Object(s.jsxs)("div",{className:"cursor-pointer px-5",children:[Object(s.jsxs)("div",{className:"".concat(e?"hidden":""),children:[Object(s.jsx)("div",{className:"w-6 h-1 bg-gray-500"}),Object(s.jsx)("div",{className:"w-6 h-1 bg-gray-500 my-1"}),Object(s.jsx)("div",{className:"w-6 h-1 bg-gray-500"})]}),Object(s.jsx)("div",{className:"".concat(e?"":"hidden"),children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"w-6 h-1 bg-gray-500 transform rotate-45 relative top-2"}),Object(s.jsx)("div",{className:"w-6 h-1 bg-gray-500 transform -rotate-45 relative top-1"})]})})]})};var l=function(t){var e=t.menudata,n=t.menu,a=Object(c.useState)(!1),o=Object(r.a)(a,2),l=o[0],d=o[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{onClick:function(){return d(!l)},children:Object(s.jsx)(u,{crossed:l})}),l&&Object(s.jsx)("div",{className:"flex flex-col my-5",children:e.length>0&&e.map((function(t){return n.some((function(e){return e===t.title}))&&Object(s.jsx)("div",{children:Object(s.jsx)(i.b,{onClick:function(){return d(!1)},className:"px-4 py-4 m-1 font-extralight  tracking-wider uppercase text-sm cursor-pointer",to:"#",children:t.title})})}))})]})};e.default=function(){var t=Object(a.c)((function(t){return t.reducerNav.nav_data.data})),e=Object(a.c)((function(t){return t.reducerNav.nav_dataLength}));console.log("Menu state: ",t);var n=Object(c.useState)([]),i=Object(r.a)(n,2),u=i[0],d=i[1];Object(c.useEffect)((function(){fetch("http://localhost:3000/data/mainmenu.json").then((function(t){return t.json()})).then((function(t){return d(t)})).catch((function(t){return console.log(t)}))}),[]);var j=["Music","About","Contact"];return Object(s.jsxs)("div",{className:"w-full py-3 bg-gray-100",children:[Object(s.jsx)("div",{className:"md:hidden block",children:Object(s.jsx)(l,{menudata:u,length:e,menu:j})}),Object(s.jsx)("div",{className:"hidden md:block",children:Object(s.jsx)(o,{menudata:u,length:e,menu:j})})]})}}}]);
//# sourceMappingURL=13.532bf308.chunk.js.map