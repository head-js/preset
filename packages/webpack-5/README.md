@head/preset-webpack
==

5.74.0 [2022-07-25](https://github.com/webpack/webpack/releases?page=3)
--

1. umi@4.0.29 + webpack@5.74.0 开始支持 MF
2. [umi - RuntimePublicPathPlugin](https://github.com/umijs/umi/blob/v4.0.42/packages/bundler-webpack/src/plugins/RuntimePublicPathPlugin.ts)
3. [umi - javaScriptRules](https://github.com/umijs/umi/blob/v4.0.74/packages/bundler-webpack/src/config/javaScriptRules.ts)
4. https://webpack.js.org/blog/2020-10-10-webpack-5-release/
5. https://webpack.js.org/migrate/5/
6. https://webpack.js.org/guides/asset-modules/
7. [webpack config defaults](https://github.com/webpack/webpack/blob/v5.74.0/lib/config/defaults.js)

Module Federation
--

```javascript
// HOST:   app-b
// REMOTE: app-a

// app-b.js
const CompA = import('app-a/component-a');
// if { app-b.shared }
//   if success then { use app-b.shared }
//   else error then throw
// else
//   if { app-a.shared }
//     if success then { use app-a.shared }
//     else error then throw
// never try if { app-c.shared }
```

1. https://webpack.js.org/concepts/module-federation/
2. [最详细的 Module Federation 实现原理讲解](https://juejin.cn/post/7151281452716392462)
3. [umi - MFPlugin](https://github.com/umijs/umi/blob/v4.0.42/packages/plugins/src/mf.ts)
