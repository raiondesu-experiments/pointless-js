import { add } from './number';
import { safeObj } from './object';
import { compose } from './compose';
import { id, createSafeOperation, ifNull, Comparator } from './generic';
import { Nullable } from './type';

export const safeArr = createSafeOperation<Array<any>>([]);

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
export function map<T, R>(f: (x: T, i: number, arr: Readonly<T[]>) => R) {
  return safeArr<T[], R[]>(_ => _.map<R>(f));
}

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
export function reduce<T>(f: (p: T, c: T, i: number, arr: Readonly<T[]>) => T): (arr: Readonly<Nullable<T[]>>) => T;

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
export function reduce<T, R = T>(
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
export function reduce<T, R>(f: (p: R, c: T, i: number, arr: Readonly<T[]>) => R, init?: R): (arr: Readonly<Nullable<T[]>>) => R;

export function reduce<T, R>(
  f: (p: R | T, c: T, i: number, arr: Readonly<T[]>) => R,
  init?: R | T
): (arr: Readonly<Nullable<T[]>>) => R | T {
  return safeArr<T[], R | T>(_ => _.reduce(f, init as R | T));
}

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
export function reduceRight<U, T>(f: (p: U, c: T, i: number, arr: Readonly<T[]>) => U, init: U) {
  return safeArr<T[], U>(_ => _.reduceRight(f, init));
}

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
export function filter<T>(f: (x: T, i: number, arr: readonly T[]) => boolean): (arr: Nullable<Readonly<T[]>>) => T[];
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
export function filter<T, R extends T>(f: (x: T, i: number, arr: readonly T[]) => x is R): (arr: Nullable<Readonly<T[]>>) => R[];
export function filter<T>(f: (x: T, i: number, arr: readonly T[]) => boolean): (arr: Nullable<Readonly<T[]>>) => T[] {
  return safeArr<T[], T[]>(_ => _.filter(f));
}


export function isOneOf<T>(...many: T[]) {
  return (x: T) => many.includes(x);
}

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
export function join(separator: string = '') {
  return safeArr(_ => _.join(separator));
}

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
export function reverse<T>(arr?: T[] | null) {
  return reduceRight<T[], T>((arr, el) => (arr.push(el), arr), [])(arr);
}

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
export function sort<T>(f?: (a: T, b: T) => number) {
  return safeArr<T[], T[]>(_ => _.slice().sort(f));
}

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
export function slice<T>(start?: number, end?: number) {
  return safeArr<T[], T[]>(_ => _.slice(start, end));
}

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
export function some<T>(f: (x: T, i: number, array: readonly T[]) => boolean) {
  return safeArr<T[], boolean>(_ => _.some(f));
}

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
export function every<T>(f: (x: T, i: number, array: readonly T[]) => boolean) {
  return safeArr<T[], boolean>(_ => _.every(f));
}

export function first<T>(arr?: Nullable<T[]>): T | undefined {
  return safeArr<T[], T | undefined>(_ => _[0])(arr);
}

first.or = <T>(defaultValue: T) => compose<[Nullable<T[]>], Nullable<T>, T>(
  ifNull(defaultValue),
  first
);

export function last<T>(arr?: Nullable<T[]>): Nullable<T> {
  return safeArr<T[], T | undefined>(_ => _.length === 0 ? _[0] : _[_.length - 1])(arr);
}

last.or = <T>(defaultValue: T) => compose<[Nullable<T[]>], Nullable<T>, T>(
  ifNull(defaultValue),
  last
);

const isPropKey = <T = object>(v: any): v is keyof T => typeof v === 'string' || typeof v === 'number' || typeof v === 'symbol';

/**
 * Provides overloads for applying some action on reducing the array.
 */
type ReduceAction<R> = {
  /**
   * Perform lazy action on the array
   *
   * @param f - A getter function to get an element suitable for action.
   * @returns a function, which peforms the action on all elements in the array using the getter function `f`.
   */
  <T>(f: (x: T) => R): (arr: Nullable<T[]>) => R;


  /**
   * Perform lazy action on the array elements' props.
   *
   * @param prop - A string key of the prop of suitable type in an element of the array.
   * @returns a function, which peforms the action on all given props of elements in the array.
   */
  <T>(prop: keyof T): (arr: Nullable<T[]>) => R;

  /**
   * Perform the action on the array elements.
   *
   * Works only on arrays of the given type.
   *
   * @returns a result of the action performed.
   */
  <T>(arr: Nullable<T[]>): R;
};

/**
 * Creates a function that performs an action on all elements of the array,
 * using the `reduce()` function.
 *
 * @param act - A reducing action to perform on the array elements
 * @param [init] - [optional] initial value for the `reduce` function
 * @returns a final action function
 */
export function action<R>(act: (a: R, b: R) => R, init?: R): ReduceAction<R> {
  return function <T>(
    arrOrProp?: Nullable<R[]> | keyof T | ((x: T) => R)
  ) {
    const getProp = typeof arrOrProp === 'function'
      ? safeObj<T, R>(arrOrProp)
      : isPropKey<T>(arrOrProp)
        ? safeObj((_: T) => _[arrOrProp])
        : id;

    return reduce<T, R>((a, b) => act(a, getProp(b)), init);
  } as ReduceAction<R>;
}

type SummableKeys<T> = {
  [key in keyof T]: T[key] extends string | number ? key : never
}[keyof T];

/**
 * Lazy summation (sum) of the array elements.
 */
export const sum: {
  /**
   * Lazy summation (sum) of the array elements.
   *
   * @param f - A getter function for a numbered element
   * or a number representation of an element of the array.
   * @returns a function, which sums all elements in the array using the getter function `f`.
   */
  <T>(f: (x: T) => number): (arr: Nullable<T[]>) => number;

  /**
   * Lazy summation (sum) of the array elements' props.
   *
   * @param prop - A string key of the prop of type `number` in an element of the array.
   * @returns a function, which sums all given props of elements in the array.
   */
  <T>(prop: SummableKeys<T>): (arr: Nullable<T[]>) => number;

  /**
   * Summation (sum) of the array elements.
   *
   * Works only on arrays of numbers.
   *
   * @returns a sum of all numbers in the array.
   */
  (arr: Nullable<number[]>): number;
} = action<number>(add, 0);

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
