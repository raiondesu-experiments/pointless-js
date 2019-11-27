import { createSafeOperation } from '../safe';
import { GetFKeys, GetF } from '../type';

export const safeStr = createSafeOperation<string>('');

/**
 * Lazifies any String.prototype method - makes it lazy and composable.
 *
 * @param methodName - the name of the method to uncurry
 * @returns a new lazy pure function
 */
export function lazyStrMethod<M extends GetFKeys<String>>(methodName: M) {
  const method: Function = String.prototype[methodName];

  return (...args: Parameters<GetF<String, M>>) => safeStr(
    (s): ReturnType<GetF<String, M>> => method.apply(s, args)
  );
}
