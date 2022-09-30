@head/preset-vue-cli
==

vue@2.6.14 ~2021-06-07
--

4.2.3 2020-02-27
--

[@vue/cli-service v4](https://github.com/vuejs/vue-cli/blob/v4/packages/%40vue/cli-service/package.json#L69) 将 postcss-loader 锁在了 ^3.0.0 <sup>~2018-08-08</sup>，这导致 postcss 被锁在了 ^7.0.0 <sup>@7.0.39 2021-10-05</sup>，以及一些 postcss-x 也被锁在了 7.x，cssnano-x 被锁在了 4.x，但需要注意的是这里其实是有可能继续更新的。

@vue/cli-service v4 试图将 autoprefixer 锁在 ^9.7.2，但实际会被升级到 9.8.2，并放弃了对 [node@13](https://github.com/postcss/autoprefixer/releases?page=5) 的支持，由于造成了兼容性问题，所以 9.8.3 又改回来了。目前实际的版本是 9.8.8 <sup>[~2021-10-05](https://github.com/postcss/autoprefixer/releases?page=2)</sup>，同样需要注意的是这里其实是有可能继续更新的。

@vue/babel-preset-app 引入了 @babel/plugin-proposal-decorators，但它并没有通过 finished proposal，不建议使用。

参考
--

1. [4.2.0: Lock minor version for plugins](https://github.com/vuejs/vue-cli/issues/5012)
