"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose_1 = require("./compose");
const guards_1 = require("./guards");
function createSafeOperation(defaultValue) {
    return (action) => compose_1.compose(action, guards_1.ifNull(defaultValue));
}
exports.createSafeOperation = createSafeOperation;
//# sourceMappingURL=safe.js.map