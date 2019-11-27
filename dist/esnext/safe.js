import { compose } from "./compose.js";
import { ifNull } from "./guards.js";
export function createSafeOperation(defaultValue) {
    return (action) => compose(action, ifNull(defaultValue));
}
//# sourceMappingURL=safe.js.map