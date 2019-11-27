/**
 * Creates a boolean composer based on a boolean operator function
 *
 * @param operator a function that takes two boolean and returns another boolean
 * @returns a composer of boolean-returning operations
 */
export const composeBools = (
  operator: (left: boolean, right: boolean) => boolean
) => <T>(
  ...fns: Array<(x: T, i: number, arr: readonly T[]) => boolean>
) => fns.reduce((lf, rf) => (x: T, i, arr) => operator(lf(x, i, arr), rf(x, i + 1, arr)));

/**
 * Composes boolean-returning operations together using "and" operation
 *
 * @returns a function that computes the result for an element
 */
export const and = composeBools((l, r) => l && r);

/**
 * Composes boolean-returning operations together using "or" operation
 *
 * @returns a function that computes the result for an element
 */
export const or = composeBools((l, r) => l || r);

/**
 * Composes boolean-returning operations together using "xor" operation
 *
 * @returns a function that computes the result for an element
 */
export const either = composeBools((l, r) => (l && !r) || (r && !l));

/**
 * Inverses a boolean-returning function
 *
 * ```ts
 * const isNotArray = not(Array.isArray);
 * ```
 *
 * @param f a function that returns a boolean
 * @returns the same function but with inversed boolean output
 */
export const not = <F extends (...args: any[]) => boolean>(f: F): F => ((...args: Parameters<F>) => !f(...args)) as F;
