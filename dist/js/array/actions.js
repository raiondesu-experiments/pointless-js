"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("../object");
const reduce_1 = require("./reduce");
const id_1 = require("../id");
const number_1 = require("../number");
const isPropKey = (v) => typeof v === 'string' || typeof v === 'number' || typeof v === 'symbol';
exports.action = (act, init) => function (arrOrProp) {
    const getProp = typeof arrOrProp === 'function'
        ? object_1.safeObj(arrOrProp)
        : isPropKey(arrOrProp)
            ? object_1.safeObj((_) => _[arrOrProp])
            : id_1.id;
    return reduce_1.reduce((a, b) => act(a, getProp(b)), init);
};
exports.sum = exports.action(number_1.add, 0);
//# sourceMappingURL=actions.js.map