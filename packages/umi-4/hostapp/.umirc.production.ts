import { defineConfig } from 'umi';


const shared = {
  react: {
    singleton: true,
    eager: true,
  },
  'react-dom': {
    singleton: true,
    eager: true,
  },
};

export default defineConfig({
  outputPath: '.dist',
  publicPath: 'http://127.0.0.1:8000/hostapp/rsrc/dist/',
  // runtimePublicPath: {},

  mfsu: { shared },
  mf: { shared },

  chainWebpack(config: any, options: any) {
    // const { module, optimization, plugins } = config.toConfig();

    // config.optimization.set('chunkIds', 'named');

    // config.optimization.splitChunks({
    //   cacheGroups: {
    //     // react: {
    //     //   name: 'vendors-react',
    //     //   test: /[\\/]node_modules[\\/](react|react-dom|react-redux|react-router|redux|redux-saga)[\\/]/,
    //     //   priority: -10,
    //     //   chunks: 'initial'
    //     // },
    //     umi: {
    //       name: 'vendors-umi',
    //       test: /[\\/]node_modules[\\/](@umijs|@head|axios)[\\/]/,
    //       priority: -11,
    //       chunks: 'initial'
    //     },
    //   }
    // });
    config.optimization.set('minimize', false);

    // config.output
    //   .filename('[name]-[chunkhash:5].js')
    //   .chunkFilename('[name]-[chunkhash:5].js')

    // config.plugin('mini-css-extract-plugin').tap(() => [
    //   {
    //     filename: '[name]-[chunkhash:5].css',
    //     chunkFilename: '[name]-[chunkhash:5].css',
    //     ignoreOrder: true,
    //   },
    // ]);
  },

  manifest: {
    publicPath: '',
  },
});
