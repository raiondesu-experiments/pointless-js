import { compose } from './compose';
import { createSafeOperation } from './generic';
import { Nullable } from './type';

/**
 * Applies an operation to an object safely,
 * without failing on null or undefined
 */
export const safeObj = createSafeOperation<any>({} as any);

/**
 * Maps object values by their keys (including symbols) into a new object
 *
 * Generaly equivalent to `Array.prototype.map()`
 */
export const mapObject = <T extends object, R>(
  obj: T,
  value: (key: keyof T) => R
) => (
  <Array<keyof T>>
  [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)]
).reduce((newObj, key) => (
  newObj[key] = value(key), newObj
), <Record<keyof T, R>> {});

/**
 * Gets the array of keys of the given object (type-safe)
 */
export const keys = Object.keys.bind(Object) as <T extends object>(o: T) => Array<keyof T>;

/**
 * Lazily gets a value by key chain from the object.
 *
 * Unsafe - fails when the object is `null` or `undefined`
 */
export const fromPath = (...path: string[]) => <T extends object>(obj: T): any => path.reduce((o, i) => (
  Object(o) === o ? o[i] : o
), obj);

export const key: {
  /**
   * Lazily gets a value by key from the object.
   *
   * Safe, doesn't fail even if the object is `null` or `undefined`.
   */
  <T, K extends keyof T>(key: K): (obj: Nullable<T>) => T[K];

  /**
   * Lazily gets a value by key chain from the object.
   *
   * Safe, doesn't fail even if the object is `null` or `undefined`.
   */
  (...keys: string[]): (obj: any) => any;
} = compose(
  safeObj,
  fromPath
);
