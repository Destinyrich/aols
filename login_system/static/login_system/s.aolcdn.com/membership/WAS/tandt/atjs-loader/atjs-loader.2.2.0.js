this.LIBRO=this.LIBRO||{},this.LIBRO.atjsLoader=function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function t(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{s(n.next(e))}catch(e){a(e)}}function c(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}s((n=n.apply(e,t||[])).next())}))}function r(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function n(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function o(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var a,i=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=[e[1],[]];e.length>2&&(/%(d|s|o|f)/g.test(String(e[1]))?(r[0]=e[1],r[1]=e.slice(2)):(r[0]="[".concat(e[1],"] ").concat(e[2]),r[1]=e.slice(3))),console[e[0]].apply(null,o([r[0]],n(r[1]),!1))},c=function(e){return e&&e.stack&&e.message},s=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=c(t[0])?t[0]:new Error(String(t[0])),o="string"==typeof t[1]?{description:t[1]}:e({},t[1]);try{"newrelic"in window&&window.newrelic.noticeError(n,o)}catch(e){}},u=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.apply(void 0,o(["info"],n(e),!1))},l=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return s.apply(void 0,o([],n(e),!1))},f=Object.freeze({__proto__:null,info:u,nr:l,tag:function(e){return{info:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return i.apply(void 0,o(["info",e],n(t),!1))}}}});!function(e){e.DEV="dev",e.QA="qa",e.QA5="qa5",e.STAGE="stage",e.PROD="prod"}(a||(a={}));var d=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},h=function(e){return null!=e&&e.constructor===Object},p=function(e,t,r,n){for(var o in void 0===r&&(r=!1),void 0===n&&(n=!1),e)if(d(e,o)&&d(t,o))if(h(e[o]))p(e[o],t[o],r,n);else{var a=t[o];!r||"true"!==a&&"false"!==a||(a="true"===a),n&&"string"==typeof a&&/^[0-9]+(.[0-9]+?)$/.test(a)&&(a=Number(a)),e[o]=a}},v=function(e){for(var t=document.cookie.split(/; ?/),r=0;r<t.length;r++)if(0===t[r].indexOf("".concat(e,"=")))return!0;return!1};function b(e,o,a){return void 0===e&&(e=[]),void 0===o&&(o=100),t(this,void 0,void 0,(function(){return r(this,(function(t){return[2,new Promise((function(t){a&&a('Will check for existence of "%s" cookies and delete',e.join(", "));var r=function(i){void 0===i&&(i=Date.now());var c=Date.now()-i;e.every((function(e){return v(e)}))?(e.forEach((function(e){return t=e,r=new RegExp("".concat(t,"=([^ ]+)")),n(document.cookie.match(r),1),!!v(t)&&(document.cookie="".concat(t,"=; Path=/; Domain=.yahoo.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"),document.cookie="".concat(t,"=; Path=/; Domain=.aol.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"),!0);var t,r})),a&&a("Found cookies and deleted within %sms",c),t(!0)):c>=o?(a&&a('Cookies "'.concat(e.join(", "),'" do not exist, waited for ').concat(o,"ms")),t(!0)):window.setTimeout(r,10,i)};r()}))]}))}))}var g,m=function(e,t){try{if(e.constructor!==t.constructor)return!1;switch(e.constructor){case Object:var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;if(!r.every((function(e){return n.includes(e)})))return!1;for(var o=0;o<r.length;o++){var a=r[o];if(!m(e[a],t[a]))return!1}break;case Array:if(e.length!==t.length)return!1;if(!e.every((function(e){return t.some((function(t){return m(e,t)}))})))return!1;break;default:return e===t}return!0}catch(r){return e===t}},w=function(e){try{for(var t=e.split("."),r=window,n=0;n<t.length;){if(void 0===(r=r[t[n]]))return!1;n++}return!0}catch(e){return!1}},O=function(e,t){return void 0===t&&(t=3e3),new Promise((function(r,n){if(w(e))r(!0);else{var o=function(a){void 0===a&&(a=Date.now());var i=Date.now()-a;w(e)?r(!0):i>=t?n('Error, "'.concat(e,'" does not exist, waited for ').concat(t,"ms")):window.setTimeout(o,10,a)};o()}}))},y=function(e,o,a){return void 0===a&&(a=3e3),new Promise((function(i,c){var s;(s=o?document.getElementById(o):function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=n(2===e.length?e:[document,e[0]],2),o=r[0],a=r[1];return o.querySelector(a)}('[src="'.concat(e,'"]')))?i(!0):((s=document.createElement("script")).setAttribute("src",e),s.setAttribute("id",o),s.onload=function(){return t(void 0,void 0,void 0,(function(){var e;return r(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),o?[4,O(o,a)]:[3,2];case 1:t.sent(),t.label=2;case 2:return i(!0),[3,4];case 3:return e=t.sent(),c(e),[3,4];case 4:return[2]}}))}))},s.onerror=function(){return c("Could not inject script: ".concat(e))},document.head.appendChild(s))}))};!function(e){e.LIBRO_CONFIG_OBJECT="window.LIBRO.config",e.ATJS_LOADER_CONFIG_OBJECT="window.LIBRO.config.atjsLoader",e[e.ADOBE_TARGET_SCRIPT_LOAD_TIMEOUT=2e3]="ADOBE_TARGET_SCRIPT_LOAD_TIMEOUT",e[e.ADOBE_EC_COOKIE_CHECK_TIMEOUT=100]="ADOBE_EC_COOKIE_CHECK_TIMEOUT",e.A1_COOKIE_IDENTIFIER="A1S"}(g||(g={}));var E={adobeOrgId:"6B25357E519160E40A490D44@AdobeOrg",atScriptVersion:"2.6.1-modified"},C={debug:!1,sessionId:null,isReady:!1,errorMessage:!1,isCancelled:!1,atScriptUrl:"https://s.aolcdn.com/membership/WAS/tandt/atjs-loader/vendor/at.{version}.js",visitorApiScriptUrl:"https://s.aolcdn.com/membership/WAS/tandt/visitorapi.min.js",callbacks:new Set,getOfferCalls:new Set};function I(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];C.debug&&u.apply(f,o(["atjs-loader"],n(e),!1))}function _(){return t(this,void 0,void 0,(function(){var e,t,o;return r(this,(function(r){e={sessionId:""};try{I("Fetch A1S cookie"),(t=function(e){try{var t=new RegExp("".concat(e,"=([^;]+)")),r=n(document.cookie.match(t),2)[1];if(r)return r}catch(e){return""}}(g.A1_COOKIE_IDENTIFIER)).length?(I("Got A1S %s",t),o=function(e){for(var t=0,r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r),t|=0;return Math.abs(t).toString()}(t),e.sessionId=o):I("No A1S cookie was returned for user")}catch(e){I("Error, could not find A1S cookie %s, error: %o",e),l(e,"Error, could not find A1S cookie")}return[2,e]}))}))}function A(e){void 0===e&&(e=null),C.isReady=!0,C.errorMessage=e,I(e||"atjsLoader is Ready"),C.callbacks.size>0&&function(e){try{I("Executing callbacks"),C.callbacks.forEach((function(t){return t.fn.call(t.ref,e)})),C.callbacks.clear()}catch(e){I("Error while executing the callbacks %s",e)}}(e)}function x(){return t(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return w("window.adobe.target")?[3,2]:(I("window.adobe.target does not exist, will load %s",C.atScriptUrl),window.targetGlobalSettings={bodyHidingEnabled:!1,viewsEnabled:!1},[4,y(C.atScriptUrl,"window.adobe.target",g.ADOBE_TARGET_SCRIPT_LOAD_TIMEOUT)]);case 1:e.sent(),e.label=2;case 2:return[2,!0]}}))}))}function T(){return C.sessionId}function S(e){var t,r;try{for(var o=function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(C.getOfferCalls.entries()),a=o.next();!a.done;a=o.next()){var i=n(a.value,2)[1];if(m(i,e))return I("getOffer() call with supplied mbox params is not unique %s",i),!1}}catch(e){t={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return!0}function k(n,o){return void 0===o&&(o={}),t(this,void 0,void 0,(function(){var t,a;return r(this,(function(r){try{t={mbox:n.mbox,params:e(e({},n.params),o),success:function(e){!function(e,t){if(t.length>0){var r=t[0];if("setContent"===r.action&&/^xt=/i.test(r.content))return I("Offer returned, it's an xt offer %s",r),void k(e,{xt:r.content.replace("xt=","")});C.getOfferCalls.clear(),e.success(t)}else C.getOfferCalls.clear(),e.success([])}(n,e)},error:function(e,t){!function(e,t,r){C.getOfferCalls.clear(),e.error(t,r);var n="getOffer() error received from Adobe T&T, status: ".concat(t,", error: ").concat(r);I(n),l(n)}(n,e,t)}},S({mbox:n.mbox,params:t.params})?(I("Calling window.adobe.target.getOffer() with mbox params: %s",t.params),i={mbox:n.mbox,params:t.params},C.getOfferCalls.add(i),window.adobe.target.getOffer(t)):(I(a="atjsLoader error: window.adobe.target.getOffer() called multiple times using the same mbox params, check campaign configuration",JSON.stringify({mbox:n.mbox,params:t.params})),l(a,{mbox:n.mbox,params:t.params}),C.getOfferCalls.clear(),n.error("error",a))}catch(e){C.getOfferCalls.clear(),n.success([]),I(e)}var i;return[2]}))}))}function R(e){window.adobe.target.applyOffer(e)}function D(e,t){C.isReady?e.call(t,C.errorMessage):function(e,t){var r=!1;C.callbacks.forEach((function(n){r||n.fn!==e||n.ref!==t||(r=!0,I("Failed to register callback %s, already registered",C.callbacks.size+1))})),r||(C.callbacks.add({fn:e,ref:t}),I("Registered callback %s",C.callbacks.size))}(e,t)}function j(){C.isCancelled=!0}
// name: atjs-loader version: 2.2.0
return function(){t(this,void 0,void 0,(function(){var e,t,a;return r(this,(function(r){switch(r.label){case 0:return w(g.LIBRO_CONFIG_OBJECT)&&window.LIBRO.config.debug&&(C.debug=!0),w(g.ATJS_LOADER_CONFIG_OBJECT)&&p(E,window.LIBRO.config.atjsLoader),C.atScriptUrl=C.atScriptUrl.replace("{version}",E.atScriptVersion),[4,_()];case 1:return e=r.sent().sessionId,t=["mbox"],I("Removing AMCV & mbox cookies"),[4,b(o([],n(t),!1),g.ADOBE_EC_COOKIE_CHECK_TIMEOUT,I)];case 2:if(r.sent(),!e)return[3,7];if(C.isCancelled)return[3,6];C.sessionId=e,r.label=3;case 3:return r.trys.push([3,5,,6]),[4,x()];case 4:return r.sent(),A(),[3,6];case 5:return I(a=r.sent()),A(a),[3,6];case 6:return[3,8];case 7:A("Could not get a valid sessionId"),r.label=8;case 8:return C.isCancelled&&A("An external script cancelled the bootstrap process"),[2]}}))}))}(),{getSessionId:T,done:D,cancel:j,getOffer:k,applyOffer:R}}();
