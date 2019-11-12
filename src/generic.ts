import { compose } from './compose';

/**
 * Generic lazy `concat()` function.
 *
 * Works on anything that has the compatible concat method
 * @param args The elements to concat
 * @returns a function which accepts the item to perform the concatenation on
 */
export function concat<T extends { concat(...args: T[]): T }>(...args: T[]): (b: T) => T {
  return b => b.concat(...args);
}

type Includes<X> = { includes(x: X): boolean };

/**
 * Generic lazy `includes()` function.
 *
 * Works on anything that has the compatible `includes()` method
 * @param x The element to check
 * @returns a function which accepts the item to perform the test on
 */
export function includes<X>(x: X): <T extends Includes<X>>(b: T) => boolean {
  return b => b.includes(x);
}

/**
 * Identity function.
 *
 * Exists to do nothing.
 * @param X - a parameter to do nothing with
 * @returns `X`, the same as it was before
 */
export const id: {
  /**
   * Identity function.
   *
   * Exists to do nothing, but in a clever way:
   * it adapts the types from the context.
   * @param X - a parameter to do nothing with
   * @returns `X`, the same as it was before
   */
  <X, Y = X>(X: X): Y;

  /**
   * Identity function.
   *
   * Exists to do nothing, while preserving the type.
   * @param X - a parameter to do nothing with
   * @returns `X`, the same as it was before
   */
  <X>(X: X): X;

  /**
   * Identity function.
   *
   * Exists to do nothing.
   * @param X - a parameter to do nothing with
   * @returns `X`, the same as it was before
   */
  (X: any): any;
} = <X>(X: X): X => X;

export const isNull = (v: any): v is null | undefined => v == null;
export const isString = (v: any): v is string => typeof v === 'string';

export const testIf = <O>(condition: (x: any) => x is O) => <T>(
  then: T
) => (
  otherValue: O | T
) => condition(otherValue) ? then : otherValue;

/**
 * Lazy defaulter.
 *
 * Helps with preventing `null`s or `undefined`s from sneaking into your values.
 *
 * @param defaultValue A value to take place
 * if a `null` or `undefined` comes instead of the original value
 *
 * @returns A function that accepts a nullable `original` value
 * and returns `defaultValue` if `original` is `undefined` or `null`,
 * `original` - otherwise
 */
export const ifNull = testIf(isNull);

/**
 * Nullable operations generator factory.
 *
 * Powerful fail-safe mechanism.
 *
 * @param defaultValue - A default to use instead of the null value
 * @returns a safeguard function
 */
export function createSafeOperation<T>(defaultValue: T) {
  return <U extends T, R>(
    action: (x: Readonly<U>) => R
  ) => compose(
    action,
    ifNull(defaultValue as U)
  );
}

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
