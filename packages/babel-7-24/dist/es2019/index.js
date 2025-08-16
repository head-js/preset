"use strict";

require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.from-entries.js");
require("core-js/modules/es.string.trim-end.js");
require("core-js/modules/es.string.trim-start.js");
// es2019
(function () {
  const arr = [['a', 1], ['b', 2]];
  Object.fromEntries(arr);
})();
(function () {
  let str = '    a b cd  ';
  str.trimStart();
  str.trimEnd();
})();