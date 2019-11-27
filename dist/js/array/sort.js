"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guard_1 = require("./guard");
exports.sort = (f) => guard_1.safeArr(_ => _.slice().sort(f));
//# sourceMappingURL=sort.js.map