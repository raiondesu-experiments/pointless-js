import { safeArr } from './guard';
import { Nullable } from '../type';

/**
 * Lazy version of Array.prototype.slice(), which returns a section of an array.
 *
 * Remembers the arguments to apply them to the array.slice() later on.
 *
 * In case of array being `null` or `undefined` just applies the `slice()` to an empty array.
 *
 * @param [start] - The beginning of the specified portion of the array.
 * @param [end] - The end of the specified portion of the array.
 * @returns A function that slices an array using the remembered arguments.
 */
export const slice = <T>(start?: number, end?: number) => safeArr<T[], T[]>(_ => _.slice(start, end));

export const first = <T>(
  arr?: Nullable<T[]>
): T | undefined => safeArr<T[], T | undefined>(_ => _[0])(arr);

export const last = <T>(
  arr?: Nullable<T[]>
): Nullable<T> => safeArr<T[], T | undefined>(_ => _.length === 0 ? _[0] : _[_.length - 1])(arr);
