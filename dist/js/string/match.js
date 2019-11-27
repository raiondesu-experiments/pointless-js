"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guard_1 = require("./guard");
exports.match = (pattern) => guard_1.safeStr(s => s.match(pattern) || []);
exports.test = (pattern) => guard_1.safeStr(s => pattern.test(s));
//# sourceMappingURL=match.js.map