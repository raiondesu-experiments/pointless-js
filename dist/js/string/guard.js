"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safe_1 = require("../safe");
exports.safeStr = safe_1.createSafeOperation('');
function lazyStrMethod(methodName) {
    const method = String.prototype[methodName];
    return (...args) => exports.safeStr((s) => method.apply(s, args));
}
exports.lazyStrMethod = lazyStrMethod;
//# sourceMappingURL=guard.js.map