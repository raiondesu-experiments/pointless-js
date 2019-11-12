export type Nullable<T> = T | null | undefined;

/**
 * Gets a function type from the object by given key
 */
export type GetF<T extends object, Key extends keyof T> = T[Key] extends (...args: any) => any ? T[Key] : never;

/**
 * Gets keys with functions from the object
 */
export type GetFKeys<T extends object, Key extends keyof T = keyof T> = {
  [key in Key]: T[key] extends (...args: any) => any ? key : never;
}[Key];
