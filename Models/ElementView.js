"use strict";
exports.__esModule = true;
exports.ElementView = void 0;
var Direction_1 = require("../Enums/Direction");
var ObjectUtils_1 = require("../Utils/ObjectUtils");
var ElementView = (function () {
    function ElementView(position, size) {
        this.position = position;
        this.size = size;
    }
    ElementView.prototype.moveTo = function (direction, stepSize) {
        this.movingTo = direction;
        switch (direction) {
            case Direction_1.Direction.Up:
                this.position.y -= stepSize;
                break;
            case Direction_1.Direction.Down:
                this.position.y += stepSize;
                break;
            case Direction_1.Direction.Left:
                this.position.x -= stepSize;
                break;
            case Direction_1.Direction.Right:
                this.position.x += stepSize;
                break;
        }
    };
    ElementView.prototype.goTo = function (position) {
        this.position = ObjectUtils_1.ObjectUtils.clone(position);
    };
    ElementView.prototype.touch = function (position) {
        return this.position.equals(position);
    };
    ElementView.prototype.toView = function (context) {
        context.fillRect(this.position.x, this.position.y, this.size, this.size);
    };
    return ElementView;
}());
exports.ElementView = ElementView;
