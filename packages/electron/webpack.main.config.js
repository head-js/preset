const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const mainConfig = {
  mode: isDev ? 'development' : 'production',
  entry: {
    main: [
      // Support for HMR in the main process
      ...(isDev ? ['webpack/hot/poll?1000'] : []),
      './src/main.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false
              }
            }
          }
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.MAIN_WINDOW_DIST_ENTRY': isDev
        ? JSON.stringify('http://127.0.0.1:8000/')
        : JSON.stringify('MAIN_WINDOW_WEBPACK_ENTRY is replaced, not a variable')
    }),
    // Only enable HMR in development
    ...(isDev ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ] : [])
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '.webpack/main'),
    clean: true
  },
  target: 'electron-main',
  node: {
    __dirname: false,
    __filename: false
  },
  // Enable source maps in development
  devtool: isDev ? 'cheap-module-source-map' : false,
  // Watch for changes in development
  watch: isDev,
  // Stats
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
};

module.exports = mainConfig;
