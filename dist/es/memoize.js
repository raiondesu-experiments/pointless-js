const recordExistsIn = (cache) => (paramsHash) => typeof cache[paramsHash] !== 'undefined';
const hashFunction = (hash) => hash ? (_) => hash(..._) : JSON.stringify;
export function memoize(f, hash) {
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
export function Memoize(hash) {
    return function (target, key, desc) {
        Object.defineProperty(target, key, Object.assign(Object.assign({}, desc), { value: memoize(desc.value, hash) }));
        return Object.getOwnPropertyDescriptor(target, key);
    };
}
//# sourceMappingURL=memoize.js.map