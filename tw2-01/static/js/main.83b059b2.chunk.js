(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{3:function(e,t,a){"use strict";a.r(t),a.d(t,"actionTypes",(function(){return n}));var n={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR",TOUR_START_FETCHING:"TOUR_START_FETCHING",TOUR_FETCHED:"TOUR_FETCHED",TOUR_FETCH_ERROR:"TOUR_FETCH_ERROR",NEWS_START_FETCHING:"NEWS_START_FETCHING",NEWS_FETCHED:"NEWS_FETCHED",NEWS_FETCH_ERROR:"NEWS_FETCH_ERROR",ABOUT_START_FETCHING:"ABOUT_START_FETCHING",ABOUT_FETCHED:"ABOUT_FETCHED",ABOUT_FETCH_ERROR:"ABOUT_FETCH_ERROR",GALLERY_START_FETCHING:"GALLERY_START_FETCHING",GALLERY_FETCHED:"GALLERY_FETCHED",GALLERY_FETCH_ERROR:"GALLERY_FETCH_ERROR",MUSIC_START_FETCHING:"MUSIC_START_FETCHING",MUSIC_FETCHED:"MUSIC_FETCHED",MUSIC_FETCH_ERROR:"MUSIC_FETCH_ERROR",MEDIA_AUDIO_START_FETCHING:"MEDIA_AUDIO_START_FETCHING",MEDIA_AUDIO_FETCHED:"MEDIA_AUDIO_FETCHED",MEDIA_AUDIO_FETCH_ERROR:"MEDIA_AUDIO_FETCH_ERROR",MEDIA_IMAGE_START_FETCHING:"MEDIA_IMAGE_START_FETCHING",MEDIA_IMAGE_FETCHED:"MEDIA_IMAGE_FETCHED",MEDIA_IMAGE_FETCH_ERROR:"MEDIA_IMAGE_FETCH_ERROR",MEDIA_REMOTE_VIDEO_START_FETCHING:"MEDIA_REMOTE_VIDEO_FETCHING",MEDIA_REMOTE_VIDEO_FETCHED:"MEDIA_REMOTE_VIDEO_FETCHED",MEDIA_REMOTE_VIDEO_FETCH_ERROR:"MEDIA_REMOTE_VIDEO_FETCH_ERROR",BASIC_CONTACT_FORM_START_FETCHING:"BASIC_CONTACT_FORM_FETCHING",BASIC_CONTACT_FORM_FETCHED:"BASIC_CONTACT_FORM_FETCHED",BASIC_CONTACT_FORM_FETCH_ERROR:"BASIC_CONTACT_FORM_FETCH_ERROR"}},41:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),i=a.n(r),o=(a(41),a(6)),d=a(2),_=a(3),u=a(7),s=a.n(u),l="https://yellow-website.com/d9-music/d9-music",f=a(1);var h=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerHomePage.home_data.data})),a=Object(d.c)((function(e){return e.reducerHomePage.home_data.included})),c=Object(d.c)((function(e){return e.reducerHomePage.home_dataLength})),r=Object(d.c)((function(e){return e.reducerHomePage.home_fetched}));console.log("one",t),console.log("two",a),console.log("homepage",r,"length",c);var i=Object(n.useState)([]),u=Object(o.a)(i,2),h=u[0],E=u[1];return Object(n.useEffect)((function(){console.log("action is runing"),e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/home_page?include=field_home_main_media,field_home_main_media.field_media_image");return function(a){a({type:_.actionTypes.HOME_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action",e.data),a({type:_.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(n.useEffect)((function(){var e=[];r&&t.map((function(t){var n=t.attributes,c=n.title,r=n.field_home_body,i=a[1].attributes.uri.url;e.push({title:c,body:r.value,image:i})})),E(e)}),[t,r,a]),console.log("new array ",h),Object(f.jsx)("div",{children:h.length>0?h.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"text-2xl",children:e.title}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"w-60",src:e.image,alt:"homepage"})}),Object(f.jsx)("div",{children:Object(f.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})})]})})):"Loading..."})},E=a(14);var m=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerTour.tour_data.data})),a=Object(d.c)((function(e){return e.reducerTour.tour_dataLength}));return console.log(t,"length",a),Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/tour");return function(a){a({type:_.actionTypes.TOUR_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action",e.data),a({type:_.actionTypes.TOUR_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.TOUR_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(f.jsx)("div",{children:a>0&&t.map((function(e){var t=e.attributes,a=t.title,n=t.field_event_details,c=t.field_event_location,r=t.field_buy_ticket;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"text-2xl",children:a}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Details:"}),Object(f.jsx)("div",{dangerouslySetInnerHTML:{__html:n.value}}),Object(f.jsx)("h2",{children:"Location:"}),Object(f.jsx)("div",{dangerouslySetInnerHTML:{__html:c.value}}),Object(f.jsx)("h2",{children:"Ticket"}),Object(f.jsx)("div",{children:Object(f.jsx)(E.b,{to:r.uri,children:r.title})})]})]})}))})};var T=function(){var e=Object(d.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/about_page?include=field_about_page_media,field_about_page_media.field_media_image");return function(a){a({type:_.actionTypes.ABOUT_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.ABOUT_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.ABOUT_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t=Object(d.c)((function(e){return e.reducerAbout.about_data.data})),a=Object(d.c)((function(e){return e.reducerAbout.about_dataLength})),c=Object(d.c)((function(e){return e.reducerAbout.about_data.included}));console.log("about data",t,"about lng",c);var r=Object(n.useState)([]),i=Object(o.a)(r,2),u=i[0],h=i[1];return Object(n.useEffect)((function(){var e=[];a>0&&t.map((function(t){var a=t.attributes,n=a.title,r=a.field_about_page;c.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;e.push({title:n,body:r.processed,image:a.url})}return h(e)}))}))}),[c,a,t]),console.log("Array about data",u),Object(f.jsx)("div",{children:a>0&&u.map((function(e){return Object(f.jsxs)("div",{className:"m-12",children:[Object(f.jsx)("h1",{className:"text-2xl",children:e.title}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"w-56",src:e.image,alt:""})}),Object(f.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}))})};var O=function(){var e=Object(d.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/gallery?include=field_gallery_media,field_gallery_media.field_media_image");return function(a){a({type:_.actionTypes.GALLERY_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.GALLERY_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.GALLERY_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t=Object(d.c)((function(e){return e.reducerGallery.gallery_data.data})),a=Object(d.c)((function(e){return e.reducerGallery.gallery_data.included})),c=Object(d.c)((function(e){return e.reducerGallery.gallery_dataLength})),r=Object(n.useState)([]),i=Object(o.a)(r,2),u=i[0],h=i[1];return console.log("gallery state",t,"include gallery",a,"length",c),Object(n.useEffect)((function(){var e=[];c>0&&t.map((function(t){var n=t.attributes,c=n.title,r=n.field_gallery_body;console.log("loop 1"),a.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;!e.some((function(e){return e.id===t.id}))&&e.push({id:t.id,title:c,body:r.processed,image:a.url})}}))})),h(e)}),[a,c,t]),console.log("gallery arr",u),Object(f.jsx)("div",{children:u.map((function(e){return Object(f.jsxs)("div",{className:"m-12",children:[Object(f.jsx)("h1",{children:e.title}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"w-64",src:e.image,alt:"gallery"})}),Object(f.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]},e.id)}))})},g=a(34),b=a.n(g);var j=function(e){return e.data.map((function(e){var t=e.title,a=e.url;return Object(f.jsxs)("li",{children:[Object(f.jsx)("h3",{children:t}),Object(f.jsxs)("div",{children:["Audio link: ",a]}),Object(f.jsx)("div",{children:Object(f.jsx)(b.a,{src:a,controls:!0})})]})}))};var p=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerMediaAudio.media_audio_data.data})),a=Object(d.c)((function(e){return e.reducerMediaAudio.media_audio_data.included})),c=Object(d.c)((function(e){return e.reducerMediaAudio.media_audio_dataLength})),r=Object(d.c)((function(e){return e.reducerMediaAudio.media_audio_fetched})),i=Object(d.c)((function(e){return e.reducerMusic.music_data.data})),u=Object(d.c)((function(e){return e.reducerMusic.music_data.included})),h=Object(d.c)((function(e){return e.reducerMusic.music_dataLength})),E=Object(n.useState)([]),m=Object(o.a)(E,2),T=m[0],O=m[1],g=Object(n.useState)([]),b=Object(o.a)(g,2),p=b[0],R=b[1];function v(e,t){var a=[];return t.map((function(t){return e.some((function(e){return e.id===t.id}))&&a.push({id:t.id,title:t.title,url:t.url})})),a}return Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/music_album?include=field_music_audio,field_music_audio.field_media_audio_file,field_music_image.field_media_image");return function(a){a({type:_.actionTypes.MUSIC_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.MUSIC_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.MUSIC_FETCH_ERROR,fetched:!1,error:e})}))}}()),e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/media/audio?include=field_media_audio_file");return function(a){a({type:_.actionTypes.MEDIA_AUDIO_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.MEDIA_AUDIO_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.MEDIA_AUDIO_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),console.log("media audio",t,"media audio lnc",a,c),console.log(i,u,h),Object(n.useEffect)((function(){var e=[];console.log("media audio length in use",c),console.log(r&&t[0].id),console.log(r&&t[0].id),console.log(r),r&&a.map((function(a,n){var c=a.attributes,r=c.uri.url,i=c.filemime,o=c.filesize;return e.push({id:t[n].id,title:t[n].attributes.field_audio_title,filetype:i,filesize:o,url:r})})),R(e)}),[t,a,c,r]),console.log("Audio data +: ",p),Object(n.useEffect)((function(){var e=[];console.log("final array",e),h>0&&p.length>0&&i.map((function(t){var a=t.attributes,n=a.title,c=a.field_music_body,r=t.relationships.field_music_audio.data;e.push({id:t.id,title:n,body:c.processed,data:v(r,p)})})),O(e)}),[p,i,h]),console.log("view Data",T,"vlength ",T.length),console.log("view data type: ",typeof T),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Music Page"}),T.length>0&&T.map((function(e){var t=e.id,a=e.title,n=e.body,c=e.data;return Object(f.jsxs)("div",{className:"m-5 p-3",children:[Object(f.jsx)("h2",{className:"my-2",children:a}),Object(f.jsx)("div",{dangerouslySetInnerHTML:{__html:n}}),console.log(typeof c),console.log(c),Object(f.jsx)("ul",{className:"m-5 border p-4",children:j({data:c})})]},t)}))]})},R=a(15),v=a.n(R),C=a(18),A=null,H=Object(C.a)(v.a.mark((function e(){var t,a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A){e.next=14;break}return t=l+"/session/token",e.prev=2,e.next=5,s.a.get(t,{withCredentials:!0});case 5:a=e.sent,n=a.data,A=s.a.create({baseURL:l,withCredentials:!0,headers:{"X-CSRF-Token":n},params:{_format:"json"}}),console.log("Created new axios instance",A),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:return console.log("SINGLETON",A),e.abrupt("return",A);case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));var I=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),d=i[0],_=i[1],u=Object(n.useState)(""),s=Object(o.a)(u,2),h=s[0],E=s[1],m=Object(n.useState)(""),T=Object(o.a)(m,2),O=T[0],g=T[1];console.log(a,d,h);var b=function(){var e=Object(C.a)(v.a.mark((function e(t){var n,c,r,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a,d,h),n={webform_id:"contact",name:a,email:d,message:h},c="".concat(l,"/webform_rest/submit"),e.prev=4,e.next=7,H();case 7:return r=e.sent,e.next=10,r.post(c,n);case 10:200===(i=e.sent).status&&g("Post Submited. Thank you message should be Drupal json data"),console.log("Data Posted:",i),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"text-3xl text-center m-5",children:"Contact Form"}),O,Object(f.jsx)("div",{className:"w-full flex justify-center align-middle",children:Object(f.jsxs)("form",{onSubmit:b,method:"post",class:"w-full md:w-3/6 p-4 m-5 flex flex-col",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{className:"w-full md:w-1/2 border md:border-l md:border-r md:border-t md:border-b-0 border-gray-500 p-2 outline-none",required:!0,type:"text",id:"name",name:"name",placeholder:"Name",value:a,onChange:function(e){return c(e.target.value)}}),Object(f.jsx)("input",{className:"w-full md:w-1/2 border md:border-l-0 md:border-r md:border-t md:border-b-0 border-gray-500 p-2 outline-none",required:!0,type:"text",id:"email",name:"email",placeholder:"Email",value:d,onChange:function(e){return _(e.target.value)}})]}),Object(f.jsx)("div",{children:Object(f.jsx)("textarea",{className:"w-full border border-gray-500 p-2 h-60 outline-none",required:!0,name:"message",id:"message",placeholder:"Message",value:h,onChange:function(e){return E(e.target.value)}})}),Object(f.jsx)("div",{children:Object(f.jsx)("input",{className:"border cursor-pointer border-gray-500 p-4 outline-none",type:"submit",id:"submit",name:"submit",value:"Submit"})})]})})]})};var F=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerNews.news_data.data})),a=Object(d.c)((function(e){return e.reducerNews.news_data.included})),c=Object(d.c)((function(e){return e.reducerNews.news_dataLength})),r=Object(n.useState)([]),i=Object(o.a)(r,2),u=i[0],h=i[1];return console.log("news",t,"news length",c),Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/node/news?include=field_news_media,field_news_media.field_media_image&fields[file--file]=filename,uri");return function(a){a({type:_.actionTypes.NEWS_START_FETCHING}),s.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:_.actionTypes.NEWS_FETCHED,data:e.data})})).catch((function(e){a({type:_.actionTypes.NEWS_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(n.useEffect)((function(){var e=[];c>0&&t.map((function(t){var n=t.attributes,c=n.title,r=n.field_news_body,i=n.field_news_date;a.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;e.push({title:c,body:r.processed,data:i,image:a.url})}return h(e)}))}))}),[t,a,c]),console.log("data arr news",u),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"m-10",children:"Note: Need to check array repeat"}),c>0&&u.map((function(e){return Object(f.jsxs)("div",{className:"m-5",children:[Object(f.jsx)("h1",{className:"text-2xl",children:e.title}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:e.image,alt:"news"})}),Object(f.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}))]})};var y=function(){var e=Object(d.c)((function(e){return e.reducerNav.nav_data.data})),t=Object(d.c)((function(e){return e.reducerNav.nav_dataLength}));return console.log("Nav",e),console.log("Length:",t),Object(f.jsx)("div",{className:"w-full h-8 bg-gray-100 flex justify-center align-middle",children:t>0?e.map((function(e,t){var a=e.attributes,n=a.title,c=a.url.split("/");c[0]="d9-music",c[1]="themes",c[2]="tw2-01";var r=c.join("/");return Object(f.jsx)(E.b,{className:"m-1",to:"/".concat(r),children:n})})):"data not loaded yet"})},M=a(5);var N=function(){var e=Object(d.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(l,"/jsonapi/menu_items/main"),a="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t;return function(t){t({type:_.actionTypes.MAINMENU_START_FETCHING}),s.a.get(a,e).then((function(e){console.log("MAIN MENU",e.data),t({type:_.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:_.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t="/d9-music/themes/tw2-01";return Object(n.useEffect)((function(){return console.log("Refresh")})),Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("header",{className:"App-header",children:Object(f.jsxs)(E.a,{children:[Object(f.jsx)(y,{}),Object(f.jsxs)(M.c,{children:[Object(f.jsx)(M.a,{exact:!0,path:"".concat(t,"/"),component:h}),Object(f.jsx)(M.a,{exact:!0,path:"".concat(t,"/tour"),component:m}),Object(f.jsx)(M.a,{exact:!0,path:"".concat(t,"/news"),component:F}),Object(f.jsx)(M.a,{exact:!0,path:"".concat(t,"/about"),component:T}),Object(f.jsx)(M.a,{exact:!0,path:"".concat(t,"/music"),component:p}),Object(f.jsx)(M.a,{exact:!0,path:"".concat(t,"/gallery"),component:O}),Object(f.jsx)(M.a,{exact:!0,path:"".concat(t,"/form/contact"),component:I})]})]})})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},D=a(19),S=a(35),w=a(36),L=a(3).actionTypes,G={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},U={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},B={tour_fetching:!1,tour_fetched:!1,tour_fetch_error:"",tour_data:[],tour_dataLength:0},k={news_fetching:!1,news_fetched:!1,news_fetch_error:"",news_data:[],news_dataLength:0},W={about_fetching:!1,about_fetched:!1,about_fetch_error:"",about_data:[],about_dataLength:0},Y={gallery_fetching:!1,gallery_fetched:!1,gallery_fetch_error:"",gallery_data:[],gallery_dataLength:0},P={music_fetching:!1,music_fetched:!1,music_fetch_error:"",music_data:[],music_dataLength:0},V={media_audio_fetching:!1,media_audio_fetched:!1,media_audio_fetch_error:"",media_audio_data:[],media_audio_dataLength:0},q={media_image_fetching:!1,media_image_fetched:!1,media_image_fetch_error:"",media_image_data:[],media_image_dataLength:0},z={media_remote_video_fetching:!1,media_remote_video_fetched:!1,media_remote_video_fetch_error:"",media_remote_video_data:[],media_remote_video_dataLength:0},J={contact_form_fetching:!1,contact_form_fetched:!1,contact_form_fetch_error:"",contact_form_data:[],contact_form_dataLength:0},X=Object(D.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case L.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.data.length};case L.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case L.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.data.length};case L.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}},reducerTour:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.TOUR_START_FETCHING:return{fetching:!0,tour_data:[]};case L.TOUR_FETCHED:return{tour_data:t.data,tour_fetched:!0,tour_dataLength:t.data.data.length};case L.TOUR_FETCH_ERROR:return{tour_fetched:!1,tour_fetching:!1,tour_fetch_error:t.error};default:return e}},reducerNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.NEWS_START_FETCHING:return{fetching:!0,news_data:[]};case L.NEWS_FETCHED:return{news_data:t.data,news_fetched:!0,news_dataLength:t.data.data.length};case L.NEWS_FETCH_ERROR:return{news_fetched:!1,news_fetching:!1,news_fetch_error:t.error};default:return e}},reducerAbout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.ABOUT_START_FETCHING:return{fetching:!0,about_data:[]};case L.ABOUT_FETCHED:return{about_data:t.data,about_fetched:!0,about_dataLength:t.data.data.length};case L.ABOUT_FETCH_ERROR:return{about_fetched:!1,about_fetching:!1,about_fetch_error:t.error};default:return e}},reducerGallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.GALLERY_START_FETCHING:return{fetching:!0,gallery_data:[]};case L.GALLERY_FETCHED:return{gallery_data:t.data,gallery_fetched:!0,gallery_dataLength:t.data.data.length};case L.GALLERY_FETCH_ERROR:return{gallery_fetched:!1,gallery_fetching:!1,gallery_fetch_error:t.error};default:return e}},reducerMusic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.MUSIC_START_FETCHING:return{fetching:!0,music_data:[]};case L.MUSIC_FETCHED:return{music_data:t.data,music_fetched:!0,music_dataLength:t.data.data.length};case L.MUSIC_FETCH_ERROR:return{music_fetched:!1,music_fetching:!1,music_fetch_error:t.error};default:return e}},reducerMediaAudio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.MEDIA_AUDIO_START_FETCHING:return{media_audio_fetching:!0,media_audio_dataLength:0,media_audio_data:[]};case L.MEDIA_AUDIO_FETCHED:return{media_audio_data:t.data,media_audio_fetched:!0,media_audio_dataLength:t.data.data.length};case L.MEDIA_AUDIO_FETCH_ERROR:return{media_audio_fetched:!1,media_audio_fetching:!1,media_audio_fetch_error:t.error};default:return e}},reducerMediaImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.MEDIA_IMAGE_START_FETCHING:return{fetching:!0,media_image_data:[]};case L.MEDIA_IMAGE_FETCHED:return{media_image_data:t.data,media_image_fetched:!0,media_image_dataLength:t.data.data.length};case L.MEDIA_IMAGE_FETCH_ERROR:return{media_image_fetched:!1,media_image_fetching:!1,media_image_fetch_error:t.error};default:return e}},reducerMediaRemoteVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.MEDIA_REMOTE_VIDEO_START_FETCHING:return{fetching:!0,media_remote_video_data:[]};case L.MEDIA_REMOTE_VIDEO_FETCHED:return{media_remote_video_data:t.data,media_remote_video_fetched:!0,media_remote_video_dataLength:t.data.data.length};case L.MEDIA_REMOTE_VIDEO_FETCH_ERROR:return{media_remote_video_fetched:!1,media_remote_video_fetching:!1,media_remote_video_fetch_error:t.error};default:return e}},reducerBasicContactForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.BASIC_CONTACT_FORM_START_FETCHING:return{contact_form_fetching:!0,contact_form_data:[]};case L.BASIC_CONTACT_FORM_FETCHED:return{contact_form_data:t.data,contact_form_fetched:!0,contact_form_dataLength:t.data.data.length};case L.BASIC_CONTACT_FORM_FETCH_ERROR:return{contact_form_fetched:!1,contact_form_fetching:!1,contact_form_fetch_error:t.error};default:return e}}}),K=Object(D.a)(w.a,Object(S.createLogger)()),Q=Object(D.c)(X,K);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(d.a,{store:Q,children:Object(f.jsx)(N,{})})}),document.getElementById("root")),x()}},[[70,1,2]]]);
//# sourceMappingURL=main.83b059b2.chunk.js.map