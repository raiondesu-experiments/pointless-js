export const compose = (...fns) => (...x) => fns.reduceRight((arg, fn) => [(fn || ((_) => _))(...arg)], x)[0];
//# sourceMappingURL=compose.js.map