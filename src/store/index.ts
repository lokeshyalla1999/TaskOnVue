import { createStore } from 'vuex'
// import DrawerLinks from './DrawerLinks';
import { dataState } from './DrawerLinks/state';
import { getters } from './DrawerLinks/getters';
import { mutations } from './DrawerLinks/mutations';

const store = {
  state: dataState,
  getters: getters,
  mutations: mutations,
  actions: {
  },
  modules: {

  }
}

export default createStore(store);
