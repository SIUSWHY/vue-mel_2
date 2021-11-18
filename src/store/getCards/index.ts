import { Module, ModuleTree } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutation";
import { BlogState, RootState } from "../types";

export const state: BlogState = { posts: [], error: null, loading: true };

export const cards: Module<BlogState, ModuleTree<RootState>> = {
  namespaced: true,
  actions,
  mutations,
  state,
};
