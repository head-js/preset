const path = require('path');
const Config = require('webpack-chain');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const versions = require('./package.json').devDependencies;


const config = new Config();

config.mode('production');

config.entry('umi')
  .add('./src/index.js')
  .end();

config.output
  .path(path.resolve('./dist'))
  .filename('[name]-[contenthash:5].js')
  .publicPath('http://0.0.0.0:8081/dist/');

config.optimization.set('chunkIds', 'named');

config.optimization.set('minimize', false);

config.plugin('module-federation').use(ModuleFederationPlugin, [{
  name: 'AppA',
  filename: 'remote-entry.js',
  remotes: {},
  exposes: {
    './component-a': './src/component-a',
    './component-c': './src/component-c',
  },
  shared: {
    'react': versions['react'],
    'react-dom': versions['react-dom'],
  },
}]);

const conf = config.toConfig();
// console.log(conf);

module.exports = conf;
