import { Nullable } from '../type';
import { safeObj } from '../object';
import { reduce } from './reduce';
import { id } from '../id';
import { add } from '../number';

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
export const action = <R>(act: (a: R, b: R) => R, init?: R): ReduceAction<R> => function <T>(
  arrOrProp?: Nullable<R[]> | keyof T | ((x: T) => R)
) {
  const getProp = typeof arrOrProp === 'function'
    ? safeObj<T, R>(arrOrProp)
    : isPropKey<T>(arrOrProp)
      ? safeObj((_: T) => _[arrOrProp])
      : id;

  return reduce<T, R>((a, b) => act(a, getProp(b)), init);
} as ReduceAction<R>;

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
