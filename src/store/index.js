import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: "",
    view_type: "",
    bookmarks: [],
  },
  mutations: {
    SET_VIEW(state, payload) {
      state.view_type = payload;
    },
    ADD_BOOKMARK(state, payload) {
      if (!state.bookmarks.find((item) => item.name === payload.name)) {
        state.bookmarks.push(payload);
      }
    },
  },
  actions: {},
  modules: {},
});
