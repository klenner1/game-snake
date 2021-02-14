(()=>{var t={506:t=>{t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},575:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},913:t=>{function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}},713:t=>{t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},525:(t,e,n)=>{var i=n(331);function o(e,n,r){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=o=Reflect.get:t.exports=o=function(t,e,n){var o=i(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}},o(e,n,r||e)}t.exports=o},754:t=>{function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},205:(t,e,n)=>{var i=n(489);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},585:(t,e,n)=>{var i=n(8),o=n(506);t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?o(t):e}},489:t=>{function e(n,i){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,i)}t.exports=e},331:(t,e,n)=>{var i=n(754);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}},8:t=>{function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},467:t=>{t.exports='<header> <div class="content-center"> <h1>Snake</h1> </div> </header> <section> <div class="game-container content-center"> <canvas id="game"></canvas> <div class="score"> <p id="score">0xp</p> </div> </div> </section>'}},e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(575),e=n.n(t),i=n(913),o=n.n(i),r=n(506),c=n.n(r),s=n(205),a=n.n(s),u=n(585),h=n.n(u),f=n(754),l=n.n(f),p=n(713),v=n.n(p),y=function(){function t(n){e()(this,t),this.parent=n}return o()(t,[{key:"render",value:function(t){this.parent.innerHTML=t}}]),t}(),d=n(525),w=n.n(d);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}var k,x=function(){function t(){e()(this,t)}return o()(t,null,[{key:"clone",value:function(t){var e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){v()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t);return e.__proto__=t.__proto__,e}}]),t}();!function(t){t[t.stop=0]="stop",t[t.Up=1]="Up",t[t.Down=2]="Down",t[t.Left=3]="Left",t[t.Right=4]="Right"}(k||(k={}));var b=function(){function t(n,i){e()(this,t),this.position=n,this.size=i}return o()(t,[{key:"moveTo",value:function(t,e){switch(this.movingTo=t,t){case k.Up:this.position.y-=e;break;case k.Down:this.position.y+=e;break;case k.Left:this.position.x-=e;break;case k.Right:this.position.x+=e}}},{key:"goTo",value:function(t){this.position=x.clone(t)}},{key:"touch",value:function(t){return this.position.equals(t)}},{key:"toView",value:function(t){t.fillRect(this.position.x,this.position.y,this.size,this.size)}}]),t}();var m=function(t){a()(c,t);var n,i,r=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l()(n);if(i){var o=l()(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return h()(this,t)});function c(){return e()(this,c),r.apply(this,arguments)}return o()(c,[{key:"isInCanvas",value:function(t){var e=this.position.x,n=this.position.y,i=t.width-this.size,o=t.height-this.size;(e<0||e>i||n<0||n>o)&&this.OnTouchMargin()}},{key:"nextMovement",value:function(t,e){var n,i;return this.isInCanvas(t),this.position.x%this.size==0&&this.position.y%this.size==0&&this.nextDirection&&(this.rear&&(this.rear.nextDirection=this.direction),this.direction=this.nextDirection),this.next(e,!1),null===(n=this.rear)||void 0===n||n.next(e,!0),!this.touchBody()||(null===(i=this.OnTouchBody)||void 0===i||i.call(this),!1)}},{key:"drawHead",value:function(t,e){var n;null===(n=this.rear)||void 0===n||n.draw(e),e.fillStyle="#FF0000",this.toView(e)}},{key:"touchBody",value:function(){var t,e;return this.touch(null===(t=this.rear)||void 0===t?void 0:t.position)&&this.direction!==k.stop||(null===(e=this.rear)||void 0===e?void 0:e.touchHead(this.position))}}]),c}(function(t){a()(c,t);var n,i,r=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l()(n);if(i){var o=l()(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return h()(this,t)});function c(t,n,i,o){var s;return e()(this,c),(s=r.call(this,t,n)).direction=i,s.index=o,s.countChangeDirection=s.size,s}return o()(c,[{key:"addRear",value:function(){this.rear?this.rear.addRear():this.rear=new c(x.clone(this.position),this.size,k.stop,this.index+1)}},{key:"next",value:function(t,e){var n,i=this.size%t;i>=this.countChangeDirection&&(t=i),this.moveTo(this.direction,t),"Head"===this.constructor.name&&this.direction===k.stop||(this.countChangeDirection-=t),0===this.countChangeDirection&&(this.rear&&(this.rear.nextDirection=this.direction),this.direction=this.nextDirection,this.countChangeDirection=this.size),e&&(null===(n=this.rear)||void 0===n||n.next(t,!0))}},{key:"moveTo",value:function(t,e){this.direction!==k.stop&&w()(l()(c.prototype),"moveTo",this).call(this,t,e)}},{key:"draw",value:function(t){var e;t.fillStyle="#0F0FFF",this.toView(t),null===(e=this.rear)||void 0===e||e.draw(t)}},{key:"touchHead",value:function(t){var e;return this.touch(t)||(null===(e=this.rear)||void 0===e?void 0:e.touchHead(t))}}]),c}(b)),D=function t(n,i){e()(this,t),this.size=i,this.head=new m(n,this.size,k.stop,0)},O=function(){function t(n,i){e()(this,t),this.x=n,this.y=i}return o()(t,[{key:"equals",value:function(t){return this.x===(null==t?void 0:t.x)&&this.y===(null==t?void 0:t.y)}}]),t}();var S=function(t){a()(c,t);var n,i,r=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l()(n);if(i){var o=l()(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return h()(this,t)});function c(){return e()(this,c),r.apply(this,arguments)}return o()(c,[{key:"draw",value:function(t){t.fillStyle="#FFF000",w()(l()(c.prototype),"toView",this).call(this,t)}},{key:"move",value:function(t,e){var n=Math.random()*t;n-=n%this.size;var i=Math.random()*e;i-=i%this.size,this.goTo(new O(n,i))}}]),c}(b);new(function(t){a()(u,t);var i,r,s=(i=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l()(i);if(r){var n=l()(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h()(this,t)});function u(){var t;e()(this,u);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t=s.call.apply(s,[this].concat(i)),v()(c()(t),"touchstartPosition",new O(0,0)),v()(c()(t),"blockSize",50),v()(c()(t),"canDrawInLoop",!1),v()(c()(t),"StepSize",2),v()(c()(t),"Score",0),v()(c()(t),"Delay",10),v()(c()(t),"ArrowLeft",(function(){return t.ChangeDirection(k.Left,k.Right)})),v()(c()(t),"ArrowRight",(function(){return t.ChangeDirection(k.Right,k.Left)})),v()(c()(t),"ArrowUp",(function(){return t.ChangeDirection(k.Up,k.Down)})),v()(c()(t),"ArrowDown",(function(){return t.ChangeDirection(k.Down,k.Up)})),v()(c()(t),"GameOver",(function(){t.canDrawInLoop=!1,t.initSnake(),t.Draw(),t.Score=0,t.updateScore()})),t}return o()(u,[{key:"init",value:function(){var t=n(467);this.render(t),this.canvas=document.getElementById("game"),this.context=this.canvas.getContext("2d"),this.scoreElement=document.getElementById("score"),this.Resize(),this.initSnake(),this.fruit=new S(new O(200,200),this.blockSize),this.DrawInLoop(),this.Draw(),this.Events()}},{key:"initSnake",value:function(){this.snake=new D(new O(0,0),this.blockSize),this.snake.head.OnTouchMargin=this.GameOver}},{key:"Draw",value:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.touch(),this.snake.head.nextMovement(this.canvas,this.StepSize)?this.snake.head.drawHead(this.canvas,this.context):this.GameOver(),this.fruit.draw(this.context)}},{key:"DrawInLoop",value:function(){var t=this;this.canDrawInLoop&&this.Draw(),setTimeout((function(){t.DrawInLoop()}),this.Delay)}},{key:"Resize",value:function(){document.getElementsByTagName("body")[0].setAttribute("style","max-height: ".concat(window.innerHeight,"px"));var t=document.querySelector(".game-container"),e=t.offsetHeight,n=t.offsetWidth;this.canvas.height=e-e%this.blockSize,this.canvas.width=n-n%this.blockSize}},{key:"Events",value:function(){var t=this;window.addEventListener("resize",(function(e){t.Resize()})),window.addEventListener("keydown",(function(e){t.keydown(e)})),window.addEventListener("touchstart",(function(e){t.touchstart(e)})),window.addEventListener("touchend",(function(e){t.touchend(e)}))}},{key:"touchstart",value:function(t){var e=t.touches[0].clientX,n=t.touches[0].clientY;this.touchstartPosition=new O(e,n)}},{key:"touchend",value:function(t){var e=t.changedTouches[0].clientX,n=t.changedTouches[0].clientY,i=this.touchstartPosition,o=new O(e,n),r=i.x-o.x,c=i.y-o.y;Math.abs(r)>Math.abs(c)?r<-1?this.ArrowRight():r>1&&this.ArrowLeft():c>1?this.ArrowUp():c<-1&&this.ArrowDown()}},{key:"keydown",value:function(t){var e=this[t.key];e&&e()}},{key:"ChangeDirection",value:function(t,e){var n=this.snake.head.direction;this.canDrawInLoop=!0,n!==e&&(this.snake.head.nextDirection=t)}},{key:"touch",value:function(){this.snake.head.position.equals(this.fruit.position)&&(this.fruit.move(this.canvas.width,this.canvas.height),this.snake.head.addRear(),this.Score++,this.updateScore())}},{key:"updateScore",value:function(){var t=this.Score/4;this.Delay=-1*Math.ceil(t-10*Math.ceil((t+1)/10)),this.StepSize=this.Delay<=5?1:2,this.scoreElement.textContent="".concat(this.Score,"XP")}}]),u}(y))(document.getElementById("base")).init(),"serviceWorker"in navigator&&navigator.serviceWorker.register(document.location.pathname+"sw.js").then((function(t){return console.log("Service Worker registration complete, scope: '".concat(t.scope,"'"),t)})).catch((function(t){return console.log("Service Worker registration failed with error: '".concat(t,"'"),t)}))})()})();
//# sourceMappingURL=main.js.map