import { add } from "./number.js";
import { safeObj } from "./object.js";
import { compose } from "./compose.js";
import { id, createSafeOperation, ifNull } from "./generic.js";
export const safeArr = createSafeOperation([]);
export function map(f) {
    return safeArr(_ => _.map(f));
}
export function reduce(f, init) {
    return safeArr(_ => _.reduce(f, init));
}
export function reduceRight(f, init) {
    return safeArr(_ => _.reduceRight(f, init));
}
export function filter(f) {
    return safeArr(_ => _.filter(f));
}
export function isOneOf(...many) {
    return (x) => many.includes(x);
}
export function join(separator = '') {
    return safeArr(_ => _.join(separator));
}
export function reverse(arr) {
    return reduceRight((arr, el) => (arr.push(el), arr), [])(arr);
}
export function sort(f) {
    return safeArr(_ => _.slice().sort(f));
}
export function slice(start, end) {
    return safeArr(_ => _.slice(start, end));
}
export function some(f) {
    return safeArr(_ => _.some(f));
}
export function every(f) {
    return safeArr(_ => _.every(f));
}
export function first(arr) {
    return safeArr(_ => _[0])(arr);
}
first.or = (defaultValue) => compose(ifNull(defaultValue), first);
export function last(arr) {
    return safeArr(_ => _.length === 0 ? _[0] : _[_.length - 1])(arr);
}
last.or = (defaultValue) => compose(ifNull(defaultValue), last);
const isPropKey = (v) => typeof v === 'string' || typeof v === 'number' || typeof v === 'symbol';
export function action(act, init) {
    return function (arrOrProp) {
        const getProp = typeof arrOrProp === 'function'
            ? safeObj(arrOrProp)
            : isPropKey(arrOrProp)
                ? safeObj((_) => _[arrOrProp])
                : id;
        return reduce((a, b) => act(a, getProp(b)), init);
    };
}
export const sum = action(add, 0);
export const isElementUnique = (equals = (a, b) => a === b) => (el, i, arr) => arr.findIndex(newEl => equals(newEl, el)) === i;
export const unique = (equals = (a, b) => a === b) => filter(isElementUnique(equals));
//# sourceMappingURL=array.js.map