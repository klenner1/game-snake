if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-7c877640"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/icon/icon-144x144.png",revision:"6c6ed5765785af9550059303a60082bb"},{url:"assets/icon/icon-256x256.png",revision:"6b68460078d95e9d79248605b0cea8bd"},{url:"assets/icon/icon-512x512.png",revision:"e9084ec2cdef5d81456968d91c8ce230"},{url:"assets/icon/icon-72x72.png",revision:"9177275ab4be1fb440b47dfe27d4eafb"},{url:"bundle.js",revision:"75fc47870ad94b3552e21f05ea06319d"},{url:"favicon.ico",revision:"3dbfd96f89ea842e4123eae8a4381d26"},{url:"manifest.json",revision:"c4b65f9271dd9b935993e8949241161b"},{url:"style.css",revision:"aa2d3419f32543892ec07d017e124b1a"}],{})}));
//# sourceMappingURL=service-worker.js.map
