"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ObjectUtils = void 0;
var ObjectUtils = (function () {
    function ObjectUtils() {
    }
    ObjectUtils.clone = function (obj) {
        var cloneObj = __assign({}, obj);
        cloneObj.__proto__ = obj.__proto__;
        return cloneObj;
    };
    return ObjectUtils;
}());
exports.ObjectUtils = ObjectUtils;
