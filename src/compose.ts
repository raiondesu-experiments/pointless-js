/**
 * if you want more functions composed - add a typed overload yourself
 */
export const compose: {
  /**
   * Composes two functions together
   *
   * Will probably be redundant after the pipe operator gets merged
   *
   * ```ts
  declare const price: number; // from server...

  // Traditional way of doing this
  const formatPrices = price => format(ConvertCurrency(price));

  // Compose way of doing this
  const formatPricesCompose = compose(format, ConvertCurrency);
  ```
  *
  * @param f - first function
  * @param g - second function
  * @returns a function that calls these functions in order on a single argument
  */
  <T extends any[], U, V>(
    f: (x: U) => V,
    g: (...y: T) => U
  ): {
    <P extends T>(...p: P): V;
    (...o: T): V;
  };

  /**
   * Composes three functions together
   *
   * Will probably be redundant after the pipe operator gets merged
   *
   * ```ts
  declare const prices: number[]; // from server...

  // Traditional way of doing this
  const totalPrice = prices => format(ConvertCurrency(prices.reduce((a, price) => a + price, 0)));

  // Compose way of doing this
  const totalPriceCompose = compose(format, ConvertCurrency, sum);
  ```
  *
  * @param f - first function
  * @param g - second function
  * @param h - third function
  * @returns a function that calls these functions in order on a single argument
  */
  <T, U, V, X extends any[]>(
    f: (x: U) => V,
    g: (y: T) => U,
    h: (...z: X) => T
  ): {
    <P extends X>(...p: P): V;
    (...o: X): V;
  };

  /**
   * Composes four functions together
   *
   * Will probably be redundant after the pipe operator gets merged
   *
   * ```ts
   * declare const prices: { price: number }[]; // from server...
   *
   * // Traditional way of doing this
   * const sumOfFivePrices = prices => format(
   *   ConvertCurrency(
   *     prices
   *       .slice(0, 5)
   *       .reduce((sum, el) => sum + el.price, 0)
   *   )
   * );
   *
   * // Compose way of doing this
   * const totalPriceCompose = compose(
   *   format,
   *   ConvertCurrency,
   *   sum('price'),
   *   slice(0, 5)
   * );
   * // or
   * const totalPriceCompose = compose(
   *   format,
   *   ConvertCurrency,
   *   reduce((a, b) => a + b.price, 0),
   *   slice(0, 5)
   * );
   *  ```
   *
   * @param f - first function
   * @param g - second function
   * @param h - third function
   * @param i - fourth function
   * @returns a function that calls these functions in order on a single argument
   */
  <T, U, V, X, Y extends any[]>(
    f: (x: U) => V,
    g: (y: T) => U,
    h: (z: X) => T,
    i: (...a: Y) => X
  ): {
    <P extends Y>(...p: P): V;
    (...o: Y): V;
  };
} = (...fns: Function[]) => (...x: any[]) => fns.reduceRight((arg, fn) => [(fn || ((_: any) => _))(...arg)], x)[0];
