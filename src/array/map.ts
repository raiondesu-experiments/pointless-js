import { safeArr } from './guard';

/**
 * Lazy version of Array.prototype.map()
 *
 * Remembers the callback to apply it to the array later on.
 *
 * In case of array being `null` or `undefined` just applies the callback to an empty array.
 *
 * @param f - A callback for the map function.
 * @returns A function that maps an array into a different array using the remembered callback.
 */
export const map = <T, R>(f: (x: T, i: number, arr: Readonly<T[]>) => R) => safeArr<T[], R[]>(_ => _.map<R>(f));
