this.LIBRO=this.LIBRO||{},this.LIBRO.heroFigureText=function(t){"use strict";function e(){for(var e,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t.store.debug&&(e=t.logger.tag("hero-figure-text")).info.apply(e,function(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}([],function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}(n),!1))}return t.store.once("PAGE_LOADED",(function(){e("Handling %s event","PAGE_LOADED");try{t.dom.applyFunction(".hero-figure-text",(function(e){var n=e.parentElement.id;n&&t.rapid.initializeViewabilityTracking("#".concat(n),n)}))}catch(t){e(t)}})),t.store.once("USER_DATA",(function(n){e("Handling %s content: %s","USER_DATA",n);var r=n.isAuthenticated;t.displayHiddenDefaultContent(r,["hero-figure-text--is-hidden"])})),t.store.on("URL_DATA",(function(n){e("Handling %s content: %s","URL_DATA",n);try{t.dom.appendQueryParams(".hero-figure-text .button","href",n),t.dom.appendQueryParams(".hero-figure-text a","href",n)}catch(t){e(t)}})),void t.store.once("SUBSCRIPTION_CONTENT",(function(n){e("Handling %s content: %s","SUBSCRIPTION_CONTENT",n);try{"hero-figure-text"in n&&(e("disp hf data %s",n),e("disp updating cta because its in data"),r=n["hero-figure-text"].find((function(t){return void 0===t._id})),e("updateGenericButton wtf"),t.updateGenericButton(".hero-figure-text",r),r&&e("updateGenericButton exists"))}catch(t){e(t)}var r}))}(LIBRO.common);