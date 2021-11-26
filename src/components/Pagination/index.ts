import SlidingPagination from "vue-sliding-pagination";
import Component from "vue-class-component";
import Vue from "vue";
import { namespace } from "vuex-class";

const cards = namespace("cards");

@Component({
  name: "PageBar",
  components: {
    SlidingPagination,
  },
})
export default class PageBar extends Vue {
  @cards.State private page!: number;
  @cards.Getter private totalPages!: number;
  @cards.Action private setPage!: (page: number) => void;

  private pageChangeHandler(selectedPage: number) {
    this.setPage(selectedPage);
  }
}
