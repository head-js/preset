module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 3001,
  },

  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');

    config.plugin('html-umi').tap((args) => {
      const options = args[0];
      options.inject = false;
      // console.log(options);
      options.headScripts = [
        [ '<script id="head-js">', '</script>' ].join('\n'),
      ];
      return args;
    });
  },

  lintOnSave: false,
};
