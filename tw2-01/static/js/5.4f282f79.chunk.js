(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[5],{174:function(t,e,r){t.exports=r(766)},72:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},766:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(F){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===b){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?b:d,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=b,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",b="completed",p={};function m(){}function v(){}function y(){}var g={};u(g,a,(function(){return this}));var j=Object.getPrototypeOf,x=j&&j(j(k([])));x&&x!==r&&n.call(x,a)&&(g=x);var w=y.prototype=m.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:e,done:!0}}return v.prototype=y,u(w,"constructor",y),u(y,"constructor",v),v.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(L.prototype),u(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(w),u(w,c,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},77:function(t,e,r){"use strict";var n=r(72),o=r(0),a=r(3);e.a=function(t){var e=t.src,r=t.alt,i=t.cssClass,c=Object(o.useState)(!1),u=Object(n.a)(c,2),s=u[0],l=u[1],f=Object(o.useState)("hidden"),d=Object(n.a)(f,2),h=d[0],b=d[1];return console.log(s),Object(o.useEffect)((function(){s&&b("")}),[s]),Object(a.jsx)("img",{width:"100%",height:"100%",className:"".concat(h," ").concat(i),onLoad:function(){return l(!0)},onError:function(){return l(!1)},src:e,alt:r})}},771:function(t,e,r){"use strict";r.r(e);var n=r(174),o=r.n(n);function a(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))}}var c=r(72),u=r(0),s=r(6),l=r(16),f=r(7),d=r.n(f),h=null,b=i(o.a.mark((function t(){var e,r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h){t.next=14;break}return e=s.a.URL+"/session/token",t.prev=2,t.next=5,d.a.get(e,{withCredentials:!0});case 5:r=t.sent,n=r.data,h=d.a.create({baseURL:s.a.URL,withCredentials:!0,headers:{"X-CSRF-Token":n},params:{_format:"json"}}),console.log("Created new axios instance",h),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.error(t.t0);case 14:return console.log("SINGLETON",h),t.abrupt("return",h);case 16:case"end":return t.stop()}}),t,null,[[2,11]])}))),p=r(19),m=r(3);var v=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.reducerSubscriptionForm.subscription_form_data.data})),r=Object(l.c)((function(t){return t.reducerSubscriptionForm.subscription_form_fetched}));console.log("Conf message",r&&e);var n=Object(u.useState)(""),a=Object(c.a)(n,2),f=a[0],d=a[1],h=Object(u.useState)(""),v=Object(c.a)(h,2),y=v[0],g=v[1],j=Object(u.useState)(""),x=Object(c.a)(j,2),w=x[0],O=x[1],L=Object(u.useState)(""),_=Object(c.a)(L,2),N=_[0],E=_[1],S=Object(u.useState)(!1),k=Object(c.a)(S,2),C=k[0],F=k[1];Object(u.useEffect)((function(){t(Object(p.i)()),C&&d(""),g(""),O(""),E("")}),[t,C]),console.log(f,y,w,N,"sumbited",C);var T=function(){var t=i(o.a.mark((function t(e){var r,n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r={webform_id:"subscription",name:f,email:y,city:w,country:N},n="".concat(s.a.URL,"/webform_rest/submit"),t.prev=3,t.next=6,b();case 6:return a=t.sent,t.next=9,a.post(n,r);case 9:200===t.sent.status&&F(!0),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"text-3xl text-center m-5",children:r&&e.attributes.title}),Object(m.jsx)("div",{className:"text-center",children:r&&!C&&e.attributes.description}),Object(m.jsx)("div",{className:"text-1xl text-center",children:C&&r&&e.attributes.settings.confirmation_message}),Object(m.jsx)("div",{className:"w-full flex justify-center align-middle",children:Object(m.jsxs)("form",{onSubmit:T,method:"post",class:"w-full md:w-3/6 p-4 m-5 flex flex-col",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{className:"w-full outline-none p-2 border-gray-500  border-l border-r border-t border-b-0 md:border-l md:border-r md:border-t md:border-b-0",required:!0,type:"text",id:"name",name:"name",placeholder:"Name",value:f,onChange:function(t){return d(t.target.value)}}),Object(m.jsx)("input",{className:"w-full outline-none border-gray-500 p-2 border-l border-r border-t border-b-0  md:border-l md:border-r md:border-t md:border-b-0",required:!0,type:"text",id:"email",name:"email",placeholder:"Email",value:y,onChange:function(t){return g(t.target.value)}}),Object(m.jsx)("input",{className:"w-full  outline-none border-gray-500 p-2 border-l border-r border-t border-b-0  md:border-l md:border-r md:border-t md:border-b-0",required:!0,type:"text",id:"city",name:"city",placeholder:"City",value:w,onChange:function(t){return O(t.target.value)}}),Object(m.jsx)("input",{className:"w-full  outline-none border-gray-500 p-2 border-l border-r border-t border-b-0  md:border-l md:border-r md:border-t md:border-b",required:!0,type:"text",id:"country",name:"country",placeholder:"Country",value:N,onChange:function(t){return E(t.target.value)}})]}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{className:"border cursor-pointer border-gray-500 p-4 mt-4 outline-none",type:"submit",id:"submit",name:"submit",value:"Submit"})})]})})]})},y=r(77);var g=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.reducderContactInfo.contact_info_data.data})),r=Object(l.c)((function(t){return t.reducderContactInfo.contact_info_fetched}));return Object(u.useEffect)((function(){t(Object(p.b)())}),[t]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{className:"text-3xl py-10",children:"Contact"}),Object(m.jsx)(y.a,{cssClass:"w-1/2 h-96 object-cover",src:"./images/Music2011_5.jpeg",alt:"Music Page"}),Object(m.jsxs)("div",{className:"py-10",children:[Object(m.jsx)("h3",{className:"text-2xl",children:r&&e[0].attributes.title}),Object(m.jsx)("p",{children:r&&e[0].attributes.field_contact_email})]}),Object(m.jsxs)("div",{className:"py-10",children:[Object(m.jsx)("h3",{className:"text-2xl mb-3",children:"Booking Agencies"}),Object(m.jsx)("ul",{className:"grid gap-y-4",children:r&&e[0].attributes.field_contact_booking_agency.map((function(t){return Object(m.jsxs)("li",{children:[t.uri,"|",t.title]})}))})]})]})};e.default=function(){return Object(m.jsxs)("div",{className:"grid grid-cols-12 max-w-screen-xl m-auto p-10",children:[Object(m.jsx)("div",{className:"col-span-4",children:Object(m.jsx)(g,{})}),Object(m.jsx)("div",{className:"col-span-8",children:Object(m.jsx)(v,{})})]})}}}]);
//# sourceMappingURL=5.4f282f79.chunk.js.map