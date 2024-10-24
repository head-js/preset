const path = require('path');
const Config = require('webpack-5-chain');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const versions = require('./package.json').dependencies;
const ShimRemoteEntryPlugin = require('./ShimRemoteEntryPlugin');


const config = new Config();

config.mode('production');

config.entry('umi')
  .add('./src/index.js')
  .end();

config.output
  .path(path.resolve('./dist'))
  .filename('[name]-[contenthash:5].js')
  .publicPath('http://127.0.0.1:8081/dist/');
config.output.set('chunkLoadingGlobal', '__webpackchunkloadingglobal_app_a__');

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

config.plugin('module-federation').use(ModuleFederationPlugin, [{
  name: '__app_a__',
  filename: 'remote-entry.js',
  remotes: {},
  exposes: {
    './component-a': './src/component-a',
    './component-b': './src/component-b',
    './component-c': './src/component-c',
  },
  shared: {
    'is-number': { singleton: true, eager: true, requiredVersion: versions['is-number'] },
  },
}]);

config.plugin('shim-remote-entry')
  .use(ShimRemoteEntryPlugin, [{ chunkLoadingGlobal: '__webpackchunkloadingglobal_app_a__' }]);

config.plugin('html-umi')
  .use(HtmlWebpackPlugin, [{ template: 'src/document.ejs', filename: '../app-a.html', inject: 'body', minify: false,
    chunks: [ 'umi' ], /* publicPath: 'https://cdn.com' */ }]);

// config.plugin('bundle-analyzer-plugin').use(BundleAnalyzerPlugin, []);

const conf = config.toConfig();
// console.log(conf);

module.exports = conf;
