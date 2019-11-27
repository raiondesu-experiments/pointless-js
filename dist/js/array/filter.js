"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guard_1 = require("./guard");
exports.filter = (f) => guard_1.safeArr(_ => _.filter(f));
exports.isOneOf = (many) => (x) => many.includes(x);
exports.isElementUnique = (equals = (a, b) => a === b) => (el, i, arr) => arr.findIndex(newEl => equals(newEl, el)) === i;
exports.unique = (equals = (a, b) => a === b) => exports.filter(exports.isElementUnique(equals));
//# sourceMappingURL=filter.js.map