import { lazyStrMethod } from './guard';

/**
 * Gets a substring beginning at the specified location and having the specified length.
 * @param from The starting position of the desired substring. The index of the first character in the string is zero.
 * @param length The number of characters to include in the returned substring.
 */
export const substr = lazyStrMethod('substr');
