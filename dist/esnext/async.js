export function then(res) {
    return (px) => px.then(res);
}
export function capture(rej) {
    return (px) => px.catch(rej);
}
//# sourceMappingURL=async.js.map