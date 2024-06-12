module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    'plugin:sonarjs/recommended',
  ],
  rules: {
    'import/extensions': [ 'error', { 'js': 'never', 'vue': 'never', 'json': 'always' } ],
    'no-console': 'off',
    'no-multiple-empty-lines': [ 'error', { 'max': 2 } ],
    'no-unused-vars': 'off',
  },
};
