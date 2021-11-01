import Register from "@/components/Header/Registre/index.vue";
import Vue from "vue";
import Component from "vue-class-component";
// import cardsApi, { getCards } from "@/api/getCards/index";

@Component({
  components: {
    Register,
  },
})
export default class Header extends Vue {
  // cards = getCards();
}
