!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("CAAS_AOLCOM",[],e):"object"==typeof exports?exports.CAAS_AOLCOM=e():t.CAAS_AOLCOM=e()}(self,(function(){return function(){var t={95012:function(t,e,r){function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,o){var n=e&&e.prototype instanceof v?e:v,a=Object.create(n.prototype),s=new S(o||[]);return i(a,"_invoke",{value:j(t,r,s)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var y="suspendedStart",p="suspendedYield",d="executing",b="completed",m={};function v(){}function w(){}function g(){}var E={};f(E,s,(function(){return this}));var _=Object.getPrototypeOf,x=_&&_(_(R([])));x&&x!==r&&n.call(x,s)&&(E=x);var A=g.prototype=v.prototype=Object.create(E);function T(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(i,a,s,u){var c=l(t[i],t,a);if("throw"!==c.type){var f=c.arg,h=f.value;return h&&"object"===o(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,s,u)}),(function(t){r("throw",t,s,u)})):e.resolve(h).then((function(t){f.value=t,s(f)}),(function(t){return r("throw",t,s,u)}))}u(c.arg)}var a;i(this,"_invoke",{value:function(t,o){function n(){return new e((function(e,n){r(t,o,e,n)}))}return a=a?a.then(n,n):n()}})}function j(t,e,r){var o=y;return function(n,i){if(o===d)throw new Error("Generator is already running");if(o===b){if("throw"===n)throw i;return U()}for(r.method=n,r.arg=i;;){var a=r.delegate;if(a){var s=L(a,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===y)throw o=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var u=l(t,e,r);if("normal"===u.type){if(o=r.done?b:p,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=b,r.method="throw",r.arg=u.arg)}}}function L(t,r){var o=r.method,n=t.iterator[o];if(n===e)return r.delegate=null,"throw"===o&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),m;var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function R(t){if(t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:U}}function U(){return{value:e,done:!0}}return w.prototype=g,i(A,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:w,configurable:!0}),w.displayName=f(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,c,"GeneratorFunction")),t.prototype=Object.create(A),t},t.awrap=function(t){return{__await:t}},T(O.prototype),f(O.prototype,u,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,o,n,i){void 0===i&&(i=Promise);var a=new O(h(e,r,o,n),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},T(A),f(A,c,"Generator"),f(A,s,(function(){return this})),f(A,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=R,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(o,n){return s.type="throw",s.arg=t,r.next=o,n&&(r.method="next",r.arg=e),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;P(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:R(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),m}},t}("object"===o(t=r.nmd(t))?t.exports:{});try{regeneratorRuntime=n}catch(t){"object"===("undefined"==typeof globalThis?"undefined":o(globalThis))?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},68808:function(t,e,r){"use strict";function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}r.r(e),r.d(e,{DOMException:function(){return _},Headers:function(){return h},Request:function(){return v},Response:function(){return g},fetch:function(){return x}});var n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==r.g&&r.g||{},i={searchParams:"URLSearchParams"in n,iterable:"Symbol"in n&&"iterator"in Symbol,blob:"FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in n,arrayBuffer:"ArrayBuffer"in n};if(i.arrayBuffer)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function c(t){return"string"!=typeof t&&(t=String(t)),t}function f(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return i.iterable&&(e[Symbol.iterator]=function(){return e}),e}function h(t){this.map={},t instanceof h?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){if(2!=t.length)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+t.length);this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function l(t){if(!t._noBody)return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function y(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function p(t){var e=new FileReader,r=y(e);return e.readAsArrayBuffer(t),r}function d(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:i.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:i.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():i.arrayBuffer&&i.blob&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=d(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||s(t))?this._bodyArrayBuffer=d(t):this._bodyText=t=Object.prototype.toString.call(t):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):i.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer)return l(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer));if(i.blob)return this.blob().then(p);throw new Error("could not read as ArrayBuffer")},this.text=function(){var t,e,r,o,n,i=l(this);if(i)return i;if(this._bodyBlob)return t=this._bodyBlob,r=y(e=new FileReader),n=(o=/charset=([A-Za-z0-9_-]+)/.exec(t.type))?o[1]:"utf-8",e.readAsText(t,n),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i.formData&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=u(t),e=c(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},h.prototype.delete=function(t){delete this.map[u(t)]},h.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},h.prototype.set=function(t,e){this.map[u(t)]=c(e)},h.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},h.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),f(t)},h.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),f(t)},h.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),f(t)},i.iterable&&(h.prototype[Symbol.iterator]=h.prototype.entries);var m=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function v(t,e){if(!(this instanceof v))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,i=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,i||null==t._bodyInit||(i=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=(o=(r=e.method||this.method||"GET").toUpperCase(),m.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal||function(){if("AbortController"in n)return(new AbortController).signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(i),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var a=/([?&])_=[^&]*/;a.test(this.url)?this.url=this.url.replace(a,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function w(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function g(t,e){if(!(this instanceof g))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},b.call(v.prototype),b.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:200,statusText:""});return t.ok=!1,t.status=0,t.type="error",t};var E=[301,302,303,307,308];g.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})};var _=n.DOMException;try{new _}catch(t){(_=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),_.prototype.constructor=_}function x(t,e){return new Promise((function(r,a){var s=new v(t,e);if(s.signal&&s.signal.aborted)return a(new _("Aborted","AbortError"));var f=new XMLHttpRequest;function l(){f.abort()}if(f.onload=function(){var t,e,o={statusText:f.statusText,headers:(t=f.getAllResponseHeaders()||"",e=new h,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();try{e.append(o,n)}catch(t){console.warn("Response "+t.message)}}})),e)};0===s.url.indexOf("file://")&&(f.status<200||f.status>599)?o.status=200:o.status=f.status,o.url="responseURL"in f?f.responseURL:o.headers.get("X-Request-URL");var n="response"in f?f.response:f.responseText;setTimeout((function(){r(new g(n,o))}),0)},f.onerror=function(){setTimeout((function(){a(new TypeError("Network request failed"))}),0)},f.ontimeout=function(){setTimeout((function(){a(new TypeError("Network request timed out"))}),0)},f.onabort=function(){setTimeout((function(){a(new _("Aborted","AbortError"))}),0)},f.open(s.method,function(t){try{return""===t&&n.location.href?n.location.href:t}catch(e){return t}}(s.url),!0),"include"===s.credentials?f.withCredentials=!0:"omit"===s.credentials&&(f.withCredentials=!1),"responseType"in f&&(i.blob?f.responseType="blob":i.arrayBuffer&&(f.responseType="arraybuffer")),e&&"object"===o(e.headers)&&!(e.headers instanceof h||n.Headers&&e.headers instanceof n.Headers)){var y=[];Object.getOwnPropertyNames(e.headers).forEach((function(t){y.push(u(t)),f.setRequestHeader(t,c(e.headers[t]))})),s.headers.forEach((function(t,e){-1===y.indexOf(e)&&f.setRequestHeader(e,t)}))}else s.headers.forEach((function(t,e){f.setRequestHeader(e,t)}));s.signal&&(s.signal.addEventListener("abort",l),f.onreadystatechange=function(){4===f.readyState&&s.signal.removeEventListener("abort",l)}),f.send(void 0===s._bodyInit?null:s._bodyInit)}))}x.polyfill=!0,n.fetch||(n.fetch=x,n.Headers=h,n.Request=v,n.Response=g)},51181:function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(Element.prototype.matches.call(e,t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null})},88692:function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var r=0;r<this.length;r++)t.call(e,this[r],r,this)})},25328:function(){"isConnected"in Node.prototype||Object.defineProperty(Node.prototype,"isConnected",{get:function(){return document.contains(this)}})}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={id:o,loaded:!1,exports:{}};return t[o](i,i.exports,r),i.loaded=!0,i.exports}return r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},r(88692),r(51181),r(25328),r(95012),r(68808)}()}));
//# sourceMappingURL=polyfills.js.map