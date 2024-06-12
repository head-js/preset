import Vue from 'vue';
import Vuex from 'vuex';
import { module as moduleHome } from './pages/home/model';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { ...moduleHome },
});


export default store;
