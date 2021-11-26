import Vue from "vue";
import NewsCard from "./NewsCard/index.vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import { CardValue } from "@/store/types";
const cards = namespace("cards");

@Component({
  components: {
    NewsCard,
  },
})
export default class CardsGallery extends Vue {
  @cards.Getter private itemsPerPage!: CardValue[];
  async mounted(): Promise<void> {
    await this.$store.dispatch("cards/loadData");
  }
}
