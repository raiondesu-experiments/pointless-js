<h1 align="center" style="text-align: center">
  <img src="assets/logo.png"/>
</h1>

<p align="center">
Functional point-free utilities for js
</p>

<h2 align="center">
[WIP]
</h2>

<p align="center">
<a href="https://travis-ci.com/raiondesu-experiments/pointless-js" title="Latest Travis CI build"><img src="https://img.shields.io/travis/com/raiondesu-experiments/pointless-js?style=flat-square" alt="travis"></a>
<a href="https://www.npmjs.com/package/pointless-js" title="Downloads per month, but who cares?"><img src="https://img.shields.io/npm/dm/pointless-js.svg?style=flat-square" alt="npm"></a>
<a href="https://bundlephobia.com/result?p=pointless-js@latest" title="minzipped size"><img src="https://img.shields.io/bundlephobia/minzip/pointless-js@latest?style=flat-square" alt="size"></a>
<a href="https://coveralls.io/github/raiondesu-experiments/pointless-js" title="Code coverage"><img src="https://img.shields.io/coveralls/github/raiondesu-experiments/pointless-js?style=flat-square" alt="coveralls"></a>
<a href="https://codeclimate.com/github/raiondesu-experiments/pointless-js/maintainability" title="Code quality"><img src="https://img.shields.io/codeclimate/maintainability/raiondesu-experiments/pointless-js?style=flat-square" alt="code quality"></a></p>
</p>

<p align="center">
<a href="https://codepen.io/raiondesu/pen/RwwYxxp" title="Link to in-browser playground"><img src="https://img.shields.io/badge/playground-link-blueviolet?style=flat-square" alt="code pen"></a>
</p>

## Table of Contents<!-- omit in toc -->
- [What is this?](#what-is-this)
- [Installation](#installation)
  - [Importing](#importing)

## What is this?

It's a simple collection of functional utilities for JavaScript and Typescript standard library.

If you need similar utilities for [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) - check out [pointless-fetch](https://github.com/raiondesu-experiments/pointless-fetch).

---

## Installation

**npm**:
```bash
npm i -S pointless-js
```

**browser**:
```html
<!-- ES2015 -->
<script type="module">
  import * as P from 'https://unpkg.com/pointless-js';

  // use it here
</script>

<!-- ES5 with IE11+ general syntax polyfills, global object - `P` -->
<!-- Polyfill `window.Promise` and `Object.assign` yourself! -->
<script src="https://unpkg.com/pointless-js/dist/umd.js"></script>
```

### Importing

```ts
// TS-module (pure typescript),
// allows compilation settings to be set from the project config
import * as P from 'pointless-js/src';

// ES-module (npm/node, typescript)
import * as P from 'pointless-js';

// ESNext (no polyfills for esnext)
import * as P from 'pointless-js/dist/esnext';

// ES-module (browser, node)
import * as P from 'https://unpkg.com/pointless-js';

// Classic node commonjs
const P = require('pointless-js/dist/js');
```



---

Something's missing or found a bug?\
Feel free to [create an issue](https://github.com/raiondesu-experiments/pointless-js/issues/new)! 😉
