import { createStore } from 'vuex'
import { dataState } from './DrawerLinks/state';
import { getters } from './DrawerLinks/getters';
import { mutations } from './DrawerLinks/mutations';

const store = {
  state: dataState,
  getters: getters,
  mutations: mutations,
}

export default createStore(store);
