const path = require('path');
const Config = require('webpack-chain');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = new Config();

config.mode('production');

config.entry('umi')
  .add('./test/index.js')
  .end();

config.output
  .path(path.resolve('./dist'))
  .filename('[name]-[contenthash:5].js')
  .publicPath('/dist/');

// config.optimization.set('runtimeChunk', true);
config.optimization.set('splitChunks', {
  chunks: 'async',
  // minSize: 0,
  cacheGroups: {
    react: {
      chunks: 'initial',
      minChunks: 1,
      automaticNamePrefix: 'vendors-react',
      test: /[\\/]node_modules[\\/](axios|react|react-dom)[\\/]/,
      priority: -10,
    },
  }
});
config.optimization.set('minimize', false);

config.plugin('bundle-analyzer').use(BundleAnalyzerPlugin).init(Plugin => new Plugin());

const conf = config.toConfig();
// console.log(conf);

module.exports = conf;
