this.LIBRO=this.LIBRO||{},this.LIBRO.tierCard=function(t){"use strict";var r="tier-card__column--expand";function n(){for(var r,n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];t.store.debug&&(r=t.logger.tag("hero")).info.apply(r,function(t,r,n){if(n||2===arguments.length)for(var e,o=0,i=r.length;o<i;o++)!e&&o in r||(e||(e=Array.prototype.slice.call(r,0,o)),e[o]=r[o]);return t.concat(e||Array.prototype.slice.call(r))}([],function(t,r){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var e,o,i=n.call(t),a=[];try{for(;(void 0===r||r-- >0)&&!(e=i.next()).done;)a.push(e.value)}catch(t){o={error:t}}finally{try{e&&!e.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}(n),!1))}function e(){t.store.once("PAGE_LOADED",a),t.store.once("URL_DATA",i),t.dom.addListener(".tier-card__row--action","click",o)}function o(n){n.preventDefault(),t.dom.toggleClass(n.currentTarget.parentElement,r,!t.dom.hasClass(n.currentTarget.parentElement,r))}function i(r){n("Handling %s content: %s","URL_DATA",r);try{t.dom.appendQueryParams(".tier-collection .button","href",r)}catch(t){n(t)}}function a(){n("Handling %s event","PAGE_LOADED");try{t.rapid.initializeViewabilityTracking("#comparison-tiles","comparison-tiles")}catch(t){n(t)}}return e(),{init:e}}(LIBRO.common);