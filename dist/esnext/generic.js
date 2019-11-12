import { compose } from "./compose.js";
export function concat(...args) {
    return b => b.concat(...args);
}
export function includes(x) {
    return b => b.includes(x);
}
export const id = (X) => X;
export const isNull = (v) => v == null;
export const isString = (v) => typeof v === 'string';
export const testIf = (condition) => (then) => (otherValue) => condition(otherValue) ? then : otherValue;
export const ifNull = testIf(isNull);
export function createSafeOperation(defaultValue) {
    return (action) => compose(action, ifNull(defaultValue));
}
export const compareBy = (key, compare = (el1, el2) => el1 === el2) => (el1, el2) => compare(el1[key], el2[key]);
//# sourceMappingURL=generic.js.map