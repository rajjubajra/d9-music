(this["webpackJsonptw2-03-music"]=this["webpackJsonptw2-03-music"]||[]).push([[10],{72:function(e,t,c){"use strict";var s=c(71),r=c(0),a=c(12),n=c(3);t.a=function(e){var t=e.src,c=e.alt,i=e.cssClass,l=Object(r.useState)(!1),d=Object(s.a)(l,2),j=d[0],o=d[1];return console.log("loading",j),Object(r.useEffect)((function(){var e=new Image;e.onload=function(){o(!0)},e.src=t}),[t]),j?Object(n.jsx)("img",{width:"100%",height:"100%",className:i,src:t,alt:c}):Object(n.jsx)(a.a,{})}},73:function(e,t,c){"use strict";var s=c(24),r=c(3);t.a=function(e){var t=e.link;return Object(r.jsx)("div",{children:Object(r.jsx)(s.b,{className:"text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50",to:t,children:"Read More"})})}},91:function(e,t,c){"use strict";c.r(t);var s=c(71),r=c(0),a=c(16),n=c(19),i=c(73),l=c(72),d=c(3);var j=function(e){var t=e.image,c=e.article_id,s=e.date,r=e.title,a=e.body,n=e.readmore,j=e.index;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"grid md:grid-cols-12 my-10 font-extralight",children:[Object(d.jsx)("div",{className:"col-span-3",children:Object(d.jsx)("div",{className:"py-5 md:pr-5 m-5 md:border-r border-gray-400",children:Object(d.jsx)(l.a,{src:t,alt:"news"})})}),Object(d.jsxs)("div",{className:"col-span-9",children:[Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"text-xs",children:c})}),Object(d.jsx)("div",{children:s}),Object(d.jsx)("div",{children:Object(d.jsx)("h3",{className:"text-2xl my-2",children:r})}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:a.substring(0,200)}})}),Object(d.jsx)("div",{className:"my-5",children:Object(d.jsx)("div",{onClick:function(){return n(j)},children:Object(d.jsx)(i.a,{link:"#"})})})]})]})})},o=c(75);var b=function(e){var t=e.date,c=e.title,s=e.image,r=e.body;return Object(d.jsxs)("div",{className:"w-full max-w-screen-xl m-auto p-10",children:[Object(d.jsx)("div",{className:"w-full flex justify-end p-5 cursor-pointer",title:"close",children:Object(d.jsx)(o.a,{})}),Object(d.jsx)("div",{className:"my-8 flex justify-end",children:t}),Object(d.jsx)("div",{children:Object(d.jsx)("h2",{className:"text-4xl my-5 tracking-wider",children:c})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(l.a,{cssClass:"md:w-1/2 object-cover pr-6 pb-5 pt-5 md:float-left md:border-r border-gray-300 mr-6",src:s,alt:"news"}),Object(d.jsx)("div",{className:"pl-10 ml-10 border-l-2 border-gray-300",dangerouslySetInnerHTML:{__html:r}})]})]})};t.default=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.reducerNews.news_data.data})),c=Object(a.c)((function(e){return e.reducerNews.news_data.included})),i=Object(a.c)((function(e){return e.reducerNews.news_fetched})),l=Object(r.useState)([]),o=Object(s.a)(l,2),u=o[0],O=o[1],m=Object(r.useState)(!1),x=Object(s.a)(m,2),f=x[0],h=x[1],v=Object(r.useState)(0),g=Object(s.a)(v,2),w=g[0],p=g[1],y=Object(r.useState)(""),N=Object(s.a)(y,2),_=N[0],S=(N[1],Object(r.useState)("")),k=Object(s.a)(S,2),I=k[0],M=(k[1],Object(r.useState)("")),J=Object(s.a)(M,2),C=J[0],D=(J[1],Object(r.useState)("")),E=Object(s.a)(D,2),A=E[0];E[1],console.log("news",t,"news length",i,"arr",u),Object(r.useEffect)((function(){e(Object(n.g)())}),[e]),Object(r.useEffect)((function(){var e=[];i&&t.map((function(t){var s=t.attributes,r=s.title,a=s.field_news_body,n=s.field_news_date;c.map((function(t){var c=t.attributes.uri,s=t.id,i=e.some((function(e){return e.incId===s}));return"file--file"!==t.type||i||e.push({title:r,body:a.processed,data:n,incId:s,image:c.url}),O(e)}))}))}),[t,c,i]),console.log("data arr news",u,"index",w,"view readmore",f),console.log(_,I,C,A);var F=function(e){var t=new Date(e);return t.getDate()+" "+["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+", "+t.getFullYear()},H=function(){h(!0),p(w),console.log("yes it is clicked")};return Object(d.jsx)("div",{className:"max-w-screen-xl m-auto p-10",children:Object(d.jsxs)("div",{className:"w-full max-w-screen-xl m-auto p-10",children:[Object(d.jsx)("h2",{className:"text-3xl",children:"News"}),u.length>0&&!f&&u.map((function(e,t){return Object(d.jsx)(j,{title:e.title,date:F(e.data),image:e.image,body:e.body,article_id:e.incId,index:t,readmore:H})})),f&&Object(d.jsx)(b,{date:I,title:_,image:C,body:A})]})})}}}]);
//# sourceMappingURL=10.9b60439e.chunk.js.map