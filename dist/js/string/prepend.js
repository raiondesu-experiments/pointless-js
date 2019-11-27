"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guard_1 = require("./guard");
exports.prepend = (prefix) => guard_1.safeStr(s => prefix.concat(s));
//# sourceMappingURL=prepend.js.map