import Vue from "vue";
// import cardsApi from "@/api/getCards/index";
import NewsCard from "./NewsCard/index.vue";
import Component from "vue-class-component";

// вызвать в сторе в экшенах,
// console.log(cardsApi.getCards());

// вызываешь loadData
// store.dispatch("loadData");

@Component({
  components: {
    NewsCard,
  },
})
export default class CardsGallery extends Vue {
  async mounted(): Promise<void> {
    await this.$store.dispatch("Cards/loadData");

    // console.log(this.$store);
  }
}
