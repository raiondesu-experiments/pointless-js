"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guard_1 = require("./guard");
exports.split = (separator, limit) => guard_1.safeStr(s => s.split(separator, limit));
//# sourceMappingURL=split.js.map