import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth';
import prods from './modules/prods';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    prods
  }
})
