import { MutationTree } from "vuex";
import { BlogState, CardValue } from "../types";

export const mutations: MutationTree<BlogState> = {
  getPosts(state, posts: CardValue[]) {
    state.posts = posts;
    // page
  },
  setPage(state, page: number) {
    state.page = page;
  },
};
