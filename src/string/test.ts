import { safeStr } from './guard';

/**
 * Lazily returns a check function that indicates
 * whether or not a pattern exists in a searched string.
 *
 * @param matcher An object that supports being matched against
 * @returns a function that performs the given test on a string argument
 */
export const test = (pattern: RegExp) => safeStr(s => pattern.test(s));
