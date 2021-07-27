import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: "",
    view_type: "",
    bookmarks: [],
    sortBy: null,
  },
  mutations: {
    SET_VIEW(state, payload) {
      state.view_type = payload;
    },
    SET_SORT_BY(state, payload) {
      state.sortBy = payload;
    },
    TOGGLE_BOOKMARK(state, payload) {
      if (!state.bookmarks.find((item) => item.name === payload.name)) {
        state.bookmarks.push(payload);
      } else {
        state.bookmarks.splice(state.bookmarks.indexOf(payload), 1);
      }
    },
  },
  actions: {},
  modules: {},
});
