(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[0],{3:function(e,t,a){"use strict";a.r(t),a.d(t,"actionTypes",(function(){return n}));var n={MAINMENU_START_FETCHING:"MAINMENU_START_FETCHING",MAINMENU_FETCHED:"MAINMENU_FETCHED",MAINMENU_FETCH_ERROR:"MAINMENU_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR",TOUR_START_FETCHING:"TOUR_START_FETCHING",TOUR_FETCHED:"TOUR_FETCHED",TOUR_FETCH_ERROR:"TOUR_FETCH_ERROR",NEWS_START_FETCHING:"NEWS_START_FETCHING",NEWS_FETCHED:"NEWS_FETCHED",NEWS_FETCH_ERROR:"NEWS_FETCH_ERROR",ABOUT_START_FETCHING:"ABOUT_START_FETCHING",ABOUT_FETCHED:"ABOUT_FETCHED",ABOUT_FETCH_ERROR:"ABOUT_FETCH_ERROR",GALLERY_START_FETCHING:"GALLERY_START_FETCHING",GALLERY_FETCHED:"GALLERY_FETCHED",GALLERY_FETCH_ERROR:"GALLERY_FETCH_ERROR",MUSIC_START_FETCHING:"MUSIC_START_FETCHING",MUSIC_FETCHED:"MUSIC_FETCHED",MUSIC_FETCH_ERROR:"MUSIC_FETCH_ERROR",MEDIA_AUDIO_START_FETCHING:"MEDIA_AUDIO_START_FETCHING",MEDIA_AUDIO_FETCHED:"MEDIA_AUDIO_FETCHED",MEDIA_AUDIO_FETCH_ERROR:"MEDIA_AUDIO_FETCH_ERROR",MEDIA_IMAGE_START_FETCHING:"MEDIA_IMAGE_START_FETCHING",MEDIA_IMAGE_FETCHED:"MEDIA_IMAGE_FETCHED",MEDIA_IMAGE_FETCH_ERROR:"MEDIA_IMAGE_FETCH_ERROR",MEDIA_REMOTE_VIDEO_START_FETCHING:"MEDIA_REMOTE_VIDEO_FETCHING",MEDIA_REMOTE_VIDEO_FETCHED:"MEDIA_REMOTE_VIDEO_FETCHED",MEDIA_REMOTE_VIDEO_FETCH_ERROR:"MEDIA_REMOTE_VIDEO_FETCH_ERROR",BASIC_CONTACT_FORM_START_FETCHING:"BASIC_CONTACT_FORM_FETCHING",BASIC_CONTACT_FORM_FETCHED:"BASIC_CONTACT_FORM_FETCHED",BASIC_CONTACT_FORM_FETCH_ERROR:"BASIC_CONTACT_FORM_FETCH_ERROR"}},41:function(e,t,a){},47:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),i=a.n(r),o=(a(41),a(6)),d=a(2),_=(a(47),a(1));var u=function(){return Object(_.jsx)("div",{class:"loader",children:Object(_.jsx)("div",{class:"loaderBar"})})};var s=function(e){var t=e.src,a=e.alt,c=e.cssClass,r=Object(n.useState)(!1),i=Object(o.a)(r,2),d=i[0],u=i[1],s=Object(n.useState)("hidden"),l=Object(o.a)(s,2),f=l[0],h=l[1];return console.log(d),Object(n.useEffect)((function(){d&&h("")}),[d]),Object(_.jsx)("img",{className:"".concat(f," ").concat(c),onLoad:function(){return u(!0)},onError:function(){return u(!1)},src:t,alt:a})};var l=function(){var e=Object(d.c)((function(e){return e.reducerHomePage.home_data.data})),t=Object(d.c)((function(e){return e.reducerHomePage.home_data.included})),a=Object(d.c)((function(e){return e.reducerHomePage.home_dataLength})),c=Object(d.c)((function(e){return e.reducerHomePage.home_fetched}));console.log("one",e),console.log("two",t),console.log("homepage",c,"length",a);var r=Object(n.useState)([]),i=Object(o.a)(r,2),l=i[0],f=i[1];return Object(n.useEffect)((function(){var a=[];c&&e.map((function(e){var n=e.attributes,c=n.title,r=n.field_home_body,i=t[1].attributes.uri.url;a.push({title:c,body:r.value,image:i})})),f(a)}),[e,c,t]),console.log("new array ",l),Object(_.jsx)("div",{children:l.length>0?l.map((function(e){return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{className:"text-2xl",children:e.title}),Object(_.jsx)("div",{children:Object(_.jsx)(s,{cssClass:"w-60",src:e.image,alt:"Homepage"})}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})})]})})):Object(_.jsx)(u,{})})},f=a(3),h=a(7),E=a.n(h),m="https://yellow-website.com/d9-music/d9-music",T=a(14);var O=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerTour.tour_data.data})),a=Object(d.c)((function(e){return e.reducerTour.tour_dataLength}));return console.log(t,"length",a),Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(m,"/jsonapi/node/tour");return function(a){a({type:f.actionTypes.TOUR_START_FETCHING}),E.a.get(t,e).then((function(e){console.log("action",e.data),a({type:f.actionTypes.TOUR_FETCHED,data:e.data})})).catch((function(e){a({type:f.actionTypes.TOUR_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(_.jsx)("div",{children:a>0&&t.map((function(e){var t=e.attributes,a=t.title,n=t.field_event_details,c=t.field_event_location,r=t.field_buy_ticket;return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{className:"text-2xl",children:a}),Object(_.jsxs)("div",{children:[Object(_.jsx)("h2",{children:"Details:"}),Object(_.jsx)("div",{dangerouslySetInnerHTML:{__html:n.value}}),Object(_.jsx)("h2",{children:"Location:"}),Object(_.jsx)("div",{dangerouslySetInnerHTML:{__html:c.value}}),Object(_.jsx)("h2",{children:"Ticket"}),Object(_.jsx)("div",{children:Object(_.jsx)(T.b,{to:r.uri,children:r.title})})]})]})}))})};var b=function(){var e=Object(d.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(m,"/jsonapi/node/about_page?include=field_about_page_media,field_about_page_media.field_media_image");return function(a){a({type:f.actionTypes.ABOUT_START_FETCHING}),E.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:f.actionTypes.ABOUT_FETCHED,data:e.data})})).catch((function(e){a({type:f.actionTypes.ABOUT_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t=Object(d.c)((function(e){return e.reducerAbout.about_data.data})),a=Object(d.c)((function(e){return e.reducerAbout.about_dataLength})),c=Object(d.c)((function(e){return e.reducerAbout.about_data.included}));console.log("about data",t,"about lng",c);var r=Object(n.useState)([]),i=Object(o.a)(r,2),u=i[0],s=i[1];return Object(n.useEffect)((function(){var e=[];a>0&&t.map((function(t){var a=t.attributes,n=a.title,r=a.field_about_page;c.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;e.push({title:n,body:r.processed,image:a.url})}return s(e)}))}))}),[c,a,t]),console.log("Array about data",u),Object(_.jsx)("div",{children:a>0&&u.map((function(e){return Object(_.jsxs)("div",{className:"m-12",children:[Object(_.jsx)("h1",{className:"text-2xl",children:e.title}),Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:"w-56",src:e.image,alt:""})}),Object(_.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}))})};var j=function(){var e=Object(d.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(m,"/jsonapi/node/gallery?include=field_gallery_media,field_gallery_media.field_media_image");return function(a){a({type:f.actionTypes.GALLERY_START_FETCHING}),E.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:f.actionTypes.GALLERY_FETCHED,data:e.data})})).catch((function(e){a({type:f.actionTypes.GALLERY_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t=Object(d.c)((function(e){return e.reducerGallery.gallery_data.data})),a=Object(d.c)((function(e){return e.reducerGallery.gallery_data.included})),c=Object(d.c)((function(e){return e.reducerGallery.gallery_dataLength})),r=Object(n.useState)([]),i=Object(o.a)(r,2),u=i[0],l=i[1];return console.log("gallery state",t,"include gallery",a,"length",c),Object(n.useEffect)((function(){var e=[];c>0&&t.map((function(t){var n=t.attributes,c=n.title,r=n.field_gallery_body;console.log("loop 1"),a.map((function(t){if("file--file"===t.type){var a=t.attributes.uri;!e.some((function(e){return e.id===t.id}))&&e.push({id:t.id,title:c,body:r.processed,image:a.url})}}))})),l(e)}),[a,c,t]),console.log("gallery arr",u),Object(_.jsx)("div",{children:u.map((function(e){return Object(_.jsxs)("div",{className:"m-12",children:[Object(_.jsx)("h1",{children:e.title}),Object(_.jsx)("div",{children:Object(_.jsx)(s,{cssClass:"w-64",src:e.image,alt:"gallery"})}),Object(_.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]},e.id)}))})},g=a(34),p=a.n(g);var R=function(e){return e.data.map((function(e){var t=e.title,a=e.url;return Object(_.jsxs)("li",{children:[Object(_.jsx)("h3",{children:t}),Object(_.jsxs)("div",{children:["Audio link: ",a]}),Object(_.jsx)("div",{children:Object(_.jsx)(p.a,{src:a,controls:!0})})]})}))};var v=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerMediaAudio.media_audio_data.data})),a=Object(d.c)((function(e){return e.reducerMediaAudio.media_audio_data.included})),c=Object(d.c)((function(e){return e.reducerMediaAudio.media_audio_dataLength})),r=Object(d.c)((function(e){return e.reducerMediaAudio.media_audio_fetched})),i=Object(d.c)((function(e){return e.reducerMusic.music_data.data})),u=Object(d.c)((function(e){return e.reducerMusic.music_data.included})),s=Object(d.c)((function(e){return e.reducerMusic.music_dataLength})),l=Object(n.useState)([]),h=Object(o.a)(l,2),T=h[0],O=h[1],b=Object(n.useState)([]),j=Object(o.a)(b,2),g=j[0],p=j[1];function v(e,t){var a=[];return t.map((function(t){return e.some((function(e){return e.id===t.id}))&&a.push({id:t.id,title:t.title,url:t.url})})),a}return Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(m,"/jsonapi/node/music_album?include=field_music_audio,field_music_audio.field_media_audio_file,field_music_image.field_media_image");return function(a){a({type:f.actionTypes.MUSIC_START_FETCHING}),E.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:f.actionTypes.MUSIC_FETCHED,data:e.data})})).catch((function(e){a({type:f.actionTypes.MUSIC_FETCH_ERROR,fetched:!1,error:e})}))}}()),e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(m,"/jsonapi/media/audio?include=field_media_audio_file");return function(a){a({type:f.actionTypes.MEDIA_AUDIO_START_FETCHING}),E.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:f.actionTypes.MEDIA_AUDIO_FETCHED,data:e.data})})).catch((function(e){a({type:f.actionTypes.MEDIA_AUDIO_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),console.log("media audio",t,"media audio lnc",a,c),console.log(i,u,s),Object(n.useEffect)((function(){var e=[];console.log("media audio length in use",c),console.log(r&&t[0].id),console.log(r&&t[0].id),console.log(r),r&&a.map((function(a,n){var c=a.attributes,r=c.uri.url,i=c.filemime,o=c.filesize;return e.push({id:t[n].id,title:t[n].attributes.field_audio_title,filetype:i,filesize:o,url:r})})),p(e)}),[t,a,c,r]),console.log("Audio data +: ",g),Object(n.useEffect)((function(){var e=[];console.log("final array",e),s>0&&g.length>0&&i.map((function(t){var a=t.attributes,n=a.title,c=a.field_music_body,r=t.relationships.field_music_audio.data;e.push({id:t.id,title:n,body:c.processed,data:v(r,g)})})),O(e)}),[g,i,s]),console.log("view Data",T,"vlength ",T.length),console.log("view data type: ",typeof T),Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"Music Page"}),T.length>0&&T.map((function(e){var t=e.id,a=e.title,n=e.body,c=e.data;return Object(_.jsxs)("div",{className:"m-5 p-3",children:[Object(_.jsx)("h2",{className:"my-2",children:a}),Object(_.jsx)("div",{dangerouslySetInnerHTML:{__html:n}}),console.log(typeof c),console.log(c),Object(_.jsx)("ul",{className:"m-5 border p-4",children:R({data:c})})]},t)}))]})},C=a(15),A=a.n(C),I=a(18),H=null,F=Object(I.a)(A.a.mark((function e(){var t,a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H){e.next=14;break}return t=m+"/session/token",e.prev=2,e.next=5,E.a.get(t,{withCredentials:!0});case 5:a=e.sent,n=a.data,H=E.a.create({baseURL:m,withCredentials:!0,headers:{"X-CSRF-Token":n},params:{_format:"json"}}),console.log("Created new axios instance",H),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:return console.log("SINGLETON",H),e.abrupt("return",H);case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));var y=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerBasicContactForm.contact_form_data.data})),a=Object(d.c)((function(e){return e.reducerBasicContactForm.contact_form_fetched}));console.log("Conf message",a&&t);var c=Object(n.useState)(""),r=Object(o.a)(c,2),i=r[0],u=r[1],s=Object(n.useState)(""),l=Object(o.a)(s,2),h=l[0],T=l[1],O=Object(n.useState)(""),b=Object(o.a)(O,2),j=b[0],g=b[1],p=Object(n.useState)(!1),R=Object(o.a)(p,2),v=R[0],C=R[1];Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(m,"/jsonapi/webform/webform/8979d944-eba5-4587-9d0b-2002f663d15b");return function(a){a({type:f.actionTypes.BASIC_CONTACT_FORM_START_FETCHING}),E.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:f.actionTypes.BASIC_CONTACT_FORM_FETCHED,data:e.data})})).catch((function(e){a({type:f.actionTypes.BASIC_CONTACT_FORM_FETCH_ERROR,fetched:!1,error:e})}))}}()),v&&u(""),T(""),g("")}),[e,v]),console.log(i,h,j,"sumbited",v);var H=function(){var e=Object(I.a)(A.a.mark((function e(t){var a,n,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(i,h,j),a={webform_id:"contact",name:i,email:h,message:j},n="".concat(m,"/webform_rest/submit"),e.prev=4,e.next=7,F();case 7:return c=e.sent,e.next=10,c.post(n,a);case 10:200===e.sent.status&&C(!0),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{className:"text-3xl text-center m-5",children:a&&t.attributes.title}),Object(_.jsx)("div",{className:"text-center",children:a&&!v&&t.attributes.description}),Object(_.jsx)("div",{className:"text-1xl text-center",children:v&&a&&t.attributes.settings.confirmation_message}),Object(_.jsx)("div",{className:"w-full flex justify-center align-middle",children:Object(_.jsxs)("form",{onSubmit:H,method:"post",class:"w-full md:w-3/6 p-4 m-5 flex flex-col",children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("input",{className:"w-full md:w-1/2 outline-none p-2 border-gray-500  border-l border-r border-t border-b-0 md:border-l md:border-r md:border-t md:border-b-0",required:!0,type:"text",id:"name",name:"name",placeholder:"Name",value:i,onChange:function(e){return u(e.target.value)}}),Object(_.jsx)("input",{className:"w-full md:w-1/2 outline-none border-gray-500 p-2 border-l border-r border-t border-b-0  md:border-l-0 md:border-r md:border-t md:border-b-0",required:!0,type:"text",id:"email",name:"email",placeholder:"Email",value:h,onChange:function(e){return T(e.target.value)}})]}),Object(_.jsx)("div",{children:Object(_.jsx)("textarea",{className:"w-full border border-gray-500 p-2 h-60 outline-none",required:!0,name:"message",id:"message",placeholder:"Message",value:j,onChange:function(e){return g(e.target.value)}})}),Object(_.jsx)("div",{children:Object(_.jsx)("input",{className:"border cursor-pointer border-gray-500 p-4 outline-none",type:"submit",id:"submit",name:"submit",value:"Submit"})})]})})]})};var M=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.reducerNews.news_data.data})),a=Object(d.c)((function(e){return e.reducerNews.news_data.included})),c=Object(d.c)((function(e){return e.reducerNews.news_dataLength})),r=Object(n.useState)([]),i=Object(o.a)(r,2),u=i[0],s=i[1];return Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(m,"/jsonapi/node/news?include=field_news_media,field_news_media.field_media_image&fields[file--file]=filename,uri");return function(a){a({type:f.actionTypes.NEWS_START_FETCHING}),E.a.get(t,e).then((function(e){console.log("action news",e.data),a({type:f.actionTypes.NEWS_FETCHED,data:e.data})})).catch((function(e){a({type:f.actionTypes.NEWS_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]),Object(n.useEffect)((function(){var e=[];c>0&&t.map((function(t){var n=t.attributes,c=n.title,r=n.field_news_body,i=n.field_news_date;a.map((function(t){var a=t.attributes.uri,n=t.id,o=e.some((function(e){return e.incId===n}));return"file--file"!==t.type||o||e.push({title:c,body:r.processed,data:i,incId:n,image:a.url}),s(e)}))}))}),[t,a,c]),Object(_.jsx)("div",{children:c>0&&u.map((function(e){return Object(_.jsxs)("div",{className:"m-5",children:[Object(_.jsx)("h1",{className:"text-2xl",children:e.title}),Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:e.image,alt:"news"})}),Object(_.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}})]})}))})};var N=function(){var e=Object(d.c)((function(e){return e.reducerNav.nav_data.data})),t=Object(d.c)((function(e){return e.reducerNav.nav_dataLength}));return console.log("Nav",e),console.log("Length:",t),Object(_.jsx)("div",{className:"w-full h-8 bg-gray-100 flex justify-center align-middle",children:t>0?e.map((function(e,t){var a=e.attributes,n=a.title,c=a.url.split("/");c[0]="d9-music",c[1]="themes",c[2]="tw2-01";var r=c.join("/");return Object(_.jsx)(T.b,{className:"m-1",to:"/".concat(r),children:n})})):Object(_.jsx)(u,{})})},x=a(5);var S=function(){var e=Object(d.b)();Object(n.useEffect)((function(){e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(m,"/jsonapi/menu_items/main"),a="http://localhost:3000"===window.location.origin?"./data/mainnav.json":t;return function(t){t({type:f.actionTypes.MAINMENU_START_FETCHING}),E.a.get(a,e).then((function(e){console.log("MAIN MENU",e.data),t({type:f.actionTypes.MAINMENU_FETCHED,data:e.data})})).catch((function(e){t({type:f.actionTypes.MAINMENU_FETCH_ERROR,fetched:!1,error:e})}))}}()),e(function(){var e={headers:{Accept:"application/vnd.api+json"}},t="".concat(m,"/jsonapi/node/home_page?include=field_home_main_media,field_home_main_media.field_media_image");return function(a){a({type:f.actionTypes.HOME_START_FETCHING}),E.a.get(t,e).then((function(e){console.log("action",e.data),a({type:f.actionTypes.HOME_FETCHED,data:e.data})})).catch((function(e){a({type:f.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:e})}))}}())}),[e]);var t="/d9-music/themes/tw2-01";return Object(n.useEffect)((function(){return console.log("Refresh")})),Object(_.jsx)("div",{className:"App",children:Object(_.jsx)("header",{className:"App-header",children:Object(_.jsxs)(T.a,{children:[Object(_.jsx)(N,{}),Object(_.jsxs)(x.c,{children:[Object(_.jsx)(x.a,{exact:!0,path:"".concat(t,"/"),component:l}),Object(_.jsx)(x.a,{exact:!0,path:"".concat(t,"/tour"),component:O}),Object(_.jsx)(x.a,{exact:!0,path:"".concat(t,"/news"),component:M}),Object(_.jsx)(x.a,{exact:!0,path:"".concat(t,"/about"),component:b}),Object(_.jsx)(x.a,{exact:!0,path:"".concat(t,"/music"),component:v}),Object(_.jsx)(x.a,{exact:!0,path:"".concat(t,"/gallery"),component:j}),Object(_.jsx)(x.a,{exact:!0,path:"".concat(t,"/form/contact"),component:y})]})]})})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},w=a(19),L=a(35),G=a(36),U=a(3).actionTypes,B={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},k={home_fetching:!1,home_fetched:!1,home_fetch_error:"",home_data:[],home_dataLength:0},W={tour_fetching:!1,tour_fetched:!1,tour_fetch_error:"",tour_data:[],tour_dataLength:0},Y={news_fetching:!1,news_fetched:!1,news_fetch_error:"",news_data:[],news_dataLength:0},V={about_fetching:!1,about_fetched:!1,about_fetch_error:"",about_data:[],about_dataLength:0},P={gallery_fetching:!1,gallery_fetched:!1,gallery_fetch_error:"",gallery_data:[],gallery_dataLength:0},q={music_fetching:!1,music_fetched:!1,music_fetch_error:"",music_data:[],music_dataLength:0},z={media_audio_fetching:!1,media_audio_fetched:!1,media_audio_fetch_error:"",media_audio_data:[],media_audio_dataLength:0},J={media_image_fetching:!1,media_image_fetched:!1,media_image_fetch_error:"",media_image_data:[],media_image_dataLength:0},X={media_remote_video_fetching:!1,media_remote_video_fetched:!1,media_remote_video_fetch_error:"",media_remote_video_data:[],media_remote_video_dataLength:0},K={contact_form_fetching:!1,contact_form_fetched:!1,contact_form_fetch_error:"",contact_form_data:[],contact_form_dataLength:0},Q=Object(w.b)({reducerNav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.MAINMENU_START_FETCHING:return{fetching:!0,nav_data:[]};case U.MAINMENU_FETCHED:return{nav_data:t.data,nav_fetched:!0,nav_dataLength:t.data.data.length};case U.MAINMENU_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:t.error};default:return e}},reducerHomePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.HOME_START_FETCHING:return{fetching:!0,home_data:[]};case U.HOME_FETCHED:return{home_data:t.data,home_fetched:!0,home_dataLength:t.data.data.length};case U.HOME_FETCH_ERROR:return{home_fetched:!1,home_fetching:!1,home_fetch_error:t.error};default:return e}},reducerTour:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.TOUR_START_FETCHING:return{fetching:!0,tour_data:[]};case U.TOUR_FETCHED:return{tour_data:t.data,tour_fetched:!0,tour_dataLength:t.data.data.length};case U.TOUR_FETCH_ERROR:return{tour_fetched:!1,tour_fetching:!1,tour_fetch_error:t.error};default:return e}},reducerNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.NEWS_START_FETCHING:return{fetching:!0,news_data:[]};case U.NEWS_FETCHED:return{news_data:t.data,news_fetched:!0,news_dataLength:t.data.data.length};case U.NEWS_FETCH_ERROR:return{news_fetched:!1,news_fetching:!1,news_fetch_error:t.error};default:return e}},reducerAbout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.ABOUT_START_FETCHING:return{fetching:!0,about_data:[]};case U.ABOUT_FETCHED:return{about_data:t.data,about_fetched:!0,about_dataLength:t.data.data.length};case U.ABOUT_FETCH_ERROR:return{about_fetched:!1,about_fetching:!1,about_fetch_error:t.error};default:return e}},reducerGallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.GALLERY_START_FETCHING:return{fetching:!0,gallery_data:[]};case U.GALLERY_FETCHED:return{gallery_data:t.data,gallery_fetched:!0,gallery_dataLength:t.data.data.length};case U.GALLERY_FETCH_ERROR:return{gallery_fetched:!1,gallery_fetching:!1,gallery_fetch_error:t.error};default:return e}},reducerMusic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.MUSIC_START_FETCHING:return{fetching:!0,music_data:[]};case U.MUSIC_FETCHED:return{music_data:t.data,music_fetched:!0,music_dataLength:t.data.data.length};case U.MUSIC_FETCH_ERROR:return{music_fetched:!1,music_fetching:!1,music_fetch_error:t.error};default:return e}},reducerMediaAudio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.MEDIA_AUDIO_START_FETCHING:return{media_audio_fetching:!0,media_audio_dataLength:0,media_audio_data:[]};case U.MEDIA_AUDIO_FETCHED:return{media_audio_data:t.data,media_audio_fetched:!0,media_audio_dataLength:t.data.data.length};case U.MEDIA_AUDIO_FETCH_ERROR:return{media_audio_fetched:!1,media_audio_fetching:!1,media_audio_fetch_error:t.error};default:return e}},reducerMediaImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.MEDIA_IMAGE_START_FETCHING:return{fetching:!0,media_image_data:[]};case U.MEDIA_IMAGE_FETCHED:return{media_image_data:t.data,media_image_fetched:!0,media_image_dataLength:t.data.data.length};case U.MEDIA_IMAGE_FETCH_ERROR:return{media_image_fetched:!1,media_image_fetching:!1,media_image_fetch_error:t.error};default:return e}},reducerMediaRemoteVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.MEDIA_REMOTE_VIDEO_START_FETCHING:return{fetching:!0,media_remote_video_data:[]};case U.MEDIA_REMOTE_VIDEO_FETCHED:return{media_remote_video_data:t.data,media_remote_video_fetched:!0,media_remote_video_dataLength:t.data.data.length};case U.MEDIA_REMOTE_VIDEO_FETCH_ERROR:return{media_remote_video_fetched:!1,media_remote_video_fetching:!1,media_remote_video_fetch_error:t.error};default:return e}},reducerBasicContactForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.BASIC_CONTACT_FORM_START_FETCHING:return{contact_form_fetching:!0,contact_form_data:[]};case U.BASIC_CONTACT_FORM_FETCHED:return{contact_form_data:t.data,contact_form_fetched:!0,contact_form_dataLength:t.data.data.length};case U.BASIC_CONTACT_FORM_FETCH_ERROR:return{contact_form_fetched:!1,contact_form_fetching:!1,contact_form_fetch_error:t.error};default:return e}}}),Z=Object(w.a)(G.a,Object(L.createLogger)()),$=Object(w.c)(Q,Z);i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(d.a,{store:$,children:Object(_.jsx)(S,{})})}),document.getElementById("root")),D()}},[[71,1,2]]]);
//# sourceMappingURL=main.96048ed0.chunk.js.map