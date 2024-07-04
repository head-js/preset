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

    config.optimization.delete('splitChunks');

    // config.optimization.set('minimize', false);

    config.plugin('html-umi').tap((args) => {
      const options = args[0];
      options.minify = false;
      // options.minify.maxLineLength = 120;
      options.inject = false;
      // console.log(options);
      options.headScripts = [
        [ '<script id="head-js">', '/* @head.js/head.js-init 0.0.0 */', '/* @head.js/head.js-profile 0.0.0 */', '</script>' ].join('\n'),
        [ '<script id="umi-js">', '/* @head.js/umi.js-init 0.0.0 */', '</script>' ].join('\n'),
      ];
      return args;
    });
  },

  productionSourceMap: false,
};
