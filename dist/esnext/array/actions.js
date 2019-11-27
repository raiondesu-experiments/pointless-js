import { safeObj } from "../object.js";
import { reduce } from "./reduce.js";
import { id } from "../id.js";
import { add } from "../number.js";
const isPropKey = (v) => typeof v === 'string' || typeof v === 'number' || typeof v === 'symbol';
export const action = (act, init) => function (arrOrProp) {
    const getProp = typeof arrOrProp === 'function'
        ? safeObj(arrOrProp)
        : isPropKey(arrOrProp)
            ? safeObj((_) => _[arrOrProp])
            : id;
    return reduce((a, b) => act(a, getProp(b)), init);
};
export const sum = action(add, 0);
//# sourceMappingURL=actions.js.map