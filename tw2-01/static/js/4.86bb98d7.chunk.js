(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[4],{181:function(e,t){},184:function(e,t){},185:function(e,t){},186:function(e,t){},187:function(e,t){},205:function(e,t){},773:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r(16),i=r(19),a=(r(175),r(24)),d=r(3);var s=function(e){var t=e.tourdata,r=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return Object(d.jsx)("div",{className:"max-w-screen-xl m-auto p-10 mb-6 font-extralight",children:t.length>0&&t.map((function(e){var t=e.attributes,c=t.title,n=t.field_event_date,i=(t.field_event_details,t.field_event_location.processed),s=(t.field_buy_ticket,new Date(n));return Object(d.jsxs)("div",{className:"grid grid-rows-3 gap-1 md:grid-cols-7 md:grid-rows-1 mb-8",children:[Object(d.jsxs)("div",{className:"border border-gray-300 p-2 col-span-2  md:col-span-1",children:[r[s.getMonth()]," ",s.getDate(),", ",s.getFullYear()]}),Object(d.jsx)("div",{className:"border border-gray-300 col-span-2 md:col-span-4 p-2",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:c}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:i}})})]})}),Object(d.jsx)("div",{className:"border border-gray-300  md:col-span-1 p-2",children:Object(d.jsx)(a.b,{to:"#",children:"Details"})}),Object(d.jsx)("div",{className:"border border-gray-300 p-2",children:"Ticket"})]},e.id)}))})};t.default=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e.reducerTour.tour_data.data})),r=Object(n.c)((function(e){return e.reducerTour.tour_dataLength}));return console.log(t,"length",r),Object(c.useEffect)((function(){e(Object(i.i)())}),[e]),Object(d.jsx)("div",{children:Object(d.jsx)(s,{tourdata:r>0?t:[]})})}}}]);
//# sourceMappingURL=4.86bb98d7.chunk.js.map