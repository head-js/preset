module.exports = () => {
  const commonConfig = {
    pages: {
      umi: {
        entry: 'src/index.js',
        template: 'src/document.ejs',
        filename: 'index.html',
        title: '@head/preset-vue',
      },
    },

    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require('tailwind')({
              purge: [
                './src/**/*.{js,vue}',
              ],
            }),
          ],
        },
      },
    },
  };

  let config = {};
  if (process.env.NODE_ENV === 'production') {
    config = require('./vue.config.production'); // eslint-disable-line global-require
  } else {
    config = require('./vue.config.development'); // eslint-disable-line global-require
  }

  return { ...commonConfig, ...config };
};
