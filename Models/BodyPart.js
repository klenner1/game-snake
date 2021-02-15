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
exports.BodyPart = void 0;
var ObjectUtils_1 = require("../Utils/ObjectUtils");
var ElementView_1 = require("./ElementView");
var Direction_1 = require("../Enums/Direction");
var BodyPart = (function (_super) {
    __extends(BodyPart, _super);
    function BodyPart(position, size, direction, index) {
        var _this = _super.call(this, position, size) || this;
        _this.direction = direction;
        _this.index = index;
        _this.countChangeDirection = _this.size;
        return _this;
    }
    BodyPart.prototype.addRear = function () {
        if (this.rear) {
            this.rear.addRear();
        }
        else {
            this.rear = new BodyPart(ObjectUtils_1.ObjectUtils.clone(this.position), this.size, Direction_1.Direction.stop, this.index + 1);
        }
    };
    BodyPart.prototype.next = function (stepSize, rearNext) {
        var _a;
        var diference = (this.size % stepSize);
        if (diference >= this.countChangeDirection) {
            stepSize = diference;
        }
        this.moveTo(this.direction, stepSize);
        if (!(this.constructor.name === 'Head' && this.direction === Direction_1.Direction.stop)) {
            this.countChangeDirection -= stepSize;
        }
        if (this.countChangeDirection === 0) {
            if (this.rear) {
                this.rear.nextDirection = this.direction;
            }
            this.direction = this.nextDirection;
            this.countChangeDirection = this.size;
        }
        if (rearNext) {
            (_a = this.rear) === null || _a === void 0 ? void 0 : _a.next(stepSize, true);
        }
    };
    BodyPart.prototype.moveTo = function (direction, stepSize) {
        if (this.direction !== Direction_1.Direction.stop) {
            _super.prototype.moveTo.call(this, direction, stepSize);
        }
    };
    BodyPart.prototype.draw = function (context) {
        var _a;
        context.fillStyle = '#0F0FFF';
        this.toView(context);
        (_a = this.rear) === null || _a === void 0 ? void 0 : _a.draw(context);
    };
    BodyPart.prototype.touchHead = function (headPosition) {
        var _a;
        return this.touch(headPosition) || ((_a = this.rear) === null || _a === void 0 ? void 0 : _a.touchHead(headPosition));
    };
    return BodyPart;
}(ElementView_1.ElementView));
exports.BodyPart = BodyPart;
