const { WebpackManifestPlugin } = require('webpack-manifest-plugin');


module.exports = {
  outputDir: '.dist',
  // publicPath: '/app/rsrc/dist/',

  configureWebpack: {
    plugins: [
      new WebpackManifestPlugin({ fileName: 'asset-manifest.json', publicPath: '' }),
    ],
  },

  chainWebpack: (config) => {
    config.output
      .filename('[name]-[chunkhash:5].js')
      .chunkFilename('[name]-[chunkhash:5].js');

    config.optimization.splitChunks({
      cacheGroups: {
        vue: {
          name: 'vendors-vue',
          test: /[\\/]node_modules[\\/](vue|vue-router|vuex)[\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        umi: {
          name: 'vendors-umi',
          test: /[\\/]node_modules[\\/](@head|axios)[\\/]/,
          priority: -11,
          chunks: 'initial',
        },
        // FIXME:
        default: {},
        vendors: {},
      },
    });
    // config.optimization.set('minimize', false);

    config.plugin('html-umi').tap((args) => {
      const options = args[0];
      options.minify = false;
      // options.minify.maxLineLength = 120;
      // console.log(options);
      options.headScripts = [
        [ '<script id="head-js">', '/* @head.js/head.js-init 0.0.0 */', '/* @head.js/head.js-profile 0.0.0 */', '</script>' ].join('\n'),
        [ '<script id="umi-js">', '/* @head.js/umi.js-init 0.0.0 */', '</script>' ].join('\n'),
      ];
      return args;
    });

    config.plugin('extract-css').tap((args) => {
      const options = args[0];
      options.filename = '[name]-[chunkhash:5].css';
      options.chunkFilename = '[name]-[chunkhash:5].css';
      // console.log(options);
      return args;
    });

    config.module.rule('images').use('url-loader').loader('url-loader').tap((options) => {
      options.fallback.options.name = '[name]-[contenthash:5].[ext]'; // eslint-disable-line no-param-reassign
      // console.log(options);
      return options;
    });
  },

  productionSourceMap: false,
};
