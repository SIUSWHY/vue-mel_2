import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {},
})
export default class SortButton extends Vue {
  private sortParam = "";

  private onChangeSort(event: any) {
    this.$emit("onSort", event.target.value);
  }
}
