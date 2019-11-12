"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose_1 = require("./compose");
function concat(...args) {
    return b => b.concat(...args);
}
exports.concat = concat;
function includes(x) {
    return b => b.includes(x);
}
exports.includes = includes;
exports.id = (X) => X;
exports.isNull = (v) => v == null;
exports.isString = (v) => typeof v === 'string';
exports.testIf = (condition) => (then) => (otherValue) => condition(otherValue) ? then : otherValue;
exports.ifNull = exports.testIf(exports.isNull);
function createSafeOperation(defaultValue) {
    return (action) => compose_1.compose(action, exports.ifNull(defaultValue));
}
exports.createSafeOperation = createSafeOperation;
exports.compareBy = (key, compare = (el1, el2) => el1 === el2) => (el1, el2) => compare(el1[key], el2[key]);
//# sourceMappingURL=generic.js.map