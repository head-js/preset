const { WebpackPlugin } = require('@electron-forge/plugin-webpack');
const mainConfig = require('./webpack.main.config');
const rendererConfig = require('./webpack.renderer.config');
const path = require('path');
const OverwriteRendererPlugin = require('./plugins/forge-plugin-overwrite-renderer');

module.exports = {
  packagerConfig: {
    name: 'PresetElectron',
    asar: true
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip',
      platforms: ['win32', 'darwin', 'linux']
    }
  ],
  plugins: [
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig,
        entryPoints: [{
          name: 'main_window',
          html: path.join(__dirname, 'src', 'renderer.html'),
          js: path.join(__dirname, 'src', 'renderer.js'),
          preload: {
            js: './src/preload.ts'
          }
        }],
      },
    }),
    new OverwriteRendererPlugin({})
  ]
};
