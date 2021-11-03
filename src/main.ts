import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
// const env = process.env;
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPencilAlt,
  faSearch,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch, faPencilAlt, faHeart, faComment);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
