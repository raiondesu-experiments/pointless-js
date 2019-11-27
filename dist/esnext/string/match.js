import { safeStr } from "./guard.js";
export const match = (pattern) => safeStr(s => s.match(pattern) || []);
export const test = (pattern) => safeStr(s => pattern.test(s));
//# sourceMappingURL=match.js.map