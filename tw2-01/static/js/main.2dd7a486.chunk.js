(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{3:function(e,t,a){"use strict";a.r(t),a.d(t,"actionTypes",(function(){return n}));var n={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR",TOUR_START_FETCHING:"TOUR_START_FETCHING",TOUR_FETCHED:"TOUR_FETCHED",TOUR_FETCH_ERROR:"TOUR_FETCH_ERROR",NEWS_START_FETCHING:"NEWS_START_FETCHING",NEWS_FETCHED:"NEWS_FETCHED",NEWS_FETCH_ERROR:"NEWS_FETCH_ERROR",ABOUT_START_FETCHING:"ABOUT_START_FETCHING",ABOUT_FETCHED:"ABOUT_FETCHED",ABOUT_FETCH_ERROR:"ABOUT_FETCH_ERROR",GALLERY_START_FETCHING:"GALLERY_START_FETCHING",GALLERY_FETCHED:"GALLERY_FETCHED",GALLERY_FETCH_ERROR:"GALLERY_FETCH_ERROR",MUSIC_START_FETCHING:"MUSIC_START_FETCHING",MUSIC_FETCHED:"MUSIC_FETCHED",MUSIC_FETCH_ERROR:"MUSIC_FETCH_ERROR",MEDIA_AUDIO_START_FETCHING:"MEDIA_AUDIO_START_FETCHING",MEDIA_AUDIO_FETCHED:"MEDIA_AUDIO_FETCHED",MEDIA_AUDIO_FETCH_ERROR:"MEDIA_AUDIO_FETCH_ERROR",MEDIA_IMAGE_START_FETCHING:"MEDIA_IMAGE_START_FETCHING",MEDIA_IMAGE_FETCHED:"MEDIA_IMAGE_FETCHED",MEDIA_IMAGE_FETCH_ERROR:"MEDIA_IMAGE_FETCH_ERROR",MEDIA_REMOTE_VIDEO_START_FETCHING:"MEDIA_REMOTE_VIDEO_FETCHING",MEDIA_REMOTE_VIDEO_FETCHED:"MEDIA_REMOTE_VIDEO_FETCHED",MEDIA_REMOTE_VIDEO_FETCH_ERROR:"MEDIA_REMOTE_VIDEO_FETCH_ERROR",BASIC_CONTACT_FORM_START_FETCHING:"BASIC_CONTACT_FORM_FETCHING",BASIC_CONTACT_FORM_FETCHED:"BASIC_CONTACT_FORM_FETCHED",BASIC_CONTACT_FORM_FETCH_ERROR:"BASIC_CONTACT_FORM_FETCH_ERROR"}},41:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),i=a.n(r),o=(a(41),a(6)),d=a(2),_=a(3),u=a(7),s=a.n(u),l="https://yellow-website.com/d9-music/d9-music",f=function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/webform/webform/8979d944-eba5-4587-9d0b-2002f663d15b");return function(a){a({type:_.actionTypes.BASIC_CONTACT_FORM_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.BASIC_CONTACT_FORM_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.BASIC_CONTACT_FORM_FETCH_ERROR,fetched:!1,error:e})}))}},h=a(1);var E=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerHomePage.home_data.data})),a=Object(d.c)((function(e){return e.reducerHomePage.home_data.included})),c=Object(d.c)((function(e){return e.reducerHomePage.home_dataLength})),r=Object(d.c)((function(e){return e.reducerHomePage.home_fetched}));console.log("one",t),console.log("two",a),console.log("homepage",r,"length",c);var i=Object(n.useState)([]),u=Object(o.a)(i,2),f=u[0],E=u[1];return Object(n.useEffect)((function(){console.log("action is runing"),e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/home_page?include=field_home_main_media,field_home_main_media.field_media_image");return function(a){a({type:_.actionTypes.HOME_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action",e.data),a({type:_.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(n.useEffect)((function(){var e=[];r&&t.map((function(t){var n=t.attributes,c=n.title,r=n.field_home_body,i=a[1].attributes.uri.url;e.push({title:c,body:r.value,image:i})})),E(e)}),[t,r,a]),console.log("new array ",f),Object(h.jsx)("div",{children:f.length>0?f.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"text-2xl",children:e.title}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"w-60",src:e.image,alt:"homepage"})}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})})]})})):"Loading..."})},T=a(14);var m=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerTour.tour_data.data})),a=Object(d.c)((function(e){return e.reducerTour.tour_dataLength}));return console.log(t,"length",a),Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/tour");return function(a){a({type:_.actionTypes.TOUR_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action",e.data),a({type:_.actionTypes.TOUR_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.TOUR_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(h.jsx)("div",{children:a>0&&t.map((function(e){var t=e.attributes,a=t.title,n=t.field_event_details,c=t.field_event_location,r=t.field_buy_ticket;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"text-2xl",children:a}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Details:"}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:n.value}}),Object(h.jsx)("h2",{children:"Location:"}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:c.value}}),Object(h.jsx)("h2",{children:"Ticket"}),Object(h.jsx)("div",{children:Object(h.jsx)(T.b,{to:r.uri,children:r.title})})]})]})}))})};var O=function(){var e=Object(d.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/about_page?include=field_about_page_media,field_about_page_media.field_media_image");return function(a){a({type:_.actionTypes.ABOUT_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.ABOUT_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.ABOUT_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t=Object(d.c)((function(e){return e.reducerAbout.about_data.data})),a=Object(d.c)((function(e){return e.reducerAbout.about_dataLength})),c=Object(d.c)((function(e){return e.reducerAbout.about_data.included}));console.log("about data",t,"about lng",c);var r=Object(n.useState)([]),i=Object(o.a)(r,2),u=i[0],f=i[1];return Object(n.useEffect)((function(){var e=[];a>0&&t.map((function(t){var a=t.attributes,n=a.title,r=a.field_about_page;c.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;e.push({title:n,body:r.processed,image:a.url})}return f(e)}))}))}),[c,a,t]),console.log("Array about data",u),Object(h.jsx)("div",{children:a>0&&u.map((function(e){return Object(h.jsxs)("div",{className:"m-12",children:[Object(h.jsx)("h1",{className:"text-2xl",children:e.title}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"w-56",src:e.image,alt:""})}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}))})};var g=function(){var e=Object(d.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/gallery?include=field_gallery_media,field_gallery_media.field_media_image");return function(a){a({type:_.actionTypes.GALLERY_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.GALLERY_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.GALLERY_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t=Object(d.c)((function(e){return e.reducerGallery.gallery_data.data})),a=Object(d.c)((function(e){return e.reducerGallery.gallery_data.included})),c=Object(d.c)((function(e){return e.reducerGallery.gallery_dataLength})),r=Object(n.useState)([]),i=Object(o.a)(r,2),u=i[0],f=i[1];return console.log("gallery state",t,"include gallery",a,"length",c),Object(n.useEffect)((function(){var e=[];c>0&&t.map((function(t){var n=t.attributes,c=n.title,r=n.field_gallery_body;console.log("loop 1"),a.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;!e.some((function(e){return e.id===t.id}))&&e.push({id:t.id,title:c,body:r.processed,image:a.url})}}))})),f(e)}),[a,c,t]),console.log("gallery arr",u),Object(h.jsx)("div",{children:u.map((function(e){return Object(h.jsxs)("div",{className:"m-12",children:[Object(h.jsx)("h1",{children:e.title}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"w-64",src:e.image,alt:"gallery"})}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]},e.id)}))})},b=a(34),j=a.n(b);var p=function(e){return e.data.map((function(e){var t=e.title,a=e.url;return Object(h.jsxs)("li",{children:[Object(h.jsx)("h3",{children:t}),Object(h.jsxs)("div",{children:["Audio link: ",a]}),Object(h.jsx)("div",{children:Object(h.jsx)(j.a,{src:a,controls:!0})})]})}))};var R=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerMediaAudio.media_audio_data.data})),a=Object(d.c)((function(e){return e.reducerMediaAudio.media_audio_data.included})),c=Object(d.c)((function(e){return e.reducerMediaAudio.media_audio_dataLength})),r=Object(d.c)((function(e){return e.reducerMediaAudio.media_audio_fetched})),i=Object(d.c)((function(e){return e.reducerMusic.music_data.data})),u=Object(d.c)((function(e){return e.reducerMusic.music_data.included})),f=Object(d.c)((function(e){return e.reducerMusic.music_dataLength})),E=Object(n.useState)([]),T=Object(o.a)(E,2),m=T[0],O=T[1],g=Object(n.useState)([]),b=Object(o.a)(g,2),j=b[0],R=b[1];function v(e,t){var a=[];return t.map((function(t){return e.some((function(e){return e.id===t.id}))&&a.push({id:t.id,title:t.title,url:t.url})})),a}return Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/music_album?include=field_music_audio,field_music_audio.field_media_audio_file,field_music_image.field_media_image");return function(a){a({type:_.actionTypes.MUSIC_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.MUSIC_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.MUSIC_FETCH_ERROR,fetched:!1,error:e})}))}}()),e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/media/audio?include=field_media_audio_file");return function(a){a({type:_.actionTypes.MEDIA_AUDIO_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.MEDIA_AUDIO_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.MEDIA_AUDIO_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),console.log("media audio",t,"media audio lnc",a,c),console.log(i,u,f),Object(n.useEffect)((function(){var e=[];console.log("media audio length in use",c),console.log(r&&t[0].id),console.log(r&&t[0].id),console.log(r),r&&a.map((function(a,n){var c=a.attributes,r=c.uri.url,i=c.filemime,o=c.filesize;return e.push({id:t[n].id,title:t[n].attributes.field_audio_title,filetype:i,filesize:o,url:r})})),R(e)}),[t,a,c,r]),console.log("Audio data +: ",j),Object(n.useEffect)((function(){var e=[];console.log("final array",e),f>0&&j.length>0&&i.map((function(t){var a=t.attributes,n=a.title,c=a.field_music_body,r=t.relationships.field_music_audio.data;e.push({id:t.id,title:n,body:c.processed,data:v(r,j)})})),O(e)}),[j,i,f]),console.log("view Data",m,"vlength ",m.length),console.log("view data type: ",typeof m),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Music Page"}),m.length>0&&m.map((function(e){var t=e.id,a=e.title,n=e.body,c=e.data;return Object(h.jsxs)("div",{className:"m-5 p-3",children:[Object(h.jsx)("h2",{className:"my-2",children:a}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:n}}),console.log(typeof c),console.log(c),Object(h.jsx)("ul",{className:"m-5 border p-4",children:p({data:c})})]},t)}))]})},v=a(15),C=a.n(v),A=a(18),H=null,I=Object(A.a)(C.a.mark((function e(){var t,a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H){e.next=14;break}return t=l+"/session/token",e.prev=2,e.next=5,s.a.get(t,{withCredentials:!0});case 5:a=e.sent,n=a.data,H=s.a.create({baseURL:l,withCredentials:!0,headers:{"X-CSRF-Token":n},params:{_format:"json"}}),console.log("Created new axios instance",H),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:return console.log("SINGLETON",H),e.abrupt("return",H);case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));var F=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerBasicContactForm.contact_form.data}));console.log("Conf message",t);var a=Object(n.useState)(""),c=Object(o.a)(a,2),r=c[0],i=c[1],_=Object(n.useState)(""),u=Object(o.a)(_,2),s=u[0],E=u[1],T=Object(n.useState)(""),m=Object(o.a)(T,2),O=m[0],g=m[1],b=Object(n.useState)(""),j=Object(o.a)(b,2),p=j[0];j[1],console.log(r,s,O);var R=function(){var t=Object(A.a)(C.a.mark((function t(a){var n,c,i;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),console.log(r,s,O),n={webform_id:"contact",name:r,email:s,message:O},c="".concat(l,"/webform_rest/submit"),t.prev=4,t.next=7,I();case 7:return i=t.sent,t.next=10,i.post(c,n);case 10:200===t.sent.status&&e(f()),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[4,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"text-3xl text-center m-5",children:"Contact Form"}),p,Object(h.jsx)("div",{className:"w-full flex justify-center align-middle",children:Object(h.jsxs)("form",{onSubmit:R,method:"post",class:"w-full md:w-3/6 p-4 m-5 flex flex-col",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{className:"w-full md:w-1/2 border md:border-l md:border-r md:border-t md:border-b-0 border-gray-500 p-2 outline-none",required:!0,type:"text",id:"name",name:"name",placeholder:"Name",value:r,onChange:function(e){return i(e.target.value)}}),Object(h.jsx)("input",{className:"w-full md:w-1/2 border md:border-l-0 md:border-r md:border-t md:border-b-0 border-gray-500 p-2 outline-none",required:!0,type:"text",id:"email",name:"email",placeholder:"Email",value:s,onChange:function(e){return E(e.target.value)}})]}),Object(h.jsx)("div",{children:Object(h.jsx)("textarea",{className:"w-full border border-gray-500 p-2 h-60 outline-none",required:!0,name:"message",id:"message",placeholder:"Message",value:O,onChange:function(e){return g(e.target.value)}})}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:"border cursor-pointer border-gray-500 p-4 outline-none",type:"submit",id:"submit",name:"submit",value:"Submit"})})]})})]})};var y=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerNews.news_data.data})),a=Object(d.c)((function(e){return e.reducerNews.news_data.included})),c=Object(d.c)((function(e){return e.reducerNews.news_dataLength})),r=Object(n.useState)([]),i=Object(o.a)(r,2),u=i[0],f=i[1];return console.log("news",t,"news length",c),Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/news?include=field_news_media,field_news_media.field_media_image&fields[file--file]=filename,uri");return function(a){a({type:_.actionTypes.NEWS_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.NEWS_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.NEWS_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(n.useEffect)((function(){var e=[];c>0&&t.map((function(t){var n=t.attributes,c=n.title,r=n.field_news_body,i=n.field_news_date;a.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;e.push({title:c,body:r.processed,data:i,image:a.url})}return f(e)}))}))}),[t,a,c]),console.log("data arr news",u),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"m-10",children:"Note: Need to check array repeat"}),c>0&&u.map((function(e){return Object(h.jsxs)("div",{className:"m-5",children:[Object(h.jsx)("h1",{className:"text-2xl",children:e.title}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:e.image,alt:"news"})}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}))]})};var M=function(){var e=Object(d.c)((function(e){return e.reducerNav.nav_data.data})),t=Object(d.c)((function(e){return e.reducerNav.nav_dataLength}));return console.log("Nav",e),console.log("Length:",t),Object(h.jsx)("div",{className:"w-full h-8 bg-gray-100 flex justify-center align-middle",children:t>0?e.map((function(e,t){var a=e.attributes,n=a.title,c=a.url.split("/");c[0]="d9-music",c[1]="themes",c[2]="tw2-01";var r=c.join("/");return Object(h.jsx)(T.b,{className:"m-1",to:"/".concat(r),children:n})})):"data not loaded yet"})},N=a(5);var x=function(){var e=Object(d.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/menu_items/main"),a="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t;return function(t){t({type:_.actionTypes.MAINMENU_START_FETCHING}),s.a.get(a,e).then((function(e){console.log("MAIN MENU",e.data),t({type:_.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:_.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t="/d9-music/themes/tw2-01";return Object(n.useEffect)((function(){return console.log("Refresh")})),Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("header",{className:"App-header",children:Object(h.jsxs)(T.a,{children:[Object(h.jsx)(M,{}),Object(h.jsxs)(N.c,{children:[Object(h.jsx)(N.a,{exact:!0,path:"".concat(t,"/"),component:E}),Object(h.jsx)(N.a,{exact:!0,path:"".concat(t,"/tour"),component:m}),Object(h.jsx)(N.a,{exact:!0,path:"".concat(t,"/news"),component:y}),Object(h.jsx)(N.a,{exact:!0,path:"".concat(t,"/about"),component:O}),Object(h.jsx)(N.a,{exact:!0,path:"".concat(t,"/music"),component:R}),Object(h.jsx)(N.a,{exact:!0,path:"".concat(t,"/gallery"),component:g}),Object(h.jsx)(N.a,{exact:!0,path:"".concat(t,"/form/contact"),component:F})]})]})})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},D=a(19),w=a(35),L=a(36),G=a(3).actionTypes,U={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},B={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},k={tour_fetching:!1,tour_fetched:!1,tour_fetch_error:"",tour_data:[],tour_dataLength:0},W={news_fetching:!1,news_fetched:!1,news_fetch_error:"",news_data:[],news_dataLength:0},Y={about_fetching:!1,about_fetched:!1,about_fetch_error:"",about_data:[],about_dataLength:0},V={gallery_fetching:!1,gallery_fetched:!1,gallery_fetch_error:"",gallery_data:[],gallery_dataLength:0},P={music_fetching:!1,music_fetched:!1,music_fetch_error:"",music_data:[],music_dataLength:0},q={media_audio_fetching:!1,media_audio_fetched:!1,media_audio_fetch_error:"",media_audio_data:[],media_audio_dataLength:0},z={media_image_fetching:!1,media_image_fetched:!1,media_image_fetch_error:"",media_image_data:[],media_image_dataLength:0},J={media_remote_video_fetching:!1,media_remote_video_fetched:!1,media_remote_video_fetch_error:"",media_remote_video_data:[],media_remote_video_dataLength:0},X={contact_form_fetching:!1,contact_form_fetched:!1,contact_form_fetch_error:"",contact_form_data:[],contact_form_dataLength:0},K=Object(D.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case G.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.data.length};case G.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case G.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.data.length};case G.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}},reducerTour:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.TOUR_START_FETCHING:return{fetching:!0,tour_data:[]};case G.TOUR_FETCHED:return{tour_data:t.data,tour_fetched:!0,tour_dataLength:t.data.data.length};case G.TOUR_FETCH_ERROR:return{tour_fetched:!1,tour_fetching:!1,tour_fetch_error:t.error};default:return e}},reducerNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.NEWS_START_FETCHING:return{fetching:!0,news_data:[]};case G.NEWS_FETCHED:return{news_data:t.data,news_fetched:!0,news_dataLength:t.data.data.length};case G.NEWS_FETCH_ERROR:return{news_fetched:!1,news_fetching:!1,news_fetch_error:t.error};default:return e}},reducerAbout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.ABOUT_START_FETCHING:return{fetching:!0,about_data:[]};case G.ABOUT_FETCHED:return{about_data:t.data,about_fetched:!0,about_dataLength:t.data.data.length};case G.ABOUT_FETCH_ERROR:return{about_fetched:!1,about_fetching:!1,about_fetch_error:t.error};default:return e}},reducerGallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.GALLERY_START_FETCHING:return{fetching:!0,gallery_data:[]};case G.GALLERY_FETCHED:return{gallery_data:t.data,gallery_fetched:!0,gallery_dataLength:t.data.data.length};case G.GALLERY_FETCH_ERROR:return{gallery_fetched:!1,gallery_fetching:!1,gallery_fetch_error:t.error};default:return e}},reducerMusic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.MUSIC_START_FETCHING:return{fetching:!0,music_data:[]};case G.MUSIC_FETCHED:return{music_data:t.data,music_fetched:!0,music_dataLength:t.data.data.length};case G.MUSIC_FETCH_ERROR:return{music_fetched:!1,music_fetching:!1,music_fetch_error:t.error};default:return e}},reducerMediaAudio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.MEDIA_AUDIO_START_FETCHING:return{media_audio_fetching:!0,media_audio_dataLength:0,media_audio_data:[]};case G.MEDIA_AUDIO_FETCHED:return{media_audio_data:t.data,media_audio_fetched:!0,media_audio_dataLength:t.data.data.length};case G.MEDIA_AUDIO_FETCH_ERROR:return{media_audio_fetched:!1,media_audio_fetching:!1,media_audio_fetch_error:t.error};default:return e}},reducerMediaImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.MEDIA_IMAGE_START_FETCHING:return{fetching:!0,media_image_data:[]};case G.MEDIA_IMAGE_FETCHED:return{media_image_data:t.data,media_image_fetched:!0,media_image_dataLength:t.data.data.length};case G.MEDIA_IMAGE_FETCH_ERROR:return{media_image_fetched:!1,media_image_fetching:!1,media_image_fetch_error:t.error};default:return e}},reducerMediaRemoteVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.MEDIA_REMOTE_VIDEO_START_FETCHING:return{fetching:!0,media_remote_video_data:[]};case G.MEDIA_REMOTE_VIDEO_FETCHED:return{media_remote_video_data:t.data,media_remote_video_fetched:!0,media_remote_video_dataLength:t.data.data.length};case G.MEDIA_REMOTE_VIDEO_FETCH_ERROR:return{media_remote_video_fetched:!1,media_remote_video_fetching:!1,media_remote_video_fetch_error:t.error};default:return e}},reducerBasicContactForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.BASIC_CONTACT_FORM_START_FETCHING:return{contact_form_fetching:!0,contact_form_data:[]};case G.BASIC_CONTACT_FORM_FETCHED:return{contact_form_data:t.data,contact_form_fetched:!0,contact_form_dataLength:t.data.data.length};case G.BASIC_CONTACT_FORM_FETCH_ERROR:return{contact_form_fetched:!1,contact_form_fetching:!1,contact_form_fetch_error:t.error};default:return e}}}),Q=Object(D.a)(L.a,Object(w.createLogger)()),Z=Object(D.c)(K,Q);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(d.a,{store:Z,children:Object(h.jsx)(x,{})})}),document.getElementById("root")),S()}},[[70,1,2]]]);
//# sourceMappingURL=main.2dd7a486.chunk.js.map