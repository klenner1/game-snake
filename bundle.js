(()=>{var t={467:t=>{t.exports='<header> <div class="content-center"> <h1>Snake</h1> </div> </header> <section> <div class="game-container content-center"> <canvas id="game"></canvas> </div> </section>'}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var e=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t}var n,o;return n=e,(o=[{key:"render",value:function(t){this.parent.innerHTML=t}}])&&t(n.prototype,o),e}();function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"clone",value:function(t){var e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t);return e.__proto__=t.__proto__,e}}],null&&i(e.prototype,null),n&&i(e,n),t}();function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.position=e,this.size=n}var e,n;return e=t,(n=[{key:"moveTo",value:function(t){this.position=c.clone(t)}},{key:"touch",value:function(t){return this.position.equals(t)}},{key:"toView",value:function(t){t.fillRect(this.position.x,this.position.y,this.size,this.size)}}])&&u(e.prototype,n),t}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,e,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b,d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(o);if(r){var n=v(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return y(this,t)});function u(){return f(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"addRear",value:function(){this.rear?this.rear.addRear():this.rear=new u(c.clone(this.position),this.size)}},{key:"moveTo",value:function(t){var e;null===(e=this.rear)||void 0===e||e.moveTo(this.position),h(v(u.prototype),"moveTo",this).call(this,t)}},{key:"draw",value:function(t){var e;t.fillStyle="#0F0FFF",this.toView(t),null===(e=this.rear)||void 0===e||e.draw(t)}},{key:"touchHead",value:function(t){var e;return this.touch(t)||(null===(e=this.rear)||void 0===e?void 0:e.touchHead(t))}}])&&l(e.prototype,n),u}(a);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function(t){t[t.Up=0]="Up",t[t.Down=1]="Down",t[t.Left=2]="Left",t[t.Right=3]="Right"}(b||(b={}));var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(o);if(r){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return k(this,t)});function c(){return g(this,c),i.apply(this,arguments)}return e=c,(n=[{key:"Left",value:function(){this.position.x>0?this.position.x=this.position.x-this.size:this.OnTouchMargin(),this.direcao=b.Left}},{key:"Right",value:function(t){this.position.x<t-this.size?this.position.x=this.position.x+this.size:this.OnTouchMargin(),this.direcao=b.Right}},{key:"Up",value:function(){this.position.y>0?this.position.y=this.position.y-this.size:this.OnTouchMargin(),this.direcao=b.Up}},{key:"Down",value:function(t){this.position.y<t-this.size?this.position.y=this.position.y+this.size:this.OnTouchMargin(),this.direcao=b.Down}},{key:"next",value:function(t){var e,n;switch(null===(e=this.rear)||void 0===e||e.moveTo(Object.assign(this.position)),null!=this.nextDirecao?this.nextDirecao:this.direcao){case b.Left:this.Left();break;case b.Right:this.Right(t.width);break;case b.Up:this.Up();break;case b.Down:this.Down(t.height)}return this.nextDirecao=null,!this.touchBody()||(null===(n=this.OnTouchBody)||void 0===n||n.call(this),!1)}},{key:"drawHead",value:function(t,e){var n;null===(n=this.rear)||void 0===n||n.draw(e),e.fillStyle="#FF0000",this.toView(e)}},{key:"touchBody",value:function(){var t,e;return this.touch(null===(t=this.rear)||void 0===t?void 0:t.position)||(null===(e=this.rear)||void 0===e?void 0:e.touchHead(this.position))}}])&&m(e.prototype,n),c}(d),P=function t(e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),(n="size")in this?Object.defineProperty(this,n,{value:50,enumerable:!0,configurable:!0,writable:!0}):this.size=50,this.head=new R(e,this.size)};function D(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var S=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n}var e,n;return e=t,(n=[{key:"equals",value:function(t){return this.x===(null==t?void 0:t.x)&&this.y===(null==t?void 0:t.y)}}])&&D(e.prototype,n),t}();function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function T(t,e,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function z(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(o);if(r){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return z(this,t)});function c(){return x(this,c),i.apply(this,arguments)}return e=c,(n=[{key:"draw",value:function(t){t.fillStyle="#FFF000",T(C(c.prototype),"toView",this).call(this,t)}},{key:"move",value:function(t,e){var n=Math.random()*t;n-=n%this.size;var o=Math.random()*e;o-=o%this.size,this.moveTo(new S(n,o))}}])&&E(e.prototype,n),c}(a);function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function U(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?B(t):e}function B(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(t){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)}(u,t);var e,o,r,i,c=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=W(r);if(i){var n=W(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return I(this,t)});function u(){var t;M(this,u);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return q(B(t=c.call.apply(c,[this].concat(n))),"touchstartPosition",new S(0,0)),q(B(t),"blockSize",50),q(B(t),"canDrawInLoop",!1),q(B(t),"step",50),q(B(t),"ArrowLeft",(function(){return t.ChangeDirection(b.Left,b.Right)})),q(B(t),"ArrowRight",(function(){return t.ChangeDirection(b.Right,b.Left)})),q(B(t),"ArrowUp",(function(){return t.ChangeDirection(b.Up,b.Down)})),q(B(t),"ArrowDown",(function(){return t.ChangeDirection(b.Down,b.Up)})),q(B(t),"GameOver",(function(){t.canDrawInLoop=!1,t.initSnake(),t.Draw()})),t}return e=u,(o=[{key:"init",value:function(){var t=n(467);this.render(t),this.canvas=document.getElementById("game"),this.context=this.canvas.getContext("2d"),this.Resize(),this.initSnake(),this.fruit=new A(new S(200,200),50),this.DrawInLoop(),this.Draw(),this.Events()}},{key:"initSnake",value:function(){this.snake=new P(new S(0,0)),this.snake.head.OnTouchMargin=this.GameOver}},{key:"Draw",value:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.touch(),this.snake.head.next(this.canvas)?this.snake.head.drawHead(this.canvas,this.context):this.GameOver(),this.fruit.draw(this.context)}},{key:"DrawInLoop",value:function(){var t=this;this.canDrawInLoop&&this.Draw(),setTimeout((function(){t.DrawInLoop()}),100)}},{key:"Resize",value:function(){document.documentElement.offsetHeight,document.documentElement.clientHeight,document.getElementsByTagName("body")[0].setAttribute("style","max-height: ".concat(window.innerHeight,"px"));var t=document.querySelector(".game-container"),e=t.offsetHeight,n=t.offsetWidth;this.canvas.height=e-e%this.blockSize,this.canvas.width=n-n%this.blockSize}},{key:"Events",value:function(){var t=this;window.addEventListener("resize",(function(e){t.Resize()})),window.addEventListener("keydown",(function(e){t.keydown(e)})),window.addEventListener("touchstart",(function(e){t.touchstart(e)})),window.addEventListener("touchend",(function(e){t.touchend(e)}))}},{key:"touchstart",value:function(t){var e=t.touches[0].clientX,n=t.touches[0].clientY;this.touchstartPosition=new S(e,n)}},{key:"touchend",value:function(t){var e=t.changedTouches[0].clientX,n=t.changedTouches[0].clientY,o=this.touchstartPosition,r=new S(e,n),i=o.x-r.x,c=o.y-r.y;Math.abs(i)>Math.abs(c)?i<-1?this.ArrowRight():i>1&&this.ArrowLeft():c>1?this.ArrowUp():c<-1&&this.ArrowDown()}},{key:"keydown",value:function(t){var e=this[t.key];e&&e()}},{key:"ChangeDirection",value:function(t,e){var n=this.snake.head.direcao;this.canDrawInLoop=!0,n!==e&&(this.snake.head.nextDirecao=t)}},{key:"touch",value:function(){this.snake.head.position.equals(this.fruit.position)&&(this.fruit.move(this.canvas.width,this.canvas.height),this.snake.head.addRear())}}])&&U(e.prototype,o),u}(e);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(t){console.log("SW registered: ",t)})).catch((function(t){console.log("SW registration failed: ",t)}))})),new V(document.getElementById("base")).init()})()})();
//# sourceMappingURL=bundle.js.map