import { safeArr } from "./guard.js";
export const slice = (start, end) => safeArr(_ => _.slice(start, end));
export const first = (arr) => safeArr(_ => _[0])(arr);
export const last = (arr) => safeArr(_ => _.length === 0 ? _[0] : _[_.length - 1])(arr);
//# sourceMappingURL=slice.js.map