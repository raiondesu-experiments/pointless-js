"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const purifyLog = (messager) => (...messages) => (x) => (messager(...messages, x), x);
exports.log = purifyLog(console.log);
exports.warn = purifyLog(console.warn);
exports.error = purifyLog(console.error);
//# sourceMappingURL=console.js.map