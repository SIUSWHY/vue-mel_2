import Vue from "vue";
import Vuex from "vuex";
// import cardsApi from "@/api/getCards/index";
import { Cards } from "./getCards/index";
import { RootState } from "./types";

Vue.use(Vuex);

const state = { posts: [] };

export default new Vuex.Store<RootState>({
  state: {},
  mutations: {
    // getPosts(state, posts) {
    //   state.posts = posts;
    // },
    // ADD_NEW_NEWSCARD: (state, data) => {
    //   state.posts.push(data);
    // },
  },
  actions: {
    //   async loadData({ commit }) {
    //     const { data: cards } = await cardsApi.getCards();
    //     commit("getPosts", cards);
    //   },
  },
  modules: {
    Cards,
  },
});
