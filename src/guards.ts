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
