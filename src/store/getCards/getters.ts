import { GetterTree } from "vuex";
import { BlogState, RootState } from "../types";

const CARDS_PER_PAGE = 4;

export const getters: GetterTree<BlogState, RootState> = {
  itemsPerPage(state) {
    const { page, posts } = state;
    const index = (page - 1) * CARDS_PER_PAGE;
    return posts.slice(index, index + CARDS_PER_PAGE);

    // const postCollection = posts.map((post, key) => {
    //   const postCount = page * 8;
    //   if (key + 1 >= postCount - 8 && key <= postCount - 1) {
    //     return posts[key];
    //   }
    // });
    // return postCollection.filter((item) => !!item);
  },
  totalPages(state) {
    const { posts } = state;

    return Math.ceil(posts.length / CARDS_PER_PAGE) || 1;
  },
};
