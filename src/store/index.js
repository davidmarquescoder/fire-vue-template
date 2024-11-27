import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoading: false,
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    updateIsLoading({ commit }, value) {
      commit('setIsLoading', value);
    },
  },
  getters: {

  },
});

export default store;
