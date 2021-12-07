import cardsApi from "@/api/getCards";
import { ActionTree } from "vuex";
import { BlogState, RootState } from "../types";

export const actions: ActionTree<BlogState, RootState> = {
  async loadData({ commit }, { search, sort }) {
    const { data: cards } = await cardsApi.getCards(search, sort);
    commit("getPosts", cards);
  },
  setPage({ commit }, page) {
    commit("setPage", page);
  },
};
