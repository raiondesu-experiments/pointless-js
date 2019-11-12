import { createSafeOperation } from "./generic.js";
export const safeStr = createSafeOperation('');
function lazyStrMethod(methodName) {
    const method = String.prototype[methodName];
    return (...args) => safeStr((s) => method.apply(s, args));
}
export const match = (pattern) => safeStr(s => s.match(pattern) || []);
export const search = (pattern) => safeStr(s => s.search(pattern));
export const test = (pattern) => safeStr(s => pattern.test(s));
export const replace = lazyStrMethod('replace');
export const prepend = (prefix) => safeStr(s => prefix.concat(s));
export const append = lazyStrMethod('concat');
export const split = (separator, limit) => safeStr(s => s.split(separator, limit));
export const substr = lazyStrMethod('substr');
export const toUpperCase = lazyStrMethod('toUpperCase')();
export const toLowerCase = lazyStrMethod('toLowerCase')();
export const trim = lazyStrMethod('trim')();
export const startsWith = lazyStrMethod('startsWith');
export const endsWith = lazyStrMethod('endsWith');
export const getDigits = replace(/[^0-9]/g, '');
//# sourceMappingURL=string.js.map