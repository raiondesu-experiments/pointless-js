/**
 * Makes a pure identity function out of any logging function
 *
 * @param messager - the logging function to purify
 */
const purifyLog = (messager: (...messages: any) => void) => (...messages: any) => <T>(x: T) => (messager(...messages, x), x);

/** Lazily logs the element in the composition chain with some messages */
export const log = purifyLog(console.log);

/** Lazily logs via console.warn the element in the composition chain with some messages */
export const warn = purifyLog(console.warn);

/** Lazily errors (via console.error) the element in the composition chain with some messages */
export const error = purifyLog(console.error);
