import Vue from "vue";
import NewsCard from "./NewsCard/index.vue";
import Component from "vue-class-component";

@Component({
  components: {
    NewsCard,
  },
})
export default class CardsGallery extends Vue {
  async mounted(): Promise<void> {
    await this.$store.dispatch("cards/loadData");

    // console.log(this.$store);
  }
}
