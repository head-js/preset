"use strict";

require("core-js/modules/es.array.includes.js");
const _excluded = ["a", "b"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
// es2018
(function () {
  const _a$b$x$y = {
      a: 1,
      b: 2,
      x: 3,
      y: 4
    },
    {
      a,
      b
    } = _a$b$x$y,
    c = _objectWithoutProperties(_a$b$x$y, _excluded);
  console.log(a);
  console.log(b);
  console.log(c);
})();