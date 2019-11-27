import { compose } from "./compose.js";
import { createSafeOperation } from "./safe.js";
export const safeObj = createSafeOperation({});
export const mapObject = (obj, value) => [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)].reduce((newObj, key) => (newObj[key] = value(key), newObj), {});
export const keys = Object.keys;
export const fromPath = (...path) => (obj) => path.reduce((o, i) => (Object(o) === o ? o[i] : o), obj);
export const key = compose(safeObj, fromPath);
//# sourceMappingURL=object.js.map