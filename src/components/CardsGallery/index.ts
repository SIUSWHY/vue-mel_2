import Vue from "vue";
import cardsApi from "@/api/getCards/index";
import NewsCard from "./NewsCard/index.vue";
import Component from "vue-class-component";
import { Store } from "vuex";

// вызвать в сторе в экшенах,
console.log(cardsApi.getCards());

// вызываешь loadData

@Component({
  components: {
    NewsCard,
  },
})
export default class CardsGallery extends Vue {
  //
}
