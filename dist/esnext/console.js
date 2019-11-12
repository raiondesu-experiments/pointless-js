const purifyLog = (messager) => (...messages) => (x) => (messager(...messages, x), x);
export const log = purifyLog(console.log);
export const warn = purifyLog(console.warn);
export const error = purifyLog(console.error);
//# sourceMappingURL=console.js.map