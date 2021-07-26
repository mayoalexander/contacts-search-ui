import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: "",
    view_type: "",
  },
  mutations: {
    SET_VIEW(state, payload) {
      state.view_type = payload;
    },
  },
  actions: {},
  modules: {},
});
