import { createSafeOperation } from './safe';
import { GetFKeys, GetF } from './type';

export const safeStr = createSafeOperation<string>('');

/**
 * Lazifies any String.prototype method - makes it lazy and composable.
 *
 * @param methodName - the name of the method to uncurry
 * @returns a new lazy pure function
 */
function lazyStrMethod<M extends GetFKeys<String>>(methodName: M) {
  const method: Function = String.prototype[methodName];

  return (...args: Parameters<GetF<String, M>>) => safeStr(
    (s): ReturnType<GetF<String, M>> => method.apply(s, args)
  );
}

/**
 * Lazily matches a pattern that supports being matched against,
 * and returns function that returns an array containing the results of that search.
 * @param matcher An object that supports being matched against
 * @returns a function that performs the given match on a string argument
 */
export const match = (pattern: RegExp) => safeStr(s => s.match(pattern) || []);

/**
 * Finds the first substring match in a regular expression search.
 * @param pattern The regular expression pattern and applicable flags.
 */
export const search = (pattern: string | RegExp) => safeStr(s => s.search(pattern));

/**
 * Lazily returns a check function that indicates
 * whether or not a pattern exists in a searched string.
 *
 * @param matcher An object that supports being matched against
 * @returns a function that performs the given test on a string argument
 */
export const test = (pattern: RegExp) => safeStr(s => pattern.test(s));

export const replace: {
  (match: RegExp | string, replace: string): (s: string) => string;
  (match: RegExp | string, replacer: (substring: string, ...args: any[]) => string): (s: string) => string;
} = lazyStrMethod('replace') as any;

export const prepend = (prefix: string) => safeStr(s => prefix.concat(s));

/**
 * Returns a string that contains the concatenation of two or more strings.
 * @param args The strings to append to the end of the string.
 */
export const append = lazyStrMethod('concat');

/**
 * Lazily split a string into substrings using the specified separator and return them as an array.
 * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
 * @param limit A value used to limit the number of elements returned in the array.
 */
export const split = (separator: string | RegExp, limit?: number) => safeStr(s => s.split(separator, limit));

/**
 * Gets a substring beginning at the specified location and having the specified length.
 * @param from The starting position of the desired substring. The index of the first character in the string is zero.
 * @param length The number of characters to include in the returned substring.
 */
export const substr = lazyStrMethod('substr');

/** Converts all the alphabetic characters in a string to uppercase. */
export const toUpperCase = lazyStrMethod('toUpperCase')();

/** Converts all the alphabetic characters in a string to lowercase. */
export const toLowerCase = lazyStrMethod('toLowerCase')();

/** Removes the leading and trailing white space and line terminator characters from a string. */
export const trim = lazyStrMethod('trim')();

export const startsWith = lazyStrMethod('startsWith');

export const endsWith = lazyStrMethod('endsWith');

export const getDigits = replace(/[^0-9]/g, '');

export { concat, includes } from './generic';
