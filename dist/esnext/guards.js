export const isNull = (v) => v == null;
export const isString = (v) => typeof v === 'string';
export const testIf = (condition) => (then) => (otherValue) => condition(otherValue) ? then : otherValue;
export const ifNull = testIf(isNull);
//# sourceMappingURL=guards.js.map