import { Nullable } from '../type';
import { safeArr } from './guard';

export const reduce: {
  /**
   * Lazy version of Array.prototype.reduce()
   *
   * Remembers the callback to apply it to the array later on.
   *
   * In case of array being `null` or `undefined` just applies the callback to an empty array.
   *
   * @param f - A callback for the reduce function.
   * @returns A function that reduces an array using the remembered callback.
   */
  <T>(f: (p: T, c: T, i: number, arr: Readonly<T[]>) => T): (arr: Readonly<Nullable<T[]>>) => T;

  /**
   * Lazy version of Array.prototype.reduce()
   *
   * Remembers the callback to apply it to the array later on.
   *
   * In case of array being `null` or `undefined` just applies the callback to an empty array.
   *
   * @param f - A callback for the reduce function.
   * @param init - A callback for the reduce function.
   * @returns A function that reduces an array using the remembered callback.
   */
  <T, R = T>(
    f: (p: R, c: T, i: number, arr: Readonly<T[]>) => R,
    init: R
  ): (arr: Readonly<Nullable<T[]>>) => R;

  /**
   * Lazy version of Array.prototype.reduce()
   *
   * Remembers the callback to apply it to the array later on.
   *
   * In case of array being `null` or `undefined` just applies the callback to an empty array.
   *
   * @param f - A callback for the reduce function.
   * @param [init] - [optional] A callback for the reduce function.
   * @returns A function that reduces an array using the remembered callback.
   */
  <T, R>(f: (p: R, c: T, i: number, arr: Readonly<T[]>) => R, init?: R): (arr: Readonly<Nullable<T[]>>) => R;
} = <T, R>(
  f: (p: R | T, c: T, i: number, arr: Readonly<T[]>) => R,
  init?: R | T
): (arr: Readonly<Nullable<T[]>>) => R | T => safeArr<T[], R | T>(_ => _.reduce(f, init as R | T));

/**
 * Lazy version of Array.prototype.reduceRight()
 *
 * Remembers the callback to apply it to the array later on.
 *
 * In case of array being `null` or `undefined` just applies the callback to an empty array.
 *
 * @param f - A callback for the reduce function.
 * @param [init] - [optional] A callback for the reduce function.
 * @returns A function that reduces an array backwards using the remembered callback.
 */
export const reduceRight = <U, T>(
  f: (p: U, c: T, i: number, arr: Readonly<T[]>) => U,
  init: U
) => safeArr<T[], U>(_ => _.reduceRight(f, init));

/**
 * Pure version of Array.prototype.reverse()
 *
 * Doesn't modify the original array, returns a fresh and reversed one.
 *
 * In case of original array being `null` or `undefined` just returns an empty array.
 *
 * @param arr - Array to reverse.
 * @returns A new array with reverse order of elements.
 */
export const reverse = <T>(arr?: T[] | null) => reduceRight<T[], T>((arr, el) => (arr.push(el), arr), [])(arr);
