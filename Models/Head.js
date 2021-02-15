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
exports.Head = void 0;
var BodyPart_1 = require("./BodyPart");
var Direction_1 = require("../Enums/Direction");
var Head = (function (_super) {
    __extends(Head, _super);
    function Head() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Head.prototype.isInCanvas = function (canvas) {
        var x = this.position.x;
        var y = this.position.y;
        var maxX = canvas.width - this.size;
        var maxY = canvas.height - this.size;
        if (x < 0 || x > maxX || y < 0 || y > maxY) {
            this.OnTouchMargin();
        }
    };
    Head.prototype.nextMovement = function (canvas, stepSize) {
        var _a, _b;
        this.isInCanvas(canvas);
        if (this.position.x % this.size === 0 && this.position.y % this.size === 0 && this.nextDirection) {
            if (this.rear) {
                this.rear.nextDirection = this.direction;
            }
            this.direction = this.nextDirection;
        }
        this.next(stepSize, false);
        (_a = this.rear) === null || _a === void 0 ? void 0 : _a.next(stepSize, true);
        if (this.touchBody()) {
            (_b = this.OnTouchBody) === null || _b === void 0 ? void 0 : _b.call(this);
            return false;
        }
        return true;
    };
    Head.prototype.drawHead = function (canvas, context, move) {
        var _a;
        if (move === void 0) { move = true; }
        (_a = this.rear) === null || _a === void 0 ? void 0 : _a.draw(context);
        context.fillStyle = '#FF0000';
        this.toView(context);
    };
    Head.prototype.touchBody = function () {
        var _a, _b;
        return (this.touch((_a = this.rear) === null || _a === void 0 ? void 0 : _a.position) && this.direction !== Direction_1.Direction.stop) || ((_b = this.rear) === null || _b === void 0 ? void 0 : _b.touchHead(this.position));
    };
    return Head;
}(BodyPart_1.BodyPart));
exports.Head = Head;
