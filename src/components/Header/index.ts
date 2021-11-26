import Modal from "@/components/Header/Registre/index.vue";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
    Modal,
  },
})
export default class Header extends Vue {
  private isModalVisible = false;

  private showModal() {
    this.isModalVisible = true;
  }
  private closeModal() {
    this.isModalVisible = false;
  }
}
