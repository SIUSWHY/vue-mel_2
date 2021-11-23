import { Module, ModuleTree } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutation";
import { getters } from "./getters";
import { BlogState, RootState } from "../types";

export const state: BlogState = {
  posts: [],
  error: null,
  loading: true,
  page: 1,
};

export const cards: Module<BlogState, ModuleTree<RootState>> = {
  namespaced: true,
  getters,
  actions,
  mutations,
  state,
};
