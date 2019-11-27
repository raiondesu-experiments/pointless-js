import { lazyStrMethod } from './guard';

export const replace: {
  (match: RegExp | string, replace: string): (s: string) => string;
  (match: RegExp | string, replacer: (substring: string, ...args: any[]) => string): (s: string) => string;
} = lazyStrMethod('replace') as any;
