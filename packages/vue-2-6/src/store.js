import Vue from 'vue';
import Vuex from 'vuex';
import { module as moduleHome } from './pages/home/model';
import { module as moduleNotFound } from './pages/notfound/model';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...moduleHome,
    ...moduleNotFound,
  },
});


export default store;
