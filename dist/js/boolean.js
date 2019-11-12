"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function composeBools(operator) {
    return function (...fns) {
        return fns.reduce((lf, rf) => (x, i, arr) => operator(lf(x, i, arr), rf(x, i + 1, arr)));
    };
}
exports.composeBools = composeBools;
exports.and = composeBools((l, r) => l && r);
exports.or = composeBools((l, r) => l || r);
exports.either = composeBools((l, r) => (l && !r) || (r && !l));
exports.not = (f) => ((...args) => !f(...args));
//# sourceMappingURL=boolean.js.map