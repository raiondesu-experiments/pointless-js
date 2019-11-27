import { lazyStrMethod } from './guard';

/** Converts all the alphabetic characters in a string to uppercase. */
export const toUpperCase = lazyStrMethod('toUpperCase')();

/** Converts all the alphabetic characters in a string to lowercase. */
export const toLowerCase = lazyStrMethod('toLowerCase')();
