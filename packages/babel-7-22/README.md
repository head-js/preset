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

7.12.17 [2021-02-18]
--

browserslist@4.21.11 [2023-09-22]
--

1. IE 11 was added to dead and removed from defaults

core-js@3.22.8 [2022-06-02]
--

参考
--

1. [babel 到底需不需要在入口引入 regenerator-runtime](https://juejin.cn/post/7241838768017391676)
