import Vue from "vue";
import Vuex from "vuex";
import cardsApi from "@/api/getCards/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { posts: [] },
  mutations: {
    getPosts(state, posts) {
      state.posts = posts;
    },
    // ADD_NEW_NEWSCARD: (state, data) => {
    //   state.posts.push(data);
    // },
  },
  actions: {
    async loadData({ commit }) {
      const { data: cards } = await cardsApi.getCards();
      commit("getPosts", cards);
    },
  },
  modules: {},
});
