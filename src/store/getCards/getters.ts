import { GetterTree } from "vuex";
import { BlogState, RootState } from "../types";

export const getters: GetterTree<BlogState, RootState> = {
  itemsPerPage(state) {
    const { page, posts } = state;
    const postCollection = posts.map((post, key) => {
      const postCount = page * 8;
      if (key + 1 >= postCount - 8 && key <= postCount - 1) {
        return posts[key];
      }
    });
    return postCollection.filter((item) => !!item);
  },
};
