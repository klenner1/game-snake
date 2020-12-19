"use strict";
exports.__esModule = true;
exports.Snake = void 0;
var Head_1 = require("./Head");
var Snake = (function () {
    function Snake(position) {
        this.size = 50;
        this.head = new Head_1.Head(position, this.size);
    }
    return Snake;
}());
exports.Snake = Snake;
