"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function then(res) {
    return (px) => px.then(res);
}
exports.then = then;
function capture(rej) {
    return (px) => px.catch(rej);
}
exports.capture = capture;
//# sourceMappingURL=async.js.map