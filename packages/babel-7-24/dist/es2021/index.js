"use strict";

require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/esnext.aggregate-error.js");
require("core-js/modules/esnext.promise.any.js");
require("core-js/modules/esnext.string.replace-all.js");
require("core-js/modules/web.dom-collections.iterator.js");
// es2021
(function () {
  Promise.any([Promise.resolve(33), Promise.reject(new Error("an error"))]).then(values => console.log(values));
})();
(function () {
  'aabbcc'.replaceAll('b', '.');
})();