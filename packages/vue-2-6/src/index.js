import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';
import './index.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#root');
