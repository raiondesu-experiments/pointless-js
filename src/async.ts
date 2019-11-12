export function then<T, R>(res: (x: T) => R): (px: Promise<T>) => R extends Promise<infer RR> ? Promise<RR> : Promise<R> {
  return (px: Promise<T>) => px.then(res) as any;
}

export function capture<T, R>(rej: (e: any) => R): (px: Promise<T>) => Promise<T | R> {
  return (px: Promise<T>) => px.catch(rej);
}
