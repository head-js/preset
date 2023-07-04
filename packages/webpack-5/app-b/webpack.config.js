const path = require('path');
const Config = require('webpack-chain');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


const config = new Config();

config.mode('production');

config.entry('umi')
  .add('./src/index.js')
  .end();

config.output
  .path(path.resolve('./dist'))
  .filename('[name]-[contenthash:5].js')
  .publicPath('http://127.0.0.1:8082/dist/');

config.optimization.set('chunkIds', 'named');

config.optimization.set('splitChunks', {
  chunks: 'async',
  // minSize: 0,
  cacheGroups: {
    default: false,
    defaultVendors: false,
    react: {
      name: 'vendors-react',
      chunks: 'initial',
      minChunks: 1,
      test: /[\\/]node_modules[\\/](axios|react|react-dom)[\\/]/,
      priority: -10,
    },
  }
});

config.optimization.set('minimize', false);

config.plugin('module-federation').use(ModuleFederationPlugin, [{
  remotes: {
    'page-factory': '__webpackmodulefederation__akpagefactory@http://127.0.0.1:8081/page-factory/rsrc/dist-8e97e/remote-entry.js',
  },
  exposes: {},
  shared: {
    react: { eager: true },
    'react-dom': { eager: true },
  },
}]);

const conf = config.toConfig();
// console.log(conf);

module.exports = conf;
