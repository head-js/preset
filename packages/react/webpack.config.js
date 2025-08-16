const path = require('path');
const Config = require('webpack-chain');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = new Config();

config.mode('development');

config.entry('umi')
  .add('./src/index.js')
  .end();

config.output
  .path(path.resolve('./dist'))
  .filename('[name]-[contenthash:5].js')
  .publicPath('/dist/');

config.resolve.extensions
  .add('.js')
  .add('.jsx')
  .add('.json')
  .add('.tsx');


config.module
	.rule('js')
		.test(/\.(js|jsx|ts|tsx)$/)
    .exclude.add(/node_modules/).end();
config.module
  .rule('js')
    .use('babel-loader').loader('babel-loader');


config.module
  .rule('css')
    .test(/\.css$/)
    .exclude.add(/node_modules/).end();
config.module
  .rule('css')
    .use('style-loader').loader('style-loader');
config.module
  .rule('css')
    .use('css-loader').loader('css-loader');
config.module
  .rule('css')
    .use('postcss-loader').loader('postcss-loader')
    .options({
      postcssOptions: {
        plugins: [
          'postcss-preset-env',
          'tailwindcss',
        ]
      },
    });


config.optimization.set('chunkIds', 'named');

// config.optimization.set('runtimeChunk', true);
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

// config.plugin('bundle-analyzer').use(BundleAnalyzerPlugin).init(Plugin => new Plugin());

const conf = config.toConfig();
// console.log(conf);

module.exports = conf;
