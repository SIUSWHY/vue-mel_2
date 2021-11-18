import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { CardValue } from "@/store/types";

@Component
export default class NewsCard extends Vue {
  @Prop(Object) private card_news!: CardValue;

  // ПРОП card_news типа Обжект
  // карточка
  // или
  // заголовое
  // текст
  // кто создал
  // @Prop(card_news) public options!: object;
}

// export тайп Exception {
//   Oid: number;
//   Reason: string;
//   ApprovedBy: string;
//   Notes: string;
//   ModifiedBy: string;
//   ReportValueId?: number;
// }
