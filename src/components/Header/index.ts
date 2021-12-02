import Modal from "@/components/Header/Registre/index.vue";
import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
const cards = namespace("cards");

@Component({
  components: {
    Modal,
  },
})
export default class Header extends Vue {
  private searchParams = "";
  private isModalVisible = false;
  private takeParams() {
    this.loadData(this.searchParams);
  }
  private showModal() {
    this.isModalVisible = true;
  }
  private closeModal() {
    this.isModalVisible = false;
  }
  @cards.Action private loadData!: (search?: string) => Promise<void>;
}
