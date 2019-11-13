"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose_1 = require("./compose");
const generic_1 = require("./generic");
exports.safeObj = generic_1.createSafeOperation({});
exports.mapObject = (obj, value) => [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)].reduce((newObj, key) => (newObj[key] = value(key), newObj), {});
exports.keys = Object.keys.bind(Object);
exports.fromPath = (...path) => (obj) => path.reduce((o, i) => (Object(o) === o ? o[i] : o), obj);
exports.key = compose_1.compose(exports.safeObj, exports.fromPath);
//# sourceMappingURL=object.js.map