"use strict";
exports.__esModule = true;
exports.Snake = void 0;
var Head_1 = require("./Head");
var Direction_1 = require("../Enums/Direction");
var Snake = (function () {
    function Snake(position, size) {
        this.size = size;
        this.head = new Head_1.Head(position, this.size, Direction_1.Direction.stop, 0);
    }
    return Snake;
}());
exports.Snake = Snake;
