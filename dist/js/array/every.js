"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guard_1 = require("./guard");
exports.every = (f) => guard_1.safeArr(_ => _.every(f));
//# sourceMappingURL=every.js.map