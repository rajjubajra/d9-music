(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[7],{72:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,c=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(u){c=!0,i=u}finally{try{n||null==s.return||s.return()}finally{if(c)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return c}))},775:function(t,e,r){"use strict";r.r(e);var n=r(72),c=r(0),i=r(16),a=r(19),s=r(86),u=r(3);var o=function(t){var e=t.listdata;return Object(u.jsx)("div",{children:e.length>0&&e.map((function(t){return Object(u.jsxs)("div",{className:"grid grid-rows-1 p-10 font-extralight",children:[Object(u.jsx)("div",{className:"text-center my-4",children:t.article_id}),Object(u.jsx)("div",{className:"text-center",children:t.date}),Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)("h2",{className:"text-2xl my-4",children:t.title})}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"text-center my-4",dangerouslySetInnerHTML:{__html:t.body.substring(0,300)}})}),Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)(s.a,{link:"#"})})]},t.id)}))})};e.default=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.reducerNews.news_data.data})),r=Object(i.c)((function(t){return t.reducerNews.news_data.included})),s=Object(i.c)((function(t){return t.reducerNews.news_dataLength})),d=Object(c.useState)([]),l=Object(n.a)(d,2),b=l[0],f=l[1];return Object(c.useEffect)((function(){t(Object(a.g)())}),[t]),Object(c.useEffect)((function(){var t=[];s>0&&e.map((function(e){var n=e.attributes,c=n.title,i=n.field_news_body,a=n.field_news_date;r.map((function(e){var r=e.attributes.uri,n=e.id,s=t.some((function(t){return t.incId===n}));return"file--file"!==e.type||s||t.push({title:c,body:i.processed,data:a,incId:n,image:r.url}),f(t)}))}))}),[e,r,s]),Object(u.jsx)("div",{children:Object(u.jsx)(o,{listdata:s>0?b:[]})})}},86:function(t,e,r){"use strict";var n=r(24),c=r(3);e.a=function(t){var e=t.link;return Object(c.jsx)("div",{children:Object(c.jsx)(n.b,{className:"text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50",to:e,children:"Read More"})})}}}]);
//# sourceMappingURL=7.741a8ee3.chunk.js.map