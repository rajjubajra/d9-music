(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[13],{77:function(e,t,r){"use strict";var c=r(72),n=r(0),a=r(3);t.a=function(e){var t=e.src,r=e.alt,s=e.cssClass,o=Object(n.useState)(!1),i=Object(c.a)(o,2),l=i[0],u=i[1],b=Object(n.useState)("hidden"),d=Object(c.a)(b,2),j=d[0],m=d[1];return console.log(l),Object(n.useEffect)((function(){l&&m("")}),[l]),Object(a.jsx)("img",{width:"100%",height:"100%",className:"".concat(j," ").concat(s),onLoad:function(){return u(!0)},onError:function(){return u(!1)},src:t,alt:r})}},779:function(e,t,r){"use strict";r.r(t);var c=r(175),n=r.n(c),a=r(176),s=r(72),o=r(0),i=r(6),l=r(16),u=r(7),b=r.n(u),d=null,j=Object(a.a)(n.a.mark((function e(){var t,r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=14;break}return t=i.a.URL+"/session/token",e.prev=2,e.next=5,b.a.get(t,{withCredentials:!0});case 5:r=e.sent,c=r.data,d=b.a.create({baseURL:i.a.URL,withCredentials:!0,headers:{"X-CSRF-Token":c},params:{_format:"json"}}),console.log("Created new axios instance",d),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:return console.log("SINGLETON",d),e.abrupt("return",d);case 16:case"end":return e.stop()}}),e,null,[[2,11]])}))),m=r(19),f=(r(773),r(3));var p=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.reducerSubscriptionForm.subscription_form_data.data})),r=Object(l.c)((function(e){return e.reducerSubscriptionForm.subscription_form_fetched}));console.log("Conf message",r&&t);var c=Object(o.useState)(""),u=Object(s.a)(c,2),b=u[0],d=u[1],p=Object(o.useState)(""),x=Object(s.a)(p,2),O=x[0],h=x[1],v=Object(o.useState)(""),g=Object(s.a)(v,2),y=g[0],w=g[1],N=Object(o.useState)(""),_=Object(s.a)(N,2),C=_[0],S=_[1],k=Object(o.useState)(!1),E=Object(s.a)(k,2),L=E[0],R=E[1];Object(o.useEffect)((function(){e(Object(m.h)()),L&&d(""),h(""),w(""),S("")}),[e,L]),console.log(b,O,y,C,"sumbited",L);var q=function(){var e=Object(a.a)(n.a.mark((function e(t){var r,c,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={webform_id:"subscription",name:b,email:O,city:y,country:C},c="".concat(i.a.URL,"/webform_rest/submit"),e.prev=3,e.next=6,j();case 6:return a=e.sent,e.next=9,a.post(c,r);case 9:200===e.sent.status&&R(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"w-full p-10",children:[Object(f.jsx)("h1",{className:"text-3xl",children:r&&t.attributes.title}),Object(f.jsx)("div",{className:"text-center",children:r&&!L&&t.attributes.description}),Object(f.jsx)("div",{className:"text-1xl",children:L&&r&&t.attributes.settings.confirmation_message}),Object(f.jsx)("div",{className:"w-full flex",children:Object(f.jsxs)("form",{onSubmit:q,method:"post",class:"w-full mt-5 flex flex-col",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{className:"w-full outline-none p-2 border-gray-500  border-l border-r border-t border-b-0 md:border-l md:border-r md:border-t md:border-b-0",required:!0,type:"text",id:"name",name:"name",placeholder:"Name",value:b,onChange:function(e){return d(e.target.value)}}),Object(f.jsx)("input",{className:"w-full outline-none border-gray-500 p-2 border-l border-r border-t border-b-0  md:border-l md:border-r md:border-t md:border-b-0",required:!0,type:"text",id:"email",name:"email",placeholder:"Email",value:O,onChange:function(e){return h(e.target.value)}}),Object(f.jsx)("input",{className:"w-full  outline-none border-gray-500 p-2 border-l border-r border-t border-b-0  md:border-l md:border-r md:border-t md:border-b-0",required:!0,type:"text",id:"city",name:"city",placeholder:"City",value:y,onChange:function(e){return w(e.target.value)}}),Object(f.jsx)("input",{className:"w-full  outline-none border-gray-500 p-2 border-l border-r border-t border-b",required:!0,type:"text",id:"country",name:"country",placeholder:"Country",value:C,onChange:function(e){return S(e)}})]}),Object(f.jsx)("div",{children:Object(f.jsx)("input",{className:"border cursor-pointer border-gray-500 p-4 mt-4 outline-none",type:"submit",id:"submit",name:"submit",value:"Submit"})})]})})]})},x=r(77);var O=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.reducerContactInfo.contact_info_data.data})),r=Object(l.c)((function(e){return e.reducerContactInfo.contact_info_data.included})),c=Object(l.c)((function(e){return e.reducerContactInfo.contact_info_fetched}));return Object(o.useEffect)((function(){e(Object(m.b)())}),[e]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{className:"text-3xl py-10",children:"Contact"}),Object(f.jsx)(x.a,{cssClass:"w-1/2 h-96 object-cover",src:c&&r[1].attributes.uri.url,alt:"Music Page"}),Object(f.jsxs)("div",{className:"py-10",children:[Object(f.jsx)("h3",{className:"text-2xl",children:c&&t[0].attributes.title}),Object(f.jsx)("p",{children:c&&t[0].attributes.field_contact_email})]}),Object(f.jsxs)("div",{className:"py-5 md:py-10",children:[Object(f.jsx)("h3",{className:"text-2xl mb-3",children:"Booking Agencies"}),Object(f.jsx)("ul",{className:"grid gap-y-4",children:c&&t[0].attributes.field_contact_booking_agency.map((function(e){return Object(f.jsxs)("li",{children:[e.uri,"|",e.title]})}))})]})]})};t.default=function(){return Object(f.jsxs)("div",{className:"grid grid-cols-12 max-w-screen-xl m-auto p-10",children:[Object(f.jsx)("div",{className:"col-span-12 md:col-span-4",children:Object(f.jsx)(O,{})}),Object(f.jsx)("div",{className:"cols-span-12 md:col-span-8",children:Object(f.jsx)(p,{})})]})}}}]);
//# sourceMappingURL=13.902dc395.chunk.js.map