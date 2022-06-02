import { createStore } from 'vuex';
import rootMutation from './Mutation.js';
import rootAction from './Action.js';
import rootGetter from './Getters.js';
import counterModule from './Counter/Index.js';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutation,
  actions: rootAction,
  getters: rootGetter,
});

export default store;
