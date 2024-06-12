module.exports = {
  plugins: [ 'stylelint-scss' ],

  extends: [ 'stylelint-config-standard' ],

  rules: {
    'at-rule-no-unknown': [ true, { 'ignoreAtRules': [ 'tailwind' ] } ],
    'no-empty-source': null,
  },
};
