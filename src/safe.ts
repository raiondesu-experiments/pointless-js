import { compose } from './compose';
import { ifNull } from './guards';

/**
 * Nullable operations generator factory.
 *
 * Powerful fail-safe mechanism.
 *
 * @param defaultValue - A default to use instead of the null value
 * @returns a safeguard function
 */
export function createSafeOperation<T>(defaultValue: T) {
  return <U extends T, R>(
    action: (x: Readonly<U>) => R
  ) => compose(
    action,
    ifNull(defaultValue as U)
  );
}
