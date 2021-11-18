import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { CardValue } from "@/store/types";

@Component
export default class NewsCard extends Vue {
  @Prop(Object) private card_news!: CardValue;
}
