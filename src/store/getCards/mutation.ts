import { MutationTree } from "vuex";
import { BlogState } from "../types";

export const mutations: MutationTree<BlogState> = {
  getPosts(state, posts: BlogState) {
    state.posts = posts;
  },
};
