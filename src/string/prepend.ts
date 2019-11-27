import { safeStr } from './guard';

export const prepend = (prefix: string) => safeStr(s => prefix.concat(s));
