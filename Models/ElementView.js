"use strict";
exports.__esModule = true;
exports.ElementView = void 0;
var ObjectUtils_1 = require("../utils/ObjectUtils");
var ElementView = (function () {
    function ElementView(position, size) {
        this.position = position;
        this.size = size;
    }
    ElementView.prototype.moveTo = function (position) {
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
