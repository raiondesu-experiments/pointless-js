"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guard_1 = require("./guard");
exports.reduce = (f, init) => guard_1.safeArr(_ => _.reduce(f, init));
exports.reduceRight = (f, init) => guard_1.safeArr(_ => _.reduceRight(f, init));
exports.reverse = (arr) => exports.reduceRight((arr, el) => (arr.push(el), arr), [])(arr);
//# sourceMappingURL=reduce.js.map