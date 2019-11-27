import { safeArr } from './guard';

/**
 * Pure lazy version of Array.prototype.sort():
 * - if a callback returns a negative number - make `a` lower than `b`
 * - if a callback returns a 0 - leave order unchanged
 * - if a callback returns a positive number - make `b` lower than `a`
 *
 * Doesn't modify the original array, returns a fresh and sorted one.
 *
 * In case of original array being `null` or `undefined` just returns an empty array.
 *
 * @param f - a compare function.
 * @returns A function that accepts an array to sort.
 */
export const sort = <T>(f?: (a: T, b: T) => number) => safeArr<T[], T[]>(_ => _.slice().sort(f));
