const path = require('path');
const Config = require('webpack-chain');


const config = new Config();


config.mode('development');


config.entry('umi')
  .add('./src/index.js')
  .end();

config.output
  .path(path.resolve('./.dist/react-app/rsrc/dist'))
  .filename('[name]-[chunkhash:5].js')
  .chunkFilename('[name]-[chunkhash:5].js')
  .publicPath('/react-app/rsrs/dist/')
  .libraryTarget('system');

config.resolve.extensions
  .add('.js')
  .add('.jsx')
  .add('.json')
  .add('.tsx');

// config.externals([
//   'react',
//   'react-dom',
//   'react-router',
//   'react-router-dom',
// ]);


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


config.optimization.set('chunkIds', 'named');

config.optimization.set('minimize', false);

const conf = config.toConfig();
// console.log(conf);

module.exports = conf;
