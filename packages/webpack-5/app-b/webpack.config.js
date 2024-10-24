const path = require('path');
const Config = require('webpack-chain');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const versions = require('./package.json').dependencies;


const config = new Config();

config.mode('production');

config.entry('umi')
  .add('./src/index.js')
  .end();

config.output
  .path(path.resolve('./dist'))
  .filename('[name]-[contenthash:5].js')
  .publicPath('http://127.0.0.1:8082/dist/');
config.output.set('chunkLoadingGlobal', '__webpackchunkloadingglobal_app_b__');

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
      test: /[\\/]node_modules[\\/](axios|is-number)[\\/]/,
      priority: 10,
    },
  }
});

config.optimization.set('minimize', false);

config.plugin('module-federation').use(ModuleFederationPlugin, [{
  name: '__app_b__',
  remotes: {
    'app-a': '__app_a__@http://127.0.0.1:8081/dist/remote-entry.js',
  },
  exposes: {},
  shared: {
    'is-number': { singleton: true, eager: true, requiredVersion: versions['is-number'] },
  },
}]);

config.plugin('html-umi')
  .use(HtmlWebpackPlugin, [{ template: 'src/document.ejs', filename: '../app-b.html', inject: 'body', minify: false,
    chunks: [ 'umi' ], /* publicPath: 'https://cdn.com' */ }]);

// config.plugin('bundle-analyzer-plugin').use(BundleAnalyzerPlugin, []);

const conf = config.toConfig();
// console.log(conf);

module.exports = conf;
