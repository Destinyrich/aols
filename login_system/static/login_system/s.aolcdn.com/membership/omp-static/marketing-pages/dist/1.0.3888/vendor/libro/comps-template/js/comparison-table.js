this.LIBRO=this.LIBRO||{},this.LIBRO.comparisonTable=function(t){"use strict";var e,n="comparison-table__column--expand";function o(){for(var e,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];t.store.debug&&(e=t.logger.tag("comparison-table")).info.apply(e,function(t,e,n){if(n||2===arguments.length)for(var o,i=0,a=e.length;i<a;i++)!o&&i in e||(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}([],function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,i,a=n.call(t),r=[];try{for(;(void 0===e||e-- >0)&&!(o=a.next()).done;)r.push(o.value)}catch(t){i={error:t}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return r}(n),!1))}function i(){t.dom.equalHeights(".comparison-table__row"),window.innerWidth>768?t.dom.equalHeights(".comparison-table__header"):t.dom.applyFunction(".comparison-table__header",(function(t){return t.setAttribute("style","height: auto")}))}var a=t.dom.throttle((function(){if(window.innerWidth>768){var n,i,a=void 0,r=t.dom.getElement(".comparison-table__column__features > div:last-child");r&&(i=3*r.getBoundingClientRect().height);var c=t.dom.getElement(".header"),l=t.dom.getElement(".comparison-table");c&&(n=c.getBoundingClientRect().height),l&&(a=l.getBoundingClientRect().top),a<=n?t.dom.applyFunction(".comparison-table__header",(function(t){t.classList.add("comparison-table--sticky"),t.setAttribute("style","top:".concat(n,"px; height: ").concat(e,"px;"))})):t.dom.applyFunction(".comparison-table__header",(function(t){t.classList.remove("comparison-table--sticky"),t.setAttribute("style","height: ".concat(e,"px; margin-bottom:0;"))}));try{l&&(window.scrollY>l.getBoundingClientRect().height+300?t.dom.applyFunction(".comparison-table__header",(function(t){return t.setAttribute("style","top:".concat(n,"px; height: ").concat(e,"px; margin-bottom:").concat(i,"px;"))})):t.dom.applyFunction(".comparison-table__header",(function(t){return t.setAttribute("style","top:".concat(n,"px; height: ").concat(e,"px; margin-bottom:0;"))})))}catch(t){o(t)}}}),10);function r(){var n=t.dom.getElements(".comparison-table__row--action");if(i(),t.dom.addListener(n,"click",c),window.addEventListener("resize",i),t.dom.getElement(".comparison-table")){var o=t.dom.getElement(".comparison-table__header");o&&(e=o.getBoundingClientRect().height),window.addEventListener("scroll",a),window.addEventListener("resize",a)}t.store.once("PAGE_LOADED",s),t.store.once("URL_DATA",l)}function c(e){e.preventDefault(),t.dom.toggleClass(e.currentTarget.parentElement,n,!t.dom.hasClass(e.currentTarget.parentElement,n))}function l(e){o("Handling %s content: %s","URL_DATA",e);try{t.dom.appendQueryParams(".comparison-table .button","href",e)}catch(t){o(t)}}function s(){o("Handling %s event","PAGE_LOADED");try{t.rapid.initializeViewabilityTracking("#comparison-table","comparison-table")}catch(t){o(t)}}return r(),t.store.once("SUBSCRIPTION_CONTENT",(function(e){o("Handling %s content: %s","SUBSCRIPTION_CONTENT",e);try{"comparison-table"in e&&(i=(n=e["comparison-table"]).find((function(t){return void 0===t._id})),a=n.filter((function(t){return void 0!==t._id})),r=n.some((function(t){return t.cta_action&&"switch"===t.cta_action})),t.updateGenericButton(".comparison-table .comparison-table__header",i),a.length>0&&a.forEach((function(e){return t.updateGenericButton('.comparison-table .comparison-table__column[data-id="'.concat(e._id,'"] .comparison-table__header'),e)})),r&&t.dom.addListener(".comparison-table .comparison-table__header","click",(function(e){t.dom.isInside(e.target,'.button[data-action="switch"]')&&(e.preventDefault(),t.store.showSwitchLightbox())})))}catch(t){o(t)}var n,i,a,r})),{init:r}}(LIBRO.common);