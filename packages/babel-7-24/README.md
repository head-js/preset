@head/preset-babel
==

```javascript
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {
      exclude: [
        '@babel/plugin-transform-class-properties',
        '@babel/plugin-transform-dotall-regex',
        '@babel/plugin-transform-logical-assignment-operators',
        '@babel/plugin-transform-numeric-separator',
        '@babel/plugin-transform-private-methods',
        '@babel/plugin-transform-unicode-property-regex',
        '@babel/plugin-transform-unicode-regex',
        '@babel/plugin-transform-unicode-sets-regex',
      ],
    }]
  ],
}
```

7.24.9[2024-07-15]
--

7.22.20 [2023-09-16](https://github.com/babel/babel/releases?page=5)
--

1. 7.22，proposal -> transform
    1. @babel/plugin-proposal-async-generator-functions
    2. @babel/plugin-proposal-class-properties
    3. @babel/plugin-proposal-class-static-block
    4. @babel/plugin-proposal-dynamic-import
    5. @babel/plugin-proposal-export-namespace-from
    6. @babel/plugin-proposal-json-strings
    7. @babel/plugin-proposal-logical-assignment-operators
    8. @babel/plugin-proposal-nullish-coalescing-operator
    9. @babel/plugin-proposal-numeric-separator
    10. @babel/plugin-proposal-object-rest-spread
    11. @babel/plugin-proposal-optional-catch-binding
    13. @babel/plugin-proposal-optional-chaining
    14. @babel/plugin-proposal-private-methods
    15. @babel/plugin-proposal-private-property-in-object
    16. @babel/plugin-proposal-unicode-property-regex
2. 8.0.0-alpha.0，2023-07-20

7.18.10 [2022-08-01](https://github.com/babel/babel/releases?page=8)
--

1. 7.15.0，支持 top-level await；支持 Pipe Operator (|>)
2. 7.16.0，支持 [ESLint@8](https://eslint.org/blog/2021/10/eslint-v8.0.0-released/)
3. 7.18.0，No more need to manually include the regenerator-runtime helper when compiling generators
4. 7.18.13 [2022-08-22]
5. 7.22，DEPRECATED
    1. @babel/plugin-proposal-async-generator-functions
    2. @babel/plugin-proposal-class-properties
    3. @babel/plugin-proposal-class-static-block
    4. @babel/plugin-proposal-dynamic-import
    5. @babel/plugin-proposal-export-namespace-from
    6. @babel/plugin-proposal-json-strings
    7. @babel/plugin-proposal-logical-assignment-operators
    8. @babel/plugin-proposal-nullish-coalescing-operator
    9. @babel/plugin-proposal-numeric-separator
    10. @babel/plugin-proposal-object-rest-spread
    11. @babel/plugin-proposal-optional-catch-binding
    13. @babel/plugin-proposal-optional-chaining
    14. @babel/plugin-proposal-private-methods
    15. @babel/plugin-proposal-private-property-in-object
    16. @babel/plugin-proposal-unicode-property-regex

7.12.17 [2021-02-18](https://github.com/babel/babel/releases?page=9)
--

1. [@babel/core](https://babel.dev/docs/en/babel-core) @7.12.17
2. [@babel/plugin-transform-runtime](https://babel.dev/docs/en/babel-plugin-transform-runtime) @7.12.17
    1. @babel/runtime @7.12.18
3. [@babel/template](https://babel.dev/docs/en/babel-template) @7.12.13
4. [@babel/generator](https://babel.dev/docs/en/babel-generator) @7.12.17
5. [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) @7.12.17

已通过 finished proposal，但在我们锁版本的当时并没有，所以不建议使用：

1. [@babel/plugin-proposal-class-properties](https://babel.dev/docs/en/babel-plugin-proposal-class-properties) ES2022
    1. [@babel/plugin-proposal-private-methods](https://babel.dev/docs/en/babel-plugin-proposal-private-methods)
2. [@babel/plugin-syntax-top-level-await](https://babel.dev/docs/en/babel-plugin-syntax-top-level-await) ES2022
3. [@babel/plugin-proposal-logical-assignment-operators](https://babel.dev/docs/en/babel-plugin-proposal-logical-assignment-operators) ES2021
4. [@babel/plugin-proposal-numeric-separator](https://babel.dev/docs/en/babel-plugin-proposal-numeric-separator) ES2021

已通过 finished proposal，但不是良好的工程实践，所以不建议使用：

1. [@babel/plugin-proposal-unicode-property-regex](https://babel.dev/docs/en/babel-plugin-proposal-unicode-property-regex)
2. [@babel/plugin-transform-dotall-regex](https://babel.dev/docs/en/babel-plugin-transform-dotall-regex)
3. [@babel/plugin-transform-unicode-regex](https://babel.dev/docs/en/babel-plugin-transform-unicode-regex)

没有通过 finished proposal，不应该使用：

1. [https://babel.dev/docs/en/babel-plugin-proposal-decorators](https://babel.dev/docs/en/babel-plugin-transform-runtime)

一些 @babel/plugin-syntax-x 已经升级到 @babel/plugin-transform-x，但依赖并没有改好。

browserslist@4.23.3 [2024-08-04]
--

1. https://github.com/browserslist/browserslist/releases
2. [2011-06，ECMAScript 5.1 版发布，并且成为 ISO 国际标准（ISO/IEC 16262:2011）](https://es6.ruanyifeng.com/#docs/intro#ECMAScript-%E7%9A%84%E5%8E%86%E5%8F%B2)。
3. 2015-06 发布 ES2015，即 ES6.0，2016-06 发布 ES2016，即 ES6.1；标准委员会最终决定每年 6 月正式发布一次，用年份标记版本。
4. `Array.prototype.includes` 是 `ES2016` 的[提案](https://github.com/tc39/proposals/blob/main/finished-proposals.md)，我们把这里作为一个里程碑来考虑和兼容性有关的设置。
5. 由于我们使用 `babel@7` 和 `core-js@3` 来处理兼容性，所以实际需要参考的数据是 [core-js-compat](http://zloirock.github.io/core-js/compat/)，而不是 MDN 或者 CanIUse 等。
6. 该份数据指出 `includes` 是在 `chrome 53` 实现的，因此设置 `not chrome < 52` 会导致引入 `require("core-js/modules/es.array.includes.js")`，而 `not chrome < 53` 则不会引入该行
    1. 实际需要用 `chrome > 0, chrome < 52` 来测试，否则会被其它浏览器的干扰
    2. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#browser_compatibility) 认为 `chrome 48` 已经实现该特性，但我们应该以 `core-js-compat` 的数据为准
    3. 由于 FireFox 很长一段版本实现有问题，导致 core-js-compat 认为 `firefox 102` 才开始真正支持该特性，所以大部分的配置方式都会导致引入
    4. 由于 IE 始终没有实现，所以需要兼容 IE 的配置方式都会导致引入
7. 由于综合的原因，我们选择了 `android 5` 和 `ios 11.3` 作为基准；因此我们认为需要原生支持 `ES2016`，`ES2017`
    1. `ES2017` 的 `await` 关键字需要 `chrome 55`
    2. `CSS Grid Layout` 需要 `chrome 58`
    3. `Rest & Spread ...` 需要 `chrome 60`
8. 考虑选择 `chrome 60` 作为这个里程碑标记，即上述能力无需特殊处理应该能正常运行，即 **不应该** 引入。
    1. chrome 60 发布于 [2017-07-25](https://en.wikipedia.org/wiki/Google_Chrome_version_history)
    2. 据此选择了 `firefox 56` [2017-09-28](https://en.wikipedia.org/wiki/Firefox_version_history)
    3. 考虑到暂时没有对 `edge` 的兼容需求，且 `edge 79` 起与 `chrome` 共内核，[跳过](https://en.wikipedia.org/wiki/Microsoft_Edge#Edge_Legacy_release_history)
    4. 据此选择了 `safari 11`, `ios_saf 11` [2017-09-19](https://en.wikipedia.org/wiki/Safari_(web_browser))
8. SamSung 12 发布于 2020-06-19，使用了 Chrome 79，所以暂时不处理它
10. 为简单起见，暂时不处理 Opera

*2024-03-21，以上配置对用户的覆盖率是 [75.7%](https://browsersl.ist/#q=cover+99%25+in+CN%0Anot+ie+%3E+0%0Anot+opera+%3E+0%0Anot+op_mob+%3E+0%0Anot+chrome+%3C+5260%0Anot+edge+%3C+79%0Anot+firefox+%3C+56%0Anot+safari+%3C+11%0Anot+ios_saf+%3C+11%0Anot+android+%3C+5%0A&region=CN)*

*但 `cover 100% in CN` 的覆盖率也只有 [94.5%](https://browsersl.ist/#q=cover+99%25+in+CN&region=CN)，所以还需要根据实践调整*

core-js@3.38.1 [2024-08-20]
--

1. https://github.com/zloirock/core-js/releases
2. TODO: String.raw
3. TODO: Promise.finally
4. TODO: Object.groupBy
5. TODO: Promise.withResolvers

参考
--

1. https://babeljs.io/docs/en/features-timeline
2. https://github.com/tc39/proposals/blob/main/finished-proposals.md
3. https://babeljs.io/blog/2020/03/16/7.9.0#babelpreset-envs-bugfixes-option-11083httpsgithubcombabelbabelpull11083
4. [babel 到底需不需要在入口引入 regenerator-runtime](https://juejin.cn/post/7241838768017391676)
5. [认识 browserslist](https://segmentfault.com/a/1190000042212344)
6. [Autoprefixer 配置详解](https://segmentfault.com/a/1190000023960072)
7. [前端版本兼容问题的探索](https://supercodepower.com/fontend-target)
