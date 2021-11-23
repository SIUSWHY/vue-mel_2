import Vue from "vue";
import Vuex from "vuex";
import { cards } from "./getCards/index";

Vue.use(Vuex);

const state = {};

export default new Vuex.Store({
  state,
  modules: {
    cards,
  },
});
