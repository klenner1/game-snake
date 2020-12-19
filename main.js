"use strict";
exports.__esModule = true;
require("./index.scss");
var game_1 = require("./Views/Game/game");
var base = document.getElementById('base');
var game = new game_1.Game(base);
game.init();
