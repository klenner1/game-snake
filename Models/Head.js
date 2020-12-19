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
var Direcao_1 = require("../Enums/Direcao");
var Head = (function (_super) {
    __extends(Head, _super);
    function Head() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Head.prototype.Left = function () {
        if (this.position.x > 0) {
            this.position.x = this.position.x - this.size;
        }
        else {
            this.OnTouchMargin();
        }
        ;
        this.direcao = Direcao_1.Direcao.Left;
    };
    Head.prototype.Right = function (maxX) {
        if (this.position.x < maxX - this.size) {
            this.position.x = this.position.x + this.size;
        }
        else {
            this.OnTouchMargin();
        }
        this.direcao = Direcao_1.Direcao.Right;
    };
    Head.prototype.Up = function () {
        if (this.position.y > 0) {
            this.position.y = this.position.y - this.size;
        }
        else {
            this.OnTouchMargin();
        }
        this.direcao = Direcao_1.Direcao.Up;
    };
    Head.prototype.Down = function (maxY) {
        if (this.position.y < maxY - this.size) {
            this.position.y = this.position.y + this.size;
        }
        else {
            this.OnTouchMargin();
        }
        this.direcao = Direcao_1.Direcao.Down;
    };
    Head.prototype.next = function (canvas) {
        var _a, _b;
        (_a = this.rear) === null || _a === void 0 ? void 0 : _a.moveTo(Object.assign(this.position));
        switch (this.direcao) {
            case Direcao_1.Direcao.Left:
                this.Left();
                break;
            case Direcao_1.Direcao.Right:
                this.Right(canvas.width);
                break;
            case Direcao_1.Direcao.Up:
                this.Up();
                break;
            case Direcao_1.Direcao.Down:
                this.Down(canvas.height);
                break;
        }
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
        return this.touch((_a = this.rear) === null || _a === void 0 ? void 0 : _a.position) || ((_b = this.rear) === null || _b === void 0 ? void 0 : _b.touchHead(this.position));
    };
    return Head;
}(BodyPart_1.BodyPart));
exports.Head = Head;
