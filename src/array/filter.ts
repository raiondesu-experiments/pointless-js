import { safeArr } from './guard';
import { Nullable } from '../type';
import { Comparator } from '../generic';

export const filter: {
  /**
   * Lazy version of Array.prototype.filter()
   *
   * Remembers the callback to apply it to the array later on.
   *
   * In case of array being `null` or `undefined` just applies the callback to an empty array.
   *
   * @param f - A callback for the filter function, should return a boolean.
   * @returns A function that filters an array using the remembered callback.
   */
  <T>(f: (x: T, i: number, arr: readonly T[]) => boolean): (arr: Nullable<Readonly<T[]>>) => T[];

  /**
   * Lazy version of Array.prototype.filter()
   *
   * Remembers the callback to apply it to the array later on.
   *
   * In case of array being `null` or `undefined` just applies the callback to an empty array.
   *
   * @param f - A callback for the filter function, should return a boolean.
   * @returns A function that filters an array using the remembered callback.
   */
  <T, R extends T>(f: (x: T, i: number, arr: readonly T[]) => x is R): (arr: Nullable<Readonly<T[]>>) => R[];
} = <T>(
  f: (x: T, i: number, arr: readonly T[]) => boolean
): (arr: Nullable<Readonly<T[]>>) => T[] => safeArr<T[], T[]>(_ => _.filter(f));

/**
 * Returns a function that checks if an element is a part of the array.
 *
 * @param many - array to be checked against
 */
export const isOneOf = <T>(many: T[]) => (x: T) => many.includes(x);

/**
 * Checks the uniqeness of an array item based on a comparator function
 *
 * @param equals a function that determines if two elements are equal
 */
export const isElementUnique = <T>(
  equals: Comparator<T> = (a, b) => a === b
) => (el: T, i: number, arr: readonly T[]) => arr.findIndex(newEl => equals(newEl, el)) === i;

/**
 * Removes duplicates from an array based on the result of an `equals` function
 *
 * @param equals a function that determines if two elements are equal
 */
export const unique = <T>(equals: Comparator<T> = (a, b) => a === b) => filter<T>(
  isElementUnique<T>(equals)
);

