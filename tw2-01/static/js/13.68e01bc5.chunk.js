(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[13],{77:function(e,t,c){"use strict";var r=c(72),n=c(0),a=c(3);t.a=function(e){var t=e.src,c=e.alt,s=e.cssClass,o=Object(n.useState)(!1),i=Object(r.a)(o,2),u=i[0],l=i[1],b=Object(n.useState)("hidden"),d=Object(r.a)(b,2),j=d[0],m=d[1];return console.log(u),Object(n.useEffect)((function(){u&&m("")}),[u]),Object(a.jsx)("img",{width:"100%",height:"100%",className:"".concat(j," ").concat(s),onLoad:function(){return l(!0)},onError:function(){return l(!1)},src:t,alt:c})}},779:function(e,t,c){"use strict";c.r(t);var r=c(175),n=c.n(r),a=c(176),s=c(72),o=c(0),i=c(6),u=c(16),l=c(7),b=c.n(l),d=null,j=Object(a.a)(n.a.mark((function e(){var t,c,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=14;break}return t=i.a.URL+"/session/token",e.prev=2,e.next=5,b.a.get(t,{withCredentials:!0});case 5:c=e.sent,r=c.data,d=b.a.create({baseURL:i.a.URL,withCredentials:!0,headers:{"X-CSRF-Token":r},params:{_format:"json"}}),console.log("Created new axios instance",d),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:return console.log("SINGLETON",d),e.abrupt("return",d);case 16:case"end":return e.stop()}}),e,null,[[2,11]])}))),m=c(19),f=c(773),p=c(3);var x=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.reducerSubscriptionForm.subscription_form_data.data})),c=Object(u.c)((function(e){return e.reducerSubscriptionForm.subscription_form_fetched}));console.log("Conf message",c&&t);var r=Object(o.useState)(""),l=Object(s.a)(r,2),b=l[0],d=l[1],x=Object(o.useState)(""),O=Object(s.a)(x,2),h=O[0],v=O[1],g=Object(o.useState)(""),w=Object(s.a)(g,2),y=w[0],N=w[1],_=Object(o.useState)(""),C=Object(s.a)(_,2),S=C[0],k=C[1],E=Object(o.useState)(!1),L=Object(s.a)(E,2),R=L[0],F=L[1];Object(o.useEffect)((function(){e(Object(m.h)()),R&&d(""),v(""),N(""),k("")}),[e,R]),console.log(b,h,y,S,"sumbited",R);var I=function(){var e=Object(a.a)(n.a.mark((function e(t){var c,r,a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={webform_id:"subscription",name:b,email:h},console.log("DATA submitted",c),r="".concat(i.a.URL,"/webform_rest/submit"),e.prev=4,e.next=7,j();case 7:return a=e.sent,e.next=10,a.post(r,c);case 10:200===(s=e.sent).status&&F(!0),console.log("Data Posted:",s),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log("Submit Error",e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"w-full md:p-10",children:[Object(p.jsx)("h1",{className:"text-3xl",children:c&&t.attributes.title}),Object(p.jsx)("div",{children:c&&!R&&t.attributes.description}),Object(p.jsx)("div",{className:"text-1xl",children:R&&c&&t.attributes.settings.confirmation_message}),Object(p.jsx)("div",{className:"w-full flex",children:Object(p.jsxs)("form",{onSubmit:I,method:"post",class:"w-full mt-5 flex flex-col",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{className:"w-full outline-none p-2 border-gray-500  border",required:!0,type:"text",id:"name",name:"name",placeholder:"Name",value:b,onChange:function(e){return d(e.target.value)}}),Object(p.jsx)("input",{className:"w-full outline-none border-gray-500 p-2 border-l border-r",required:!0,type:"text",id:"email",name:"email",placeholder:"Email",value:h,onChange:function(e){return v(e.target.value)}}),Object(p.jsx)(f.a,{classes:"w-full outline-none border-gray-500 p-2 border",required:!0,type:"text",id:"country",name:"country",placeholder:"Country",value:S,onChange:function(e){return k(e)}}),Object(p.jsx)(f.b,{classes:"border-l border-r border-b border-gray-500 outline-none px-3 py-2 w-full",country:S,value:y,onChange:function(e){return N(e)}})]}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{className:"border border-gray-500 px-4 py-2 mt-5 hover:bg-gray-500 hover:text-white cursor-pointer",type:"submit",id:"submit",name:"submit",value:"Submit"})})]})})]})},O=c(77);var h=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.reducerContactInfo.contact_info_data.data})),c=Object(u.c)((function(e){return e.reducerContactInfo.contact_info_data.included})),r=Object(u.c)((function(e){return e.reducerContactInfo.contact_info_fetched}));return Object(o.useEffect)((function(){e(Object(m.b)())}),[e]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"text-3xl py-10",children:"Contact"}),Object(p.jsx)(O.a,{cssClass:"w-full h-40 md:w-1/2 md:h-96 object-cover",src:r&&c[1].attributes.uri.url,alt:"Music Page"}),Object(p.jsxs)("div",{className:"py-10",children:[Object(p.jsx)("h3",{className:"text-2xl",children:r&&t[0].attributes.title}),Object(p.jsx)("p",{children:r&&t[0].attributes.field_contact_email})]}),Object(p.jsxs)("div",{className:"py-5 md:py-10",children:[Object(p.jsx)("h3",{className:"text-2xl mb-3",children:"Booking Agencies"}),Object(p.jsx)("ul",{className:"grid gap-y-4",children:r&&t[0].attributes.field_contact_booking_agency.map((function(e){return Object(p.jsxs)("li",{children:[e.uri,"|",e.title]})}))})]})]})};t.default=function(){return Object(p.jsxs)("div",{className:"grid grid-cols-12 max-w-screen-xl m-auto p-10",children:[Object(p.jsx)("div",{className:"col-span-12 md:col-span-4",children:Object(p.jsx)(h,{})}),Object(p.jsx)("div",{className:"col-span-12 md:col-span-8 mt-10 md:mt-0",children:Object(p.jsx)(x,{})})]})}}}]);
//# sourceMappingURL=13.68e01bc5.chunk.js.map