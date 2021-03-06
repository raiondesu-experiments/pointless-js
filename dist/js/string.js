"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generic_1 = require("./generic");
exports.safeStr = generic_1.createSafeOperation('');
function lazyStrMethod(methodName) {
    const method = String.prototype[methodName];
    return (...args) => exports.safeStr((s) => method.apply(s, args));
}
exports.match = (pattern) => exports.safeStr(s => s.match(pattern) || []);
exports.search = (pattern) => exports.safeStr(s => s.search(pattern));
exports.test = (pattern) => exports.safeStr(s => pattern.test(s));
exports.replace = lazyStrMethod('replace');
exports.prepend = (prefix) => exports.safeStr(s => prefix.concat(s));
exports.append = lazyStrMethod('concat');
exports.split = (separator, limit) => exports.safeStr(s => s.split(separator, limit));
exports.substr = lazyStrMethod('substr');
exports.toUpperCase = lazyStrMethod('toUpperCase')();
exports.toLowerCase = lazyStrMethod('toLowerCase')();
exports.trim = lazyStrMethod('trim')();
exports.startsWith = lazyStrMethod('startsWith');
exports.endsWith = lazyStrMethod('endsWith');
exports.getDigits = exports.replace(/[^0-9]/g, '');
//# sourceMappingURL=string.js.map