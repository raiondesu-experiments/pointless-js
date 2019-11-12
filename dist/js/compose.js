"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compose(...fns) {
    return (...x) => fns.reduceRight((arg, fn) => [(fn || ((_) => _))(...arg)], x)[0];
}
exports.compose = compose;
//# sourceMappingURL=compose.js.map