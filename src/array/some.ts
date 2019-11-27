import { safeArr } from './guard';

/**
 * Lazy version of Array.prototype.some(),
 * which returns true if the callback yields `true` for at least one element of the array.
 *
 * Remembers the callback to apply it to the array later on.
 *
 * In case of array being `null` or `undefined` just applies the `some()` to an empty array.
 *
 * @param f - A callback for the `some()` function, should return a boolean.
 * @returns A function that checks the array using the remembered callback.
 */
export const some = <T>(f: (x: T, i: number, array: readonly T[]) => boolean) => safeArr<T[], boolean>(_ => _.some(f));
