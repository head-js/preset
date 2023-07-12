import { defineConfig } from '@umijs/max';
import { name as wmfName } from './package.json';


const shared = {
  react: {
    singleton: true,
    eager: true,
    requiredVersion: '18.1.0',
  },
  'react-dom': {
    singleton: true,
    eager: true,
    requiredVersion: '18.1.0',
  },
};


export default defineConfig({
  outputPath: '.dist',
  publicPath: 'http://127.0.0.1:8001/remoteapp/rsrc/dist/',

  mfsu: {
    strategy: 'eager',
    mfName: `mf_${wmfName}`,
    remoteName: wmfName,
    shared,
  },
  mf: {
    name: wmfName,
    shared,
  },

  chainWebpack(config: any, options: any) {
    // const { module, optimization, plugins } = config.toConfig();

    // config.optimization.set('chunkIds', 'named');

    config.optimization.set('minimize', false);

    // config.output
    //   .filename('[name]-[chunkhash:5].js')
    //   .chunkFilename('[name]-[chunkhash:5].js')

    // config.plugin('mini-css-extract-plugin').tap(() => [
    //   {
    //     filename: '[name]-[chunkhash:5].css',
    //     chunkFilename: '[name]-[chunkhash:5].css',
    //     ignoreOrder: true,
    //   },
    // ]);
  },

  manifest: {
    publicPath: '',
  },
});
