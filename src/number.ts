import { curry } from './curry';

/**
 * Consequently adds two numbers together.
 *
 * Can be partially called.
 */
export const add = curry((a: number, b: number) => b + a);

/**
 * Consequently subtracts two numbers.
 *
 * Can be partially called.
 */
export const subtract = curry((a: number, b: number) => b - a);

/**
 * Consequently multiplies two numbers.
 *
 * Can be partially called.
 */
export const multiply = curry((a: number, b: number) => b * a);

/**
 * Consequently divides the second number by first.
 *
 * Can be partially called.
 * @param a - the number to divide by
 * @param b - the divisible number
 */
export const divide = curry((a: number, b: number) => b / a);

/**
 * Powers the second number by first.
 *
 * Can be partially called.
 * @param a - the number to power by (exponent)
 * @param b - the original number
 */
export const pow = curry((b: number, a: number) => Math.pow(a, b));

export const toFixed = curry((digits: number | undefined, x: number) => x.toFixed(digits));
export const toPrecision = curry((digits: number | undefined, x: number) => x.toPrecision(digits));
export const toExponential = curry((digits: number | undefined, x: number) => x.toExponential(digits));
