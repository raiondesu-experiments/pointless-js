import { safeArr } from "./guard.js";
export const filter = (f) => safeArr(_ => _.filter(f));
export const isOneOf = (many) => (x) => many.includes(x);
export const isElementUnique = (equals = (a, b) => a === b) => (el, i, arr) => arr.findIndex(newEl => equals(newEl, el)) === i;
export const unique = (equals = (a, b) => a === b) => filter(isElementUnique(equals));
//# sourceMappingURL=filter.js.map