import { GetterTree } from "vuex";
import { BlogState, RootState } from "../types";

const CARDS_PER_PAGE = 8;

export const getters: GetterTree<BlogState, RootState> = {
  itemsPerPage(state) {
    const { page, posts } = state;
    const index = (page - 1) * CARDS_PER_PAGE;
    return posts.slice(index, index + CARDS_PER_PAGE);
  },
  totalPages(state) {
    const { posts } = state;

    return Math.ceil(posts.length / CARDS_PER_PAGE) || 1;
  },
};
