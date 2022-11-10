module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:eslint-plugin-vue/essential',
    '@vue/eslint-config-airbnb'
  ],
  rules: {},
  parserOptions: {
    parser: 'babel-eslint',
  },
}
