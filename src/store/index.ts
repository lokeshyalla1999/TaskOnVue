import { createStore } from 'vuex'
// import DrawerLinks from './DrawerLinks';
import { dataState } from './DrawerLinks/state';
import { getters } from './DrawerLinks/getters';

const store = {
  state: dataState,
  getters: getters,
  mutations: {
  },
  actions: {
  },
  modules: {

  }
}

export default createStore(store);
