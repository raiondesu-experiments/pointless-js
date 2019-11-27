import { safeArr } from './guard';

/**
 * Lazy version of Array.prototype.every(),
 * which returns true if the callback yields `true` for every element of the array.
 *
 * Remembers the callback to apply it to the array later on.
 *
 * In case of array being `null` or `undefined` just applies the `every()` to an empty array.
 *
 * @param f - A callback for the `every()` function, should return a boolean.
 * @returns A function that checks the array using the remembered callback.
 */
export const every = <T>(f: (x: T, i: number, array: readonly T[]) => boolean) => safeArr<T[], boolean>(_ => _.every(f));
