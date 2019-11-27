"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guard_1 = require("./guard");
exports.slice = (start, end) => guard_1.safeArr(_ => _.slice(start, end));
exports.first = (arr) => guard_1.safeArr(_ => _[0])(arr);
exports.last = (arr) => guard_1.safeArr(_ => _.length === 0 ? _[0] : _[_.length - 1])(arr);
//# sourceMappingURL=slice.js.map