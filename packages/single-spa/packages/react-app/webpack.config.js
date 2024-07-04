const path = require('path');
const Config = require('webpack-chain');


const config = new Config();


config.mode('development');


config.entry('umi')
  .add('./src/index.js')
  .end();

config.output
  .path(path.resolve('./.dist'))
  .filename('[name].js')
  .publicPath('/dist/')
  .libraryTarget('system');

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


config.optimization.set('chunkIds', 'named');

config.optimization.set('minimize', false);

const conf = config.toConfig();
// console.log(conf);

module.exports = conf;
