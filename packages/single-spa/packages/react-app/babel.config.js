module.exports = {
  presets: [
    ['@babel/preset-env', {
      // debug: true,
      useBuiltIns: 'usage',
      corejs: '3',
      exclude: [
      ],
    }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
}
