const vueConfigDevelopment = require('./vue.config.development');
const vueConfigProduction = require('./vue.config.production');

const config = process.env.NODE_ENV === 'production' ? vueConfigProduction : vueConfigDevelopment;

module.exports = config;
