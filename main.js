"use strict";
exports.__esModule = true;
require("./index.scss");
require("./manifest.json");
var game_1 = require("./Views/Game/game");
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
            console.log('SW registered: ', registration);
        })["catch"](function (registrationError) {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
var base = document.getElementById('base');
var game = new game_1.Game(base);
game.init();
