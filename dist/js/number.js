"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry_1 = require("./curry");
exports.add = curry_1.curry((a, b) => b + a);
exports.subtract = curry_1.curry((a, b) => b - a);
exports.multiply = curry_1.curry((a, b) => b * a);
exports.divide = curry_1.curry((a, b) => b / a);
exports.pow = curry_1.curry((b, a) => Math.pow(a, b));
exports.toFixed = curry_1.curry((digits, x) => x.toFixed(digits));
exports.toPrecision = curry_1.curry((digits, x) => x.toPrecision(digits));
exports.toExponential = curry_1.curry((digits, x) => x.toExponential(digits));
//# sourceMappingURL=number.js.map