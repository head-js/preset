const { Compilation, sources } = require('webpack');


class ShimRemoteEntryPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    const { chunkLoadingGlobal } = this.options;
    // console.log(chunkLoadingGlobal);

    const shim = `"use strict";
(self["${chunkLoadingGlobal}"] = self["${chunkLoadingGlobal}"] || []).push([["vendors-common"],{}]);`
    // console.log(shim);

    compiler.hooks.thisCompilation.tap('ShimRemoteEntryPlugin', (compilation) => {
      compilation.hooks.processAssets.tap(
        { name: 'ShimRemoteEntryPlugin', stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE },
        (assets) => {
          // console.log(compilation.options);
          // console.log(compilation.modules);
          // console.log(compilation.chunks);
          // console.log(compilation.assets);
          // console.log(compilation.fileDependencies);
          const name = 'remote-entry.js';
          const remote = compilation.getAsset(name);
          const source = remote.source.source();
          // console.log(source);
          compilation.updateAsset(name, new sources.RawSource(shim + '\n' + source));
        });
    });
  }
}


module.exports = ShimRemoteEntryPlugin;
