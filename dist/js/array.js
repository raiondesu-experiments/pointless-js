"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = require("./number");
const object_1 = require("./object");
const compose_1 = require("./compose");
const generic_1 = require("./generic");
exports.safeArr = generic_1.createSafeOperation([]);
function map(f) {
    return exports.safeArr(_ => _.map(f));
}
exports.map = map;
function reduce(f, init) {
    return exports.safeArr(_ => _.reduce(f, init));
}
exports.reduce = reduce;
function reduceRight(f, init) {
    return exports.safeArr(_ => _.reduceRight(f, init));
}
exports.reduceRight = reduceRight;
function filter(f) {
    return exports.safeArr(_ => _.filter(f));
}
exports.filter = filter;
function isOneOf(...many) {
    return (x) => many.includes(x);
}
exports.isOneOf = isOneOf;
function join(separator = '') {
    return exports.safeArr(_ => _.join(separator));
}
exports.join = join;
function reverse(arr) {
    return reduceRight((arr, el) => (arr.push(el), arr), [])(arr);
}
exports.reverse = reverse;
function sort(f) {
    return exports.safeArr(_ => _.slice().sort(f));
}
exports.sort = sort;
function slice(start, end) {
    return exports.safeArr(_ => _.slice(start, end));
}
exports.slice = slice;
function some(f) {
    return exports.safeArr(_ => _.some(f));
}
exports.some = some;
function every(f) {
    return exports.safeArr(_ => _.every(f));
}
exports.every = every;
function first(arr) {
    return exports.safeArr(_ => _[0])(arr);
}
exports.first = first;
first.or = (defaultValue) => compose_1.compose(generic_1.ifNull(defaultValue), first);
function last(arr) {
    return exports.safeArr(_ => _.length === 0 ? _[0] : _[_.length - 1])(arr);
}
exports.last = last;
last.or = (defaultValue) => compose_1.compose(generic_1.ifNull(defaultValue), last);
const isPropKey = (v) => typeof v === 'string' || typeof v === 'number' || typeof v === 'symbol';
function action(act, init) {
    return function (arrOrProp) {
        const getProp = typeof arrOrProp === 'function'
            ? object_1.safeObj(arrOrProp)
            : isPropKey(arrOrProp)
                ? object_1.safeObj((_) => _[arrOrProp])
                : generic_1.id;
        return reduce((a, b) => act(a, getProp(b)), init);
    };
}
exports.action = action;
exports.sum = action(number_1.add, 0);
exports.isElementUnique = (equals = (a, b) => a === b) => (el, i, arr) => arr.findIndex(newEl => equals(newEl, el)) === i;
exports.unique = (equals = (a, b) => a === b) => filter(exports.isElementUnique(equals));
//# sourceMappingURL=array.js.map