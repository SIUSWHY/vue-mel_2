import "@ocrv/vue-tailwind-pagination/styles";
// import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VueTailwindPagination = require("@ocrv/vue-tailwind-pagination");
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  name: "PageBar",
  components: {
    VueTailwindPagination,
  },
  data() {
    return {
      currentPage: 1,
      perPage: 2,
      total: 20,
    };
  },
})
export default class PageBar extends Vue {}
