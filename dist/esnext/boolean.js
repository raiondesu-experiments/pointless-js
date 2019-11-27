export const composeBools = (operator) => (...fns) => fns.reduce((lf, rf) => (x, i, arr) => operator(lf(x, i, arr), rf(x, i + 1, arr)));
export const and = composeBools((l, r) => l && r);
export const or = composeBools((l, r) => l || r);
export const either = composeBools((l, r) => (l && !r) || (r && !l));
export const not = (f) => ((...args) => !f(...args));
//# sourceMappingURL=boolean.js.map