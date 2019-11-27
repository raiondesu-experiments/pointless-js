"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guard_1 = require("./guard");
exports.join = (separator = '') => guard_1.safeArr(_ => _.join(separator));
//# sourceMappingURL=join.js.map