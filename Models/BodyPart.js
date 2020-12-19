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
var BodyPart = (function (_super) {
    __extends(BodyPart, _super);
    function BodyPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BodyPart.prototype.addRear = function () {
        if (this.rear) {
            this.rear.addRear();
        }
        else {
            this.rear = new BodyPart(ObjectUtils_1.ObjectUtils.clone(this.position), this.size);
        }
    };
    BodyPart.prototype.moveTo = function (position) {
        var _a;
        (_a = this.rear) === null || _a === void 0 ? void 0 : _a.moveTo(this.position);
        _super.prototype.moveTo.call(this, position);
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
