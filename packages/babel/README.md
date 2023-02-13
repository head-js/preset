@head/preset-babel
==

```javascript
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {
      exclude: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
        '@babel/plugin-proposal-logical-assignment-operators',
        '@babel/plugin-proposal-numeric-separator',
        '@babel/plugin-proposal-unicode-property-regex',
        '@babel/plugin-transform-dotall-regex',
        '@babel/plugin-transform-unicode-regex',
        // '@babel/plugin-syntax-top-level-await',
      ],
    }]
  ],
}
```

7.12.17 [2021-02-18](https://github.com/babel/babel/releases?page=9)
--

1. [@babel/core](https://babel.dev/docs/en/babel-core) @7.12.17
2. [@babel/plugin-transform-runtime](https://babel.dev/docs/en/babel-plugin-transform-runtime) @7.12.17
    1. @babel/runtime @7.12.18
3. [@babel/template](https://babel.dev/docs/en/babel-template) @7.12.13
4. [@babel/generator](https://babel.dev/docs/en/babel-generator) @7.12.17
5. [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) @7.12.17
6. core-js @3.18.3 <sup>[2021-10-13](https://github.com/zloirock/core-js/releases?page=4)</sup>
    1. core-js-compat @3.18.3
7. browserslist 4.17.6 [2021-11-03](https://github.com/browserslist/browserslist/tags?after=4.20.0)

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

browserslist
--

1. [2011-06，ECMAScript 5.1 版发布，并且成为 ISO 国际标准（ISO/IEC 16262:2011）](https://es6.ruanyifeng.com/#docs/intro#ECMAScript-%E7%9A%84%E5%8E%86%E5%8F%B2)。
2. 2015-06 发布 ES2015，即 ES6.0，2016-06 发布 ES2016，即 ES6.1；标准委员会最终决定每年 6 月正式发布一次，用年份标记版本。
3. `Array.prototype.includes` 是 `ES2016` 的[提案](https://github.com/tc39/proposals/blob/main/finished-proposals.md)，我们把这里作为一个里程碑来考虑和兼容性有关的设置。
4. 由于我们使用 `babel@7` 和 `core-js@3` 来处理兼容性，所以实际需要参考的数据是 [core-js-compat](http://zloirock.github.io/core-js/compat/)，而不是 MDN 或者 CanIUse 等。
5. 该份数据指出 `includes` 是在 `chrome 53` 实现的，因此设置 `not chrome < 52` 会导致引入 `require("core-js/modules/es.array.includes.js")`，而 `not chrome < 53` 则不会引入该行
    1. 实际需要用 `chrome > 0, chrome < 52` 来测试，否则会被其它浏览器的干扰
    2. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#browser_compatibility) 认为 `chrome 48` 已经实现该特性，但我们应该以 `core-js-compat` 的数据为准
    3. 由于 FireFox 很长一段版本实现有问题，导致 core-js-compat 认为 `firefox 102` 才开始真正支持该特性，所以大部分的配置方式都会导致引入
    4. 由于 IE 始终没有实现，所以需要兼容 IE 的配置方式都会导致引入
6. 我们考虑选择 `chrome 52` 作为这个里程碑标记，即经过兼容性处理后的代码应该能在 `chrome 52` 上正常运行；体现在本例中即 **应该** 引入。
    1. chrome 52 发布于 [2016-07-20](https://en.wikipedia.org/wiki/Google_Chrome_version_history)
    2. 据此选择了 `firefox 48` [2016-08-02](https://en.wikipedia.org/wiki/Firefox_version_history)
    3. 据此选择了 `edge 38` [2016-08-02](https://en.wikipedia.org/wiki/Microsoft_Edge)
    3. 据此选择了 `safari 10`, `ios_saf 10` [2016-09-20](https://en.wikipedia.org/wiki/Safari_(web_browser))
7. Android 于 2014-10 发布了 `5.0 Lollipop`，此版本起用户可以从商店升级 WebView，即版本号和 Chrome 一致了。考虑到 >99% 用户机型占比，选择了 `android 5` 来作为一个里程碑。
8. SamSung 12 发布于 2020-06-19，使用了 Chrome 79，所以暂时不处理它。
9. 考虑一个里程碑 Android 4.4 开始支持 flex
10. 考虑一个里程碑，iOS 11.3 开始支持 preload

*2022-10-06，以上配置对用户的覆盖率是 [83.8%](https://browsersl.ist/#q=cover+99%25+in+CN%2Cnot+ie+%3E+0%2Cnot+chrome+%3C+52%2Cnot+firefox+%3C+46%2Cnot+edge+%3C+38%2Cnot+safari+%3C+10%2Cnot+ios_saf+%3C+10%2Cnot+android+%3C+5&region=CN)*

*但 `cover 100% in CN` 的覆盖率也只有 [90.3%](https://browsersl.ist/#q=cover+99%25+in+CN&region=CN)，所以还需要根据实践调整*

遗留问题：

1. 以上里程碑标记保证的是 ES2016+ 的兼容性，即 `Arrays.prototype.includes` 及其之后的所有特性，并没有涉及 ES2015，即我们俗称的 ES6，例如 `Arrow Function`。
2. [看上去](https://caniuse.com/es6) 对于 Android >=5 和 iOS >= 10 来说原生支持；并且[看上去](https://caniuse.com/?search=ES2016) ES2016 也是原生支持的；但从 ES2017 开始支持得就不太好了，所以以上将里程碑定在 ES2016 即 Array.prototype.includes 应该有足够的代表性。
3. 观察构建制品会发现，Babel 对于 ES2015 是有一定处理的，但暂时没有找到文档支持具体处理或不处理了哪些，如果在实践中遇到问题，再考虑补测试用例。

参考
--

1. https://babeljs.io/docs/en/features-timeline
2. https://github.com/tc39/proposals/blob/main/finished-proposals.md
3. https://babeljs.io/blog/2020/03/16/7.9.0#babelpreset-envs-bugfixes-option-11083httpsgithubcombabelbabelpull11083
4. [认识 browserslist](https://segmentfault.com/a/1190000042212344)
5. [Autoprefixer 配置详解](https://segmentfault.com/a/1190000023960072)
6. [前端版本兼容问题的探索](https://supercodepower.com/fontend-target)
