"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNull = (v) => v == null;
exports.isString = (v) => typeof v === 'string';
exports.testIf = (condition) => (then) => (otherValue) => condition(otherValue) ? then : otherValue;
exports.ifNull = exports.testIf(exports.isNull);
//# sourceMappingURL=guards.js.map