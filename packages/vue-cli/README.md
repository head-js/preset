@head/preset-vue-cli
==

vue@2.6.14 ~2021-06-07
--

4.4.6 [2020-06-24](https://github.com/vuejs/vue-cli/releases?page=5)
--

[@vue/cli-service v4](https://github.com/vuejs/vue-cli/blob/v4/packages/%40vue/cli-service/package.json#L69) 将 postcss-loader 锁在了 ^3.0.0 <sup>~2018-08-08</sup>，这导致 postcss 被锁在了 ^7.0.0 <sup>@7.0.39 2021-10-05</sup>，以及一些 postcss-x 也被锁在了 7.x，cssnano-x 被锁在了 4.x，但需要注意的是这里其实是有可能继续更新的。

@vue/cli-service v4 试图将 autoprefixer 锁在 ^9.7.2，但实际会被升级到 9.8.2，并放弃了对 [node@13](https://github.com/postcss/autoprefixer/releases?page=5) 的支持，由于造成了兼容性问题，所以 9.8.3 又改回来了。目前实际的版本是 9.8.8 <sup>[~2021-10-05](https://github.com/postcss/autoprefixer/releases?page=2)</sup>，同样需要注意的是这里其实是有可能继续更新的。

如果不锁 css-loader，那么它会被升级到 ^6 导致和 webpack@4 冲突。

实际使用的是 [html-webpack-plugin@3](https://github.com/jantimon/html-webpack-plugin/tree/v3.2.0)。

实际使用的是 webpack-dev-server@3.11.3，典型需要注意的区别是 [beforeSetupMiddleware](https://github.com/webpack/webpack-dev-server/blob/master/migration-v4.md)。

@vue/babel-preset-app 引入了 @babel/plugin-proposal-decorators，但它并没有通过 finished proposal，不建议使用。

参考
--

1. [4.2.0: Lock minor version for plugins](https://github.com/vuejs/vue-cli/issues/5012)
2. [4.4.1: Improve the polyfill importing logic of modern mode](https://github.com/vuejs/vue-cli/pull/5513)
