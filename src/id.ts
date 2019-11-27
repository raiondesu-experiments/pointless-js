/**
 * Identity function.
 *
 * Exists to do nothing.
 * @param X - a parameter to do nothing with
 * @returns `X`, the same as it was before
 */
export const id: {
  /**
   * Identity function.
   *
   * Exists to do nothing, but in a clever way:
   * it adapts the types from the context.
   * @param X - a parameter to do nothing with
   * @returns `X`, the same as it was before
   */
  <X, Y = X>(X: X): Y;

  /**
   * Identity function.
   *
   * Exists to do nothing, while preserving the type.
   * @param X - a parameter to do nothing with
   * @returns `X`, the same as it was before
   */
  <X>(X: X): X;

  /**
   * Identity function.
   *
   * Exists to do nothing.
   * @param X - a parameter to do nothing with
   * @returns `X`, the same as it was before
   */
  (X: any): any;
} = <X>(X: X): X => X;
