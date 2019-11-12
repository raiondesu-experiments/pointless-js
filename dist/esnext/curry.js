export function curry(fn) {
    const arity = fn.length;
    return function curried(...args) {
        if (args.length < arity) {
            return curried.bind(null, ...args);
        }
        return fn(...args);
    };
}
//# sourceMappingURL=curry.js.map