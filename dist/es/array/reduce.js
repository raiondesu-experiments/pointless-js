import { safeArr } from "./guard.js";
export const reduce = (f, init) => safeArr(_ => _.reduce(f, init));
export const reduceRight = (f, init) => safeArr(_ => _.reduceRight(f, init));
export const reverse = (arr) => reduceRight((arr, el) => (arr.push(el), arr), [])(arr);
//# sourceMappingURL=reduce.js.map