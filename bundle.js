(()=>{var t={467:t=>{t.exports='<header> <div class="content-center"> <h1>Snake</h1> </div> </header> <section> <div class="game-container content-center"> <canvas id="game"></canvas> </div> </section>'}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t}var n,r;return n=e,(r=[{key:"render",value:function(t){this.parent.innerHTML=t}}])&&t(n.prototype,r),e}();function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"clone",value:function(t){var e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t);return e.__proto__=t.__proto__,e}}],null&&i(e.prototype,null),n&&i(e,n),t}();function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"clone",value:function(t){var e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t);return e.__proto__=t.__proto__,e}}],null&&s(e.prototype,null),n&&s(e,n),t}();function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.position=e,this.size=n}var e,n;return e=t,(n=[{key:"moveTo",value:function(t){this.position=f.clone(t)}},{key:"touch",value:function(t){return this.position.equals(t)}},{key:"toView",value:function(t){t.fillRect(this.position.x,this.position.y,this.size,this.size)}}])&&l(e.prototype,n),t}();function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var O,m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function u(){return y(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"addRear",value:function(){this.rear?this.rear.addRear():this.rear=new u(c.clone(this.position),this.size)}},{key:"moveTo",value:function(t){var e;null===(e=this.rear)||void 0===e||e.moveTo(this.position),b(g(u.prototype),"moveTo",this).call(this,t)}},{key:"draw",value:function(t){var e;t.fillStyle="#0F0FFF",this.toView(t),null===(e=this.rear)||void 0===e||e.draw(t)}},{key:"touchHead",value:function(t){var e;return this.touch(t)||(null===(e=this.rear)||void 0===e?void 0:e.touchHead(t))}}])&&v(e.prototype,n),u}(h);function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function R(t,e){return!e||"object"!==k(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function(t){t[t.Up=0]="Up",t[t.Down=1]="Down",t[t.Left=2]="Left",t[t.Right=3]="Right"}(O||(O={}));var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(c,t);var e,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return R(this,t)});function c(){return j(this,c),i.apply(this,arguments)}return e=c,(n=[{key:"Left",value:function(){this.position.x>0?this.position.x=this.position.x-this.size:this.OnTouchMargin(),this.direcao=O.Left}},{key:"Right",value:function(t){this.position.x<t-this.size?this.position.x=this.position.x+this.size:this.OnTouchMargin(),this.direcao=O.Right}},{key:"Up",value:function(){this.position.y>0?this.position.y=this.position.y-this.size:this.OnTouchMargin(),this.direcao=O.Up}},{key:"Down",value:function(t){this.position.y<t-this.size?this.position.y=this.position.y+this.size:this.OnTouchMargin(),this.direcao=O.Down}},{key:"next",value:function(t){var e,n;switch(null===(e=this.rear)||void 0===e||e.moveTo(Object.assign(this.position)),null!=this.nextDirecao?this.nextDirecao:this.direcao){case O.Left:this.Left();break;case O.Right:this.Right(t.width);break;case O.Up:this.Up();break;case O.Down:this.Down(t.height)}return this.nextDirecao=null,!this.touchBody()||(null===(n=this.OnTouchBody)||void 0===n||n.call(this),!1)}},{key:"drawHead",value:function(t,e){var n;null===(n=this.rear)||void 0===n||n.draw(e),e.fillStyle="#FF0000",this.toView(e)}},{key:"touchBody",value:function(){var t,e;return this.touch(null===(t=this.rear)||void 0===t?void 0:t.position)||(null===(e=this.rear)||void 0===e?void 0:e.touchHead(this.position))}}])&&P(e.prototype,n),c}(m),x=function t(e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),(n="size")in this?Object.defineProperty(this,n,{value:50,enumerable:!0,configurable:!0,writable:!0}):this.size=50,this.head=new S(e,this.size)};function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var T=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n}var e,n;return e=t,(n=[{key:"equals",value:function(t){return this.x===(null==t?void 0:t.x)&&this.y===(null==t?void 0:t.y)}}])&&E(e.prototype,n),t}();function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t,e,n){return(A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function H(t,e){return(H=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function M(t,e){return!e||"object"!==L(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&H(t,e)}(c,t);var e,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(r);if(o){var n=U(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return M(this,t)});function c(){return z(this,c),i.apply(this,arguments)}return e=c,(n=[{key:"draw",value:function(t){t.fillStyle="#FFF000",A(U(c.prototype),"toView",this).call(this,t)}},{key:"move",value:function(t,e){var n=Math.random()*t;n-=n%this.size;var r=Math.random()*e;r-=r%this.size,this.moveTo(new T(n,r))}}])&&C(e.prototype,n),c}(h);function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function q(t,e){return(q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function V(t,e){return!e||"object"!==I(e)&&"function"!=typeof e?G(t):e}function G(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function X(t){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&q(t,e)}(u,t);var e,r,o,i,c=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=X(o);if(i){var n=X(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return V(this,t)});function u(){var t;B(this,u);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Y(G(t=c.call.apply(c,[this].concat(n))),"touchstartPosition",new T(0,0)),Y(G(t),"blockSize",50),Y(G(t),"canDrawInLoop",!1),Y(G(t),"step",50),Y(G(t),"ArrowLeft",(function(){return t.ChangeDirection(O.Left,O.Right)})),Y(G(t),"ArrowRight",(function(){return t.ChangeDirection(O.Right,O.Left)})),Y(G(t),"ArrowUp",(function(){return t.ChangeDirection(O.Up,O.Down)})),Y(G(t),"ArrowDown",(function(){return t.ChangeDirection(O.Down,O.Up)})),Y(G(t),"GameOver",(function(){t.canDrawInLoop=!1,t.initSnake(),t.Draw()})),t}return e=u,(r=[{key:"init",value:function(){var t=n(467);this.render(t),this.canvas=document.getElementById("game"),this.context=this.canvas.getContext("2d"),this.Resize(),this.initSnake(),this.fruit=new F(new T(200,200),50),this.DrawInLoop(),this.Draw(),this.Events()}},{key:"initSnake",value:function(){this.snake=new x(new T(0,0)),this.snake.head.OnTouchMargin=this.GameOver}},{key:"Draw",value:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.touch(),this.snake.head.next(this.canvas)?this.snake.head.drawHead(this.canvas,this.context):this.GameOver(),this.fruit.draw(this.context)}},{key:"DrawInLoop",value:function(){var t=this;this.canDrawInLoop&&this.Draw(),setTimeout((function(){t.DrawInLoop()}),100)}},{key:"Resize",value:function(){var t=document.documentElement.offsetHeight-document.documentElement.clientHeight;document.getElementsByTagName("body")[0].setAttribute("max-height",(window.innerHeight-t).toString());var e=document.querySelector(".game-container"),n=e.offsetHeight,r=e.offsetWidth;this.canvas.height=n-n%this.blockSize,this.canvas.width=r-r%this.blockSize}},{key:"Events",value:function(){var t=this;window.addEventListener("resize",(function(e){t.Resize()})),window.addEventListener("keydown",(function(e){t.keydown(e)})),window.addEventListener("touchstart",(function(e){t.touchstart(e)})),window.addEventListener("touchend",(function(e){t.touchend(e)}))}},{key:"touchstart",value:function(t){var e=t.touches[0].clientX,n=t.touches[0].clientY;this.touchstartPosition=new T(e,n)}},{key:"touchend",value:function(t){var e=t.changedTouches[0].clientX,n=t.changedTouches[0].clientY,r=this.touchstartPosition,o=new T(e,n),i=r.x-o.x,c=r.y-o.y;Math.abs(i)>Math.abs(c)?i<-1?this.ArrowRight():i>1&&this.ArrowLeft():c>1?this.ArrowUp():c<-1&&this.ArrowDown()}},{key:"keydown",value:function(t){var e=this[t.key];e&&e()}},{key:"ChangeDirection",value:function(t,e){var n=this.snake.head.direcao;this.canDrawInLoop=!0,n!==e&&(this.snake.head.nextDirecao=t)}},{key:"touch",value:function(){this.snake.head.position.equals(this.fruit.position)&&(this.fruit.move(this.canvas.width,this.canvas.height),this.snake.head.addRear())}}])&&W(e.prototype,r),u}(e);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(t){console.log("SW registered: ",t)})).catch((function(t){console.log("SW registration failed: ",t)}))})),new N(document.getElementById("base")).init()})()})();
//# sourceMappingURL=bundle.js.map