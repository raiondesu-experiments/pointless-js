import { safeStr } from './guard';

/**
 * Finds the first substring match in a regular expression search.
 * @param pattern The regular expression pattern and applicable flags.
 */
export const search = (pattern: string | RegExp) => safeStr(s => s.search(pattern));
