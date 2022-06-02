import counterMutation from './Mutation.js';
import counterAction from './Action.js';
import counterGetter from './Getters.js';
export default {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutation,
  actions: counterAction,
  getters: counterGetter,
};
