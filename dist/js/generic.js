"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = (...args) => (b) => b.concat(...args);
exports.includes = (x) => (b) => b.includes(x);
exports.compareBy = (key, compare = (el1, el2) => el1 === el2) => (el1, el2) => compare(el1[key], el2[key]);
//# sourceMappingURL=generic.js.map