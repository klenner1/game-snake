"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Fruit = void 0;
var ElementView_1 = require("./ElementView");
var Position_1 = require("./Position");
var Fruit = (function (_super) {
    __extends(Fruit, _super);
    function Fruit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fruit.prototype.draw = function (context) {
        context.fillStyle = '#FFF000';
        _super.prototype.toView.call(this, context);
    };
    Fruit.prototype.move = function (maxX, maxY) {
        var x = Math.random() * maxX;
        x = x - (x % this.size);
        var y = Math.random() * maxY;
        y = y - (y % this.size);
        this.goTo(new Position_1.Position(x, y));
    };
    return Fruit;
}(ElementView_1.ElementView));
exports.Fruit = Fruit;
