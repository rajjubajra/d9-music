(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[11],{72:function(e,t,c){"use strict";var n=c(71),r=c(0),a=c(12),s=c(3);t.a=function(e){var t=e.src,c=e.alt,i=e.cssClass,o=Object(r.useState)(!1),l=Object(n.a)(o,2),u=l[0],b=l[1];return console.log("loading",u),Object(r.useEffect)((function(){var e=new Image;e.onload=function(){b(!0)},e.src=t}),[t]),u?Object(s.jsx)("img",{width:"100%",height:"100%",className:i,src:t,alt:c}):Object(s.jsx)(a.a,{})}},88:function(e,t,c){"use strict";c.r(t);var n=c(75),r=c.n(n),a=c(76),s=c(71),i=c(0),o=c(7),l=c(16),u=c(10),b=c.n(u),d=null,j=Object(a.a)(r.a.mark((function e(){var t,c,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=14;break}return t=o.a.URL+"/session/token",e.prev=2,e.next=5,b.a.get(t,{withCredentials:!0});case 5:c=e.sent,n=c.data,d=b.a.create({baseURL:o.a.URL,withCredentials:!0,headers:{"X-CSRF-Token":n},params:{_format:"json"}}),console.log("Created new axios instance",d),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:return console.log("SINGLETON",d),e.abrupt("return",d);case 16:case"end":return e.stop()}}),e,null,[[2,11]])}))),m=c(19),f=c(82),x=c(3);var p=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.reducerSubscriptionForm.subscription_form_data.data})),c=Object(l.c)((function(e){return e.reducerSubscriptionForm.subscription_form_fetched})),n=Object(i.useState)(""),u=Object(s.a)(n,2),b=u[0],d=u[1],p=Object(i.useState)(""),O=Object(s.a)(p,2),h=O[0],v=O[1],g=Object(i.useState)(""),w=Object(s.a)(g,2),y=w[0],_=w[1],N=Object(i.useState)(""),C=Object(s.a)(N,2),S=C[0],k=C[1],E=Object(i.useState)(!1),I=Object(s.a)(E,2),L=I[0],R=I[1];Object(i.useEffect)((function(){e(Object(m.h)()),L&&d(""),v(""),_(""),k("")}),[e,L]),console.log(b,h,y,S,"sumbited",L);var F=function(){var e=Object(a.a)(r.a.mark((function e(t){var c,n,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={webform_id:"fansclub",name:b,email:h,country:S,state:y},console.log("DATA submitted",c),n="".concat(o.a.URL,"/webform_rest/submit"),e.prev=4,e.next=7,j();case 7:return a=e.sent,e.next=10,a.post(n,c);case 10:200===(s=e.sent).status&&R(!0),console.log("Data Posted:",s),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log("Submit Error",e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"w-full md:p-10",children:[Object(x.jsx)("h1",{className:"text-3xl",children:c&&t.attributes.title}),Object(x.jsx)("div",{children:c&&!L&&t.attributes.description}),Object(x.jsx)("div",{className:"text-1xl",children:L&&c&&t.attributes.settings.confirmation_message}),Object(x.jsx)("div",{className:L?"hidden":"w-full flex",children:Object(x.jsxs)("form",{onSubmit:F,method:"post",class:"w-full mt-5 flex flex-col",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{className:"w-full outline-none p-2 border-gray-500  border",required:!0,type:"text",id:"name",name:"name",placeholder:"Name",value:b,onChange:function(e){return d(e.target.value)}}),Object(x.jsx)("input",{className:"w-full outline-none border-gray-500 p-2 border-l border-r",required:!0,type:"text",id:"email",name:"email",placeholder:"Email",value:h,onChange:function(e){return v(e.target.value)}}),Object(x.jsx)(f.a,{classes:"w-full outline-none border-gray-500 p-2 border",required:!0,type:"text",id:"country",name:"country",placeholder:"Country",value:S,onChange:function(e){return k(e)}}),Object(x.jsx)(f.b,{classes:"border-l border-r border-b border-gray-500 outline-none px-3 py-2 w-full",country:S,value:y,onChange:function(e){return _(e)}})]}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{className:"border border-gray-500 px-4 py-2 mt-5 hover:bg-gray-500 hover:text-white cursor-pointer",type:"submit",id:"submit",name:"submit",value:"Submit"})})]})}),Object(x.jsx)("div",{className:L?"flex":"hidden",children:Object(x.jsx)("div",{dangerouslySetInnerHTML:{__html:c&&t.attributes.settings.submission_exception_message}})})]})},O=c(72);var h=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.reducerContactInfo.contact_info_data.data})),c=Object(l.c)((function(e){return e.reducerContactInfo.contact_info_data.included})),n=Object(l.c)((function(e){return e.reducerContactInfo.contact_info_fetched}));return Object(i.useEffect)((function(){e(Object(m.b)())}),[e]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{className:"text-3xl py-10",children:"Contact"}),Object(x.jsx)(O.a,{cssClass:"w-full h-40 md:w-1/2 md:h-96 object-cover",src:n&&c[1].attributes.uri.url,alt:"Music Page"}),Object(x.jsxs)("div",{className:"py-10",children:[Object(x.jsx)("h3",{className:"text-2xl",children:n&&t[0].attributes.title}),Object(x.jsx)("p",{children:n&&t[0].attributes.field_contact_email})]}),Object(x.jsxs)("div",{className:"py-5 md:py-10",children:[Object(x.jsx)("h3",{className:"text-2xl mb-3",children:"Booking Agencies"}),Object(x.jsx)("ul",{className:"grid gap-y-4",children:n&&t[0].attributes.field_contact_booking_agency.map((function(e){return Object(x.jsxs)("li",{children:[e.uri,"|",e.title]})}))})]})]})};t.default=function(){return Object(x.jsxs)("div",{className:"grid grid-cols-12 max-w-screen-xl m-auto p-10",children:[Object(x.jsx)("div",{className:"col-span-12 md:col-span-4",children:Object(x.jsx)(h,{})}),Object(x.jsx)("div",{className:"col-span-12 md:col-span-8 mt-10 md:mt-0",children:Object(x.jsx)(p,{})})]})}}}]);
//# sourceMappingURL=11.feace01b.chunk.js.map