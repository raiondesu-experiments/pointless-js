import { createSafeOperation } from "../safe.js";
export const safeStr = createSafeOperation('');
export function lazyStrMethod(methodName) {
    const method = String.prototype[methodName];
    return (...args) => safeStr((s) => method.apply(s, args));
}
//# sourceMappingURL=guard.js.map