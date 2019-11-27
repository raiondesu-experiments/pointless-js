"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeBools = (operator) => (...fns) => fns.reduce((lf, rf) => (x, i, arr) => operator(lf(x, i, arr), rf(x, i + 1, arr)));
exports.and = exports.composeBools((l, r) => l && r);
exports.or = exports.composeBools((l, r) => l || r);
exports.either = exports.composeBools((l, r) => (l && !r) || (r && !l));
exports.not = (f) => ((...args) => !f(...args));
//# sourceMappingURL=boolean.js.map