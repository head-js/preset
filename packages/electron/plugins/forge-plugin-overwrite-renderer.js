const { PluginBase } = require('@electron-forge/plugin-base');
const path = require('path');
const fs = require('fs-extra');

class OverwriteRendererPlugin extends PluginBase {
  constructor(c) {
    super(c);
    this.name = 'overwrite-renderer';
  }

  getHooks() {
    return {
      prePackage: [this.prePackage.bind(this)]
    };
  }

  async prePackage() {
    const isDev = process.env.NODE_ENV === 'development';
    if (isDev) {
      return;
    }

    console.log('Running prePackage hook to copy external renderer artifacts');

    const srcHtml = path.resolve(__dirname, '../src/dist-renderer/index.html');
    const srcDist = path.resolve(__dirname, '../src/dist-renderer/dist');

    const destHtml = path.resolve(__dirname, `../.webpack/${process.arch}/renderer/main_window/index.html`);
    const destDist = path.resolve(__dirname, `../.webpack/${process.arch}/renderer/main_window/dist`);

    await fs.copy(srcHtml, destHtml);
    await fs.copy(srcDist, destDist);

    console.log('Copied renderer artifacts (index.html and dist/) to .webpack/renderer/main_window/');
  }
}

module.exports = OverwriteRendererPlugin;
