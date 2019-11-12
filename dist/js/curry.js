"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function curry(fn) {
    const arity = fn.length;
    return function curried(...args) {
        if (args.length < arity) {
            return curried.bind(null, ...args);
        }
        return fn(...args);
    };
}
exports.curry = curry;
//# sourceMappingURL=curry.js.map