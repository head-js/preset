module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
  },
  extends: [
    'plugin:eslint-plugin-vue/essential',
    '@vue/eslint-config-airbnb',
    'plugin:eslint-plugin-sonarjs/recommended',
  ],
  rules: {
    'import/extensions': 'off',
    'no-console': 'off',
    'no-multiple-empty-lines': 'off',
    'no-unused-vars': 'off',
  },
};
