export function curry<A, B, R>(fn: (a: A, b: B) => R): {
  (): (a: A) => (b: B) => R;
  (): (a: A, b: B) => R;
  (a: A): (b: B) => R;
  (a: A, b: B): R;
};

export function curry<A, B, C, R>(fn: (a: A, b: B, c: C) => R): {
  (): (a: A) => (b: B) => (c: C) => R;
  (): (a: A) => (b: B, c: C) => R;
  (): (a: A, b: B) => (c: C) => R;
  (): (a: A, b: B, c: C) => R;
  (a: A): (b: B) => (c: C) => R;
  (a: A): (b: B, c: C) => R;
  (a: A, b: B): (c: C) => R;
  (a: A, b: B, c: C): R;
};

export function curry(fn: Function) {
  const arity = fn.length;

  return function curried(...args: any[]): any {
    if (args.length < arity) {
      return curried.bind(null, ...args);
    }

    return fn(...args);
  };
}
