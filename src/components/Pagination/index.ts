import SlidingPagination from "vue-sliding-pagination";
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  name: "PageBar",
  components: {
    SlidingPagination,
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 10,
    };
  },
  methods: {
    pageChangeHandler(selectedPage) {
      this.$data.currentPage = selectedPage;
    },
  },
})
export default class PageBar extends Vue {}
