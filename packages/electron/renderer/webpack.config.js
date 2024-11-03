const path = require('path');
const Config = require('webpack-5-chain');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = new Config();

config.mode('production');

config.entry('umi')
  .add('./src/index.js')
  .end();

config.output
  .path(path.resolve('./dist'))
  .filename('[name]-[contenthash:5].js')
  .publicPath('./dist/');

config.optimization.set('chunkIds', 'named');
config.optimization.set('moduleIds', 'named');

config.optimization.set('splitChunks', {
  chunks: 'async',
  minSize: 0,
  cacheGroups: {
    default: false,
    defaultVendors: false,
    common: {
      name: 'vendors-common',
      chunks: 'all',
      test: /[\\/]node_modules[\\/](is-number)[\\/]/,
      priority: 10,
    },
  }
});

config.optimization.set('minimize', false);

config.plugin('html-umi')
  .use(HtmlWebpackPlugin, [{ template: 'src/document.ejs', filename: '../index.html', inject: 'body', minify: false,
    chunks: [ 'umi' ], /* publicPath: 'https://cdn.com' */ }]);

const conf = config.toConfig();
// console.log(conf);

module.exports = conf;
