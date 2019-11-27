export const concat = (...args) => (b) => b.concat(...args);
export const includes = (x) => (b) => b.includes(x);
export const compareBy = (key, compare = (el1, el2) => el1 === el2) => (el1, el2) => compare(el1[key], el2[key]);
//# sourceMappingURL=generic.js.map