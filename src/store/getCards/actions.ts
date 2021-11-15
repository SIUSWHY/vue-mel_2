import cardsApi from "@/api/getCards";
import { ActionTree } from "vuex";
import { BlogState, CardValue } from "../types";

export const actions: ActionTree<BlogState, CardValue> = {
  async loadData({ commit }) {
    const { data: cards } = await cardsApi.getCards();
    commit("getPosts", cards);
  },
};
