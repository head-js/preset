"use strict";
(self["webpackChunk_head_preset_electron_renderer"] = self["webpackChunk_head_preset_electron_renderer"] || []).push([["src_bootstrap_js"],{

/***/ "./node_modules/is-number/index.js":
/***/ ((module) => {

/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function(num) {
  if (typeof num === 'number') {
    return num - num === 0;
  }
  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }
  return false;
};


/***/ }),

/***/ "./src/bootstrap.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/is-number/index.js
var is_number = __webpack_require__("./node_modules/is-number/index.js");
var is_number_default = /*#__PURE__*/__webpack_require__.n(is_number);
;// CONCATENATED MODULE: ./src/component-b.js



function CompB() {
  const res = is_number_default()('42');
  console.log('[component-b]', res);
}

;// CONCATENATED MODULE: ./src/renderer.js
function Renderer() {
  console.log('Production Renderer Loaded');

  // 调用 preload 脚本暴露的 API
  console.log('=== 演示调用 preload API ===');

  // 1. 调用 getAppVersion() 方法获取 Electron 版本号
  const electronVersion = window.preload.getAppVersion();
  console.log('Electron 版本号:', electronVersion);

  // 2. 使用 onMessage() 方法监听主进程发送的消息
  window.preload.onMessage((message) => {
    console.log('[renderer] 收到主进程消息:', message);
  });
  window.preload.fromMainToRenderer((payload) => {
    console.log('[renderer] from-main.to-renderer:', payload);
  });
  console.log('已注册消息监听器');
}

;// CONCATENATED MODULE: ./src/bootstrap.js



console.log('bootstrap');

CompB();

Renderer();


/***/ })

}]);