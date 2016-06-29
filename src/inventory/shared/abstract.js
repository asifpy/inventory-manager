"use strict";
var ObjectKeys = (function () {
    function ObjectKeys() {
    }
    ObjectKeys.prototype.keys = function (object) {
        if (object != null) {
            return Object.keys(object);
        }
        else {
            return [null];
        }
    };
    return ObjectKeys;
}());
exports.ObjectKeys = ObjectKeys;
//# sourceMappingURL=abstract.js.map