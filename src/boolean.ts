export function composeBools(operator: (left: boolean, right: boolean) => boolean) {
  return function <T>(...fns: Array<(x: T, i: number, arr: readonly T[]) => boolean>) {
    return fns.reduce((lf, rf) => (x: T, i, arr) => operator(lf(x, i, arr), rf(x, i + 1, arr)));
  };
}

export const and = composeBools((l, r) => l && r);
export const or = composeBools((l, r) => l || r);
export const either = composeBools((l, r) => (l && !r) || (r && !l));
export const not = <F extends (...args: any[]) => boolean>(f: F): F => ((...args: Parameters<F>) => !f(...args)) as F;
