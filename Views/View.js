"use strict";
exports.__esModule = true;
exports.View = void 0;
var View = (function () {
    function View(parent) {
        this.parent = parent;
    }
    View.prototype.render = function (htmlString) {
        this.parent.innerHTML = htmlString;
    };
    return View;
}());
exports.View = View;
