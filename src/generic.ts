/**
 * Generic lazy `concat()` function.
 *
 * Works on anything that has the compatible concat method
 * @param args The elements to concat
 * @returns a function which accepts the item to perform the concatenation on
 */
export const concat = <T extends { concat(...args: T[]): T }>(...args: T[]) => (b: T): T => b.concat(...args);

type Includes<X> = { includes(x: X): boolean };

/**
 * Generic lazy `includes()` function.
 *
 * Works on anything that has the compatible `includes()` method
 * @param x The element to check
 * @returns a function which accepts the item to perform the test on
 */
export const includes = <X>(x: X) => <T extends Includes<X>>(b: T) => b.includes(x);


export type Comparator<T> = (el1: T, el2: T) => boolean;

/**
 * Compare two objects by a property
 * using a comparator function (default - `===`)
 *
 * @param key - property key to compare objects by
 * @param [compare=(el1, el2) => el1 === el2] - comparator to compare the properties by
 */
export const compareBy = <Key extends PropertyKey, TK = any>(
  key: Key,
  compare: Comparator<TK> = (el1, el2) => el1 === el2
) => <T extends Record<Key, TK>>(
  el1: T, el2: T
) => compare(el1[key], el2[key]);
