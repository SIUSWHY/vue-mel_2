import Modal from "@/components/Header/Registre/index.vue";
import Vue from "vue";
import Component from "vue-class-component";
// import cardsApi, { getCards } from "@/api/getCards/index";

@Component({
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.$data.isModalVisible = true;
    },
    closeModal() {
      this.$data.isModalVisible = false;
    },
  },
})
export default class Header extends Vue {
  // cards = getCards();
}
