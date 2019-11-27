import { safeArr } from './guard';

/**
 * Lazy version of Array.prototype.join()
 *
 * Remembers the separator to join the array by it later on.
 *
 * In case of array being `null` or `undefined` just applies the callback to an empty array.
 *
 * @param separator - A string to join by.
 * @returns A function that joins an array using the remembered separator.
 */
export const join = (separator: string = '') => safeArr(_ => _.join(separator));
