"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recordExistsIn = (cache) => (paramsHash) => typeof cache[paramsHash] !== 'undefined';
const hashFunction = (hash) => hash ? (_) => hash(..._) : JSON.stringify;
function memoize(f, hash) {
    const cache = {};
    const isCached = recordExistsIn(cache);
    const hashParams = hashFunction(hash);
    const memoized = function (...args) {
        const hashedArgs = hashParams(args);
        let result;
        if (isCached(hashedArgs)) {
            result = cache[hashedArgs];
        }
        else {
            result = cache[hashedArgs] = f(...args);
        }
        return result;
    };
    memoized.original = f;
    return memoized;
}
exports.memoize = memoize;
function Memoize(hash) {
    return function (target, key, desc) {
        Object.defineProperty(target, key, Object.assign(Object.assign({}, desc), { value: memoize(desc.value, hash) }));
        return Object.getOwnPropertyDescriptor(target, key);
    };
}
exports.Memoize = Memoize;
//# sourceMappingURL=memoize.js.map