const recordExistsIn = (cache: Record<string, any>) => (paramsHash: string) => typeof cache[paramsHash] !== 'undefined';
const hashFunction = <P extends any[]>(
  hash?: (...args: P) => string
): ((args: P) => string) => hash ? (_: P) => hash(..._) : JSON.stringify;

/**
 * Creates a function which caches its result based on parameters.
 * It's possible to customize the caching behaviour using the second argument - [hash].
 *
 * Works well with long, expensive computations, such as API requests or array operations.
 *
 *
 * @param f - A function to be cached.
 * Can only be a PURE function, e.g. a function which always gives the same output, given the same input.
 * @param [hash] - Custom hash function for parameters. Accepts all of the function's parameters,
 * should return a string, which will then be used as a hash key.
 * @returns - A cached function,
 * virtually identical to the original.
 */
export function memoize<
  F extends (...args: any) => any
>(f: F, hash?: (...args: Parameters<F>) => string): F & { original: F } {
  const cache: Record<string, any> = {};
  const isCached = recordExistsIn(cache);
  const hashParams = hashFunction(hash);

  const memoized = function (...args: any[]) {
    const hashedArgs = hashParams(args as Parameters<F>);

    let result: ReturnType<F>;

    if (isCached(hashedArgs)) {
      result = cache[hashedArgs];
    } else {
      result = cache[hashedArgs] = f(...args);
    }

    return result;
  } as F & { original: F };

  memoized.original = f;

  return memoized;
}

/**
 * A decorator factory for memoization of class methods.
 *
 * ```ts
 * class MathJS {
 *   \@Memoize((a, b) => (a + b))
 *   add(a: number, b: number) {
 *     return fetch(`http://api.mathjs.org/v4/?expr=${a}+${b}`)
 *       .then(_ => _.json());
 *   }
 * }
 *
 * // Then
 *
 * const math = new MathJS();
 *
 * math.add(2, 3);
 * // Request sent to `http://api.mathjs.org/v4/?expr=2+3` ...
 * // Delay...
 * // Result: `Promise<5>`
 *
 * // After some time, we call it again:
 * math.add(2, 3);
 * // Result: `Promise<5>`
 * // No delays! Value from local cache!
 * ```
 *
 * @param [hash] - Custom hash function for parameters. Accepts all of the methods's parameters,
 * should return a string, which will then be used as a hash key.
 */
export function Memoize(hash?: (...args: any[]) => string): MethodDecorator {
  return function (target, key, desc) {
    Object.defineProperty(target, key, {
      ...desc,
      value: memoize(desc.value as any, hash),
    });

    return Object.getOwnPropertyDescriptor(target, key);
  };
}
