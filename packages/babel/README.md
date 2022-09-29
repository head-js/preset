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
        '@babel/plugin-syntax-top-level-await',
      ],
    }]
  ],
}
```

7.11.x [~2020-09-03](https://github.com/babel/babel/releases?page=11)
--

1. [@babel/core](https://babel.dev/docs/en/babel-core) @7.11.6 <sup>[~2020-09-03](https://github.com/babel/babel/releases?page=11)</sup>
2. [@babel/plugin-transform-runtime](https://babel.dev/docs/en/babel-plugin-transform-runtime) @7.11.5 <sup>~2020-08-31</sup>
    1. @babel/runtime @7.11.2 <sup>~2020-08-05</sup>
3. [@babel/template](https://babel.dev/docs/en/babel-template) @7.10.4 <sup>~2020-06-30</sup>
4. [@babel/generator](https://babel.dev/docs/en/babel-generator) @7.11.6
5. [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) @7.11.5
6. core-js @3.8.3 <sup>[~2021-01-09](https://github.com/zloirock/core-js/releases?page=7)</sup>
    1. core-js-compat @3.8.3

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

-syntax 已经升级到 -transform，但这些依赖并没有改好：

1. @babel/plugin-syntax-async-generator @7.8.3
2. @babel/plugin-syntax-dynamic-import @7.8.3
3. @babel/plugin-syntax-export-namespace-from @7.8.3
4. @babel/plugin-syntax-json-strings @7.8.3
5. @babel/plugin-syntax-nullish-coalescing-operator @7.8.3
6. @babel/plugin-syntax-object-rest-spread @7.8.3
7. @babel/plugin-syntax-optional-catch-binding @7.8.3
8. @babel/plugin-syntax-optional-chaining @7.8.3

参考
--

1. https://babeljs.io/docs/en/configuration#print-effective-configs
2. https://github.com/tc39/proposals/blob/main/finished-proposals.md
