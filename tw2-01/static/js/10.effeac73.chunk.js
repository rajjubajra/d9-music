(this["webpackJsonptw2-01-music"]=this["webpackJsonptw2-01-music"]||[]).push([[10],{72:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,_=e[Symbol.iterator]();!(n=(i=_.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==_.return||_.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return o}))},765:function(module,exports,__webpack_require__){module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=__webpack_require__(14)},function(e,t){e.exports=__webpack_require__(0)},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){return function(){var t,r=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},ReactAudioPlayer=function(_Component){_inherits(ReactAudioPlayer,_Component);var _super=_createSuper(ReactAudioPlayer);function ReactAudioPlayer(){var e;_classCallCheck(this,ReactAudioPlayer);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return _defineProperty(_assertThisInitialized(e=_super.call.apply(_super,[this].concat(r))),"audioEl",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),_defineProperty(_assertThisInitialized(e),"listenTracker",void 0),_defineProperty(_assertThisInitialized(e),"onError",(function(t){var r,n;return null===(r=(n=e.props).onError)||void 0===r?void 0:r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onCanPlay",(function(t){var r,n;return null===(r=(n=e.props).onCanPlay)||void 0===r?void 0:r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onCanPlayThrough",(function(t){var r,n;return null===(r=(n=e.props).onCanPlayThrough)||void 0===r?void 0:r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onPlay",(function(t){var r,n;e.setListenTrack(),null===(r=(n=e.props).onPlay)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onAbort",(function(t){var r,n;e.clearListenTrack(),null===(r=(n=e.props).onAbort)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onEnded",(function(t){var r,n;e.clearListenTrack(),null===(r=(n=e.props).onEnded)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onPause",(function(t){var r,n;e.clearListenTrack(),null===(r=(n=e.props).onPause)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onSeeked",(function(t){var r,n;null===(r=(n=e.props).onSeeked)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onLoadedMetadata",(function(t){var r,n;null===(r=(n=e.props).onLoadedMetadata)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onVolumeChanged",(function(t){var r,n;null===(r=(n=e.props).onVolumeChanged)||void 0===r||r.call(n,t)})),e}return _createClass(ReactAudioPlayer,[{key:"componentDidMount",value:function(){var e=this.audioEl.current;e&&(this.updateVolume(this.props.volume),e.addEventListener("error",this.onError),e.addEventListener("canplay",this.onCanPlay),e.addEventListener("canplaythrough",this.onCanPlayThrough),e.addEventListener("play",this.onPlay),e.addEventListener("abort",this.onAbort),e.addEventListener("ended",this.onEnded),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeeked),e.addEventListener("loadedmetadata",this.onLoadedMetadata),e.addEventListener("volumechange",this.onVolumeChanged))}},{key:"componentWillUnmount",value:function(){var e=this.audioEl.current;e&&(e.removeEventListener("error",this.onError),e.removeEventListener("canplay",this.onCanPlay),e.removeEventListener("canplaythrough",this.onCanPlayThrough),e.removeEventListener("play",this.onPlay),e.removeEventListener("abort",this.onAbort),e.removeEventListener("ended",this.onEnded),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeeked),e.removeEventListener("loadedmetadata",this.onLoadedMetadata),e.removeEventListener("volumechange",this.onVolumeChanged))}},{key:"componentDidUpdate",value:function(e){this.updateVolume(this.props.volume)}},{key:"setListenTrack",value:function(){var e=this;if(!this.listenTracker){var t=this.props.listenInterval;this.listenTracker=window.setInterval((function(){var t,r;e.audioEl.current&&(null===(t=(r=e.props).onListen)||void 0===t||t.call(r,e.audioEl.current.currentTime))}),t)}}},{key:"updateVolume",value:function(e){var t=this.audioEl.current;null!==t&&"number"==typeof e&&e!==(null==t?void 0:t.volume)&&(t.volume=e)}},{key:"clearListenTrack",value:function(){this.listenTracker&&(clearInterval(this.listenTracker),delete this.listenTracker)}},{key:"render",value:function(){var e=this.props.children||react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Your browser does not support the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"audio")," element."),t=!(!1===this.props.controls),r=this.props.title?this.props.title:this.props.src,n={};return this.props.controlsList&&(n.controlsList=this.props.controlsList),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio",_extends({autoPlay:this.props.autoPlay,className:"react-audio-player ".concat(this.props.className),controls:t,crossOrigin:this.props.crossOrigin,id:this.props.id,loop:this.props.loop,muted:this.props.muted,preload:this.props.preload,ref:this.audioEl,src:this.props.src,style:this.props.style,title:r},n),e)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ReactAudioPlayer}(react__WEBPACK_IMPORTED_MODULE_0__.Component);_defineProperty(ReactAudioPlayer,"propTypes",void 0),_defineProperty(ReactAudioPlayer,"defaultProps",void 0),ReactAudioPlayer.defaultProps={autoPlay:!1,children:null,className:"",controls:!1,controlsList:"",id:"",listenInterval:1e4,loop:!1,muted:!1,onAbort:function(){},onCanPlay:function(){},onCanPlayThrough:function(){},onEnded:function(){},onError:function(){},onListen:function(){},onPause:function(){},onPlay:function(){},onSeeked:function(){},onVolumeChanged:function(){},onLoadedMetadata:function(){},preload:"metadata",style:{},title:"",volume:1},ReactAudioPlayer.propTypes={autoPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,controls:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,controlsList:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,crossOrigin:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,listenInterval:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,loop:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,muted:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,onAbort:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlayThrough:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onEnded:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onError:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onListen:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onLoadedMetadata:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPause:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onSeeked:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onVolumeChanged:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,preload:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["","none","metadata","auto"]),src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,volume:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number};var _default=ReactAudioPlayer,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(ReactAudioPlayer,"ReactAudioPlayer","/home/justin/Projects/react-audio-player/src/index.tsx"),reactHotLoader.register(_default,"default","/home/justin/Projects/react-audio-player/src/index.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}])},775:function(e,t,r){"use strict";r.r(t);var n=r(72),o=r(0),a=r(16),i=r(19),_=r(765),u=r.n(_),l=r(3);var s=function(e){return e.data.map((function(e){var t=e.title,r=e.url;return Object(l.jsxs)("li",{children:[Object(l.jsx)("h3",{children:t}),Object(l.jsxs)("div",{children:["Audio link: ",r]}),Object(l.jsx)("div",{children:Object(l.jsx)(u.a,{src:r,controls:!0})})]})}))};t.default=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.reducerMediaAudio.media_audio_data.data})),r=Object(a.c)((function(e){return e.reducerMediaAudio.media_audio_data.included})),_=Object(a.c)((function(e){return e.reducerMediaAudio.media_audio_dataLength})),u=Object(a.c)((function(e){return e.reducerMediaAudio.media_audio_fetched})),c=Object(a.c)((function(e){return e.reducerMusic.music_data.data})),d=Object(a.c)((function(e){return e.reducerMusic.music_data.included})),p=Object(a.c)((function(e){return e.reducerMusic.music_dataLength})),f=Object(o.useState)([]),y=Object(n.a)(f,2),P=y[0],E=y[1],h=Object(o.useState)([]),v=Object(n.a)(h,2),O=v[0],b=v[1];function m(e,t){var r=[];return t.map((function(t){return e.some((function(e){return e.id===t.id}))&&r.push({id:t.id,title:t.title,url:t.url})})),r}return Object(o.useEffect)((function(){e(Object(i.f)()),e(Object(i.e)())}),[e]),console.log("media audio",t,"media audio lnc",r,_),console.log(c,d,p),Object(o.useEffect)((function(){var e=[];console.log("media audio length in use",_),console.log(u&&t[0].id),console.log(u&&t[0].id),console.log(u),u&&r.map((function(r,n){var o=r.attributes,a=o.uri.url,i=o.filemime,_=o.filesize;return e.push({id:t[n].id,title:t[n].attributes.field_audio_title,filetype:i,filesize:_,url:a})})),b(e)}),[t,r,_,u]),console.log("Audio data +: ",O),Object(o.useEffect)((function(){var e=[];console.log("final array",e),p>0&&O.length>0&&c.map((function(t){var r=t.attributes,n=r.title,o=r.field_music_body,a=t.relationships.field_music_audio.data;e.push({id:t.id,title:n,body:o.processed,data:m(a,O)})})),E(e)}),[O,c,p]),console.log("view Data",P,"vlength ",P.length),console.log("view data type: ",typeof P),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Music Page"}),P.length>0&&P.map((function(e){var t=e.id,r=e.title,n=e.body,o=e.data;return Object(l.jsxs)("div",{className:"m-5 p-3",children:[Object(l.jsx)("h2",{className:"my-2",children:r}),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:n}}),console.log(typeof o),console.log(o),Object(l.jsx)("ul",{className:"m-5 border p-4",children:s({data:o})})]},t)}))]})}}}]);
//# sourceMappingURL=10.effeac73.chunk.js.map