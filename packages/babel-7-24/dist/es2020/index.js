"use strict";

require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/esnext.promise.all-settled.js");
require("core-js/modules/web.dom-collections.iterator.js");
// es2020
(function (_ref, _false) {
  console.log((_ref = null) !== null && _ref !== void 0 ? _ref : 'foo');
  console.log((_false = false) !== null && _false !== void 0 ? _false : 'foo');
})();
(function (_user) {
  const street = (_user = user) === null || _user === void 0 || (_user = _user.address) === null || _user === void 0 ? void 0 : _user.street;
})();

// TODO: BigInt

(function () {
  Promise.allSettled([Promise.resolve(33), Promise.reject(new Error("an error"))]).then(values => console.log(values));
})();