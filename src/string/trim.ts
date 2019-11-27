import { lazyStrMethod } from './guard';

/** Removes the leading and trailing white space and line terminator characters from a string. */
export const trim = lazyStrMethod('trim')();
