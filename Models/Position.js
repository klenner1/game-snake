"use strict";
exports.__esModule = true;
exports.Position = void 0;
var Position = (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    Position.prototype.equals = function (position) {
        return this.x === (position === null || position === void 0 ? void 0 : position.x) && this.y === (position === null || position === void 0 ? void 0 : position.y);
    };
    return Position;
}());
exports.Position = Position;
