import Modal from "@/components/Header/Registre/index.vue";
import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import SortButton from "../SortButton/index.vue";
const cards = namespace("cards");

@Component({
  components: {
    Modal,
    SortButton,
  },
})
export default class Header extends Vue {
  private searchParams = "";
  private sortParam = "";
  private isModalVisible = false;

  private mounted() {
    this.takeParams();
  }

  private takeParams() {
    this.loadData({
      search: this.searchParams,
      sort: this.sortParam,
    });
  }
  private showModal() {
    this.isModalVisible = true;
  }
  private closeModal() {
    this.isModalVisible = false;
  }
  private onSortChanged(sort: string) {
    this.sortParam = sort;
    this.takeParams();
  }

  @cards.Action private loadData!: (
    search?: string,
    sort?: string
  ) => Promise<void>;
}
