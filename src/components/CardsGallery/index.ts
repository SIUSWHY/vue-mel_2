import Vue from "vue";
import cardsApi from "@/api/getCards/index";
import NewsCard from "./NewsCard/index.vue";
import Component from "vue-class-component";
// import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import Vuex from "vuex";

// вызвать в сторе в экшенах,
console.log(cardsApi.getCards());

// вызываешь loadData
// Action.loadData();
// Store.actions;

@Component({
  components: {
    NewsCard,
  },
})
export default class CardsGallery extends Vue {
  public mounted() {
    return Vuex.Store.dispatch("loadData");
  }
}
