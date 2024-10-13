module.exports = {
  presets: [
    ['@babel/preset-env', {
      // debug: true,
      useBuiltIns: 'usage',
      corejs: '3',
      exclude: [
        '@babel/plugin-transform-class-properties',
        '@babel/plugin-transform-dotall-regex',
        '@babel/plugin-transform-logical-assignment-operators',
        '@babel/plugin-transform-numeric-separator',
        '@babel/plugin-transform-private-methods',
        '@babel/plugin-transform-unicode-property-regex',
        '@babel/plugin-transform-unicode-regex',
        '@babel/plugin-transform-unicode-sets-regex',
      ],
    }]
  ],
}
