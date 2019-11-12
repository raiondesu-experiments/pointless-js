!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((n=n||self).P={})}(this,function(n){"use strict";function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function t(n){return function(n){if(Array.isArray(n)){for(var r=0,t=new Array(n.length);r<n.length;r++)t[r]=n[r];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function e(n){var r=n.length;return function t(){for(var e=arguments.length,u=new Array(e),o=0;o<e;o++)u[o]=arguments[o];return u.length<r?t.bind.apply(t,[null].concat(u)):n.apply(void 0,u)}}var u=e(function(n,r){return r+n}),o=e(function(n,r){return r-n}),i=e(function(n,r){return r*n}),c=e(function(n,r){return r/n}),f=e(function(n,r){return Math.pow(r,n)}),a=e(function(n,r){return r.toFixed(n)}),l=e(function(n,r){return r.toPrecision(n)}),s=e(function(n,r){return r.toExponential(n)});function p(){for(var n=arguments.length,r=new Array(n),e=0;e<n;e++)r[e]=arguments[e];return function(){for(var n=arguments.length,e=new Array(n),u=0;u<n;u++)e[u]=arguments[u];return r.reduceRight(function(n,r){return[(r||function(n){return n}).apply(void 0,t(n))]},e)[0]}}var y=function(n){return n},d=function(n){return null==n},v=function(n){return function(r){return function(t){return n(t)?r:t}}},h=v(d);function g(n){return function(r){return p(r,h(n))}}var m=g({}),b=Object.keys.bind(Object),w=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return function(n){return r.reduce(function(n,r){return Object(n)===n?n[r]:n},n)}},A=p(m,w),O=g([]);function j(n,r){return O(void 0!==r?function(t){return t.reduce(n,r)}:function(r){return r.reduce(n)})}function S(n,r){return O(function(t){return t.reduceRight(n,r)})}function x(n){return O(function(r){return r.filter(n)})}function P(n){return O(function(n){return n[0]})(n)}function C(n){return O(function(n){return 0===n.length?n[0]:n[n.length-1]})(n)}P.or=function(n){return p(h(n),P)},C.or=function(n){return p(h(n),C)};var E=function(n){return"string"==typeof n||"number"==typeof n||"symbol"===r(n)};function W(n,r){return function(t){var e="function"==typeof t?m(t):E(t)?m(function(n){return n[t]}):y;return j(function(r,t){return n(r,e(t))},r)}}var k=W(u,0),I=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(n,r){return n===r};return function(r,t,e){return e.findIndex(function(t){return n(t,r)})===t}};function M(n){return function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.reduce(function(r,t){return function(e,u,o){return n(r(e,u,o),t(e,u+1,o))}})}}var N=M(function(n,r){return n&&r}),R=M(function(n,r){return n||r}),U=M(function(n,r){return n&&!r||r&&!n}),q=function(n){return function(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return function(r){return n.apply(void 0,t.concat([r])),r}}},z=q(console.log),B=q(console.warn),D=q(console.error),F=function(n){return function(r){return void 0!==n[r]}},L=function(n){return n?function(r){return n.apply(void 0,t(r))}:JSON.stringify};function _(n,r){var t={},e=F(t),u=L(r),o=function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var c=u(o);return e(c)?t[c]:t[c]=n.apply(void 0,o)};return o.original=n,o}var J=g("");function T(n){var r=String.prototype[n];return function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return J(function(n){return r.apply(n,t)})}}var G=T("replace"),H=T("concat"),K=T("substr"),Q=T("toUpperCase")(),V=T("toLowerCase")(),X=T("trim")(),Y=T("startsWith"),Z=T("endsWith"),$=G(/[^0-9]/g,"");n.Memoize=function(n){return function(r,t,e){return Object.defineProperty(r,t,Object.assign({},e,{value:_(e.value,n)})),Object.getOwnPropertyDescriptor(r,t)}},n.action=W,n.add=u,n.and=N,n.append=H,n.capture=function(n){return function(r){return r.catch(n)}},n.compareBy=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(n,r){return n===r};return function(t,e){return r(t[n],e[n])}},n.compose=p,n.composeBools=M,n.concat=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return function(n){return n.concat.apply(n,r)}},n.createSafeOperation=g,n.curry=e,n.divide=c,n.either=U,n.endsWith=Z,n.error=D,n.every=function(n){return O(function(r){return r.every(n)})},n.filter=x,n.first=P,n.fromPath=w,n.getDigits=$,n.id=y,n.ifNull=h,n.includes=function(n){return function(r){return r.includes(n)}},n.isElementUnique=I,n.isNull=d,n.isOneOf=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return function(n){return r.includes(n)}},n.isString=function(n){return"string"==typeof n},n.join=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return O(function(r){return r.join(n)})},n.key=A,n.keys=b,n.last=C,n.log=z,n.map=function(n){return O(function(r){return r.map(n)})},n.match=function(n){return J(function(r){return r.match(n)||[]})},n.memoize=_,n.multiply=i,n.not=function(n){return function(){return!n.apply(void 0,arguments)}},n.or=R,n.pow=f,n.prepend=function(n){return J(function(r){return n.concat(r)})},n.reduce=j,n.reduceRight=S,n.replace=G,n.reverse=function(n){return S(function(n,r){return n.push(r),n},[])(n)},n.safeArr=O,n.safeObj=m,n.safeStr=J,n.search=function(n){return J(function(r){return r.search(n)})},n.slice=function(n,r){return O(function(t){return t.slice(n,r)})},n.some=function(n){return O(function(r){return r.some(n)})},n.sort=function(n){return O(function(r){return r.slice().sort(n)})},n.split=function(n,r){return J(function(t){return t.split(n,r)})},n.startsWith=Y,n.substr=K,n.subtract=o,n.sum=k,n.test=function(n){return J(function(r){return n.test(r)})},n.testIf=v,n.then=function(n){return function(r){return r.then(n)}},n.toExponential=s,n.toFixed=a,n.toLowerCase=V,n.toPrecision=l,n.toUpperCase=Q,n.trim=X,n.unique=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(n,r){return n===r};return x(I(n))},n.warn=B,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=umd.js.map
