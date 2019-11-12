import { curry } from "./curry.js";
export const add = curry((a, b) => b + a);
export const subtract = curry((a, b) => b - a);
export const multiply = curry((a, b) => b * a);
export const divide = curry((a, b) => b / a);
export const pow = curry((b, a) => Math.pow(a, b));
export const toFixed = curry((digits, x) => x.toFixed(digits));
export const toPrecision = curry((digits, x) => x.toPrecision(digits));
export const toExponential = curry((digits, x) => x.toExponential(digits));
//# sourceMappingURL=number.js.map