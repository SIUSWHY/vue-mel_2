import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Register extends Vue {
  data(): {
    username: string;
    name: string;
    email: string;
    password: string;
  } {
    return {
      username: "SIUSWHY",
      name: "Даниил",
      email: "ventsodaniil@yandex.ru",
      password: "123qweQWE",
      // isLoginModalVisible: false,
    };
  }
}
