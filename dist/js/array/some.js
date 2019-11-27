"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guard_1 = require("./guard");
exports.some = (f) => guard_1.safeArr(_ => _.some(f));
//# sourceMappingURL=some.js.map