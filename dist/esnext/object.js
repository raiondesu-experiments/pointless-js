import { compose } from "./compose.js";
import { createSafeOperation } from "./generic.js";
export const safeObj = createSafeOperation({});
export const keys = Object.keys.bind(Object);
export const fromPath = (...path) => (obj) => path.reduce((o, i) => (Object(o) === o ? o[i] : o), obj);
export const key = compose(safeObj, fromPath);
//# sourceMappingURL=object.js.map