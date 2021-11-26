import cardsApi from "@/api/getCards";
import { ActionTree } from "vuex";
import { BlogState, RootState } from "../types";

export const actions: ActionTree<BlogState, RootState> = {
  async loadData({ commit }) {
    const { data: cards } = await cardsApi.getCards();
    commit("getPosts", cards);
  },
  setPage({ commit }, page) {
    commit("setPage", page);
  },
};
