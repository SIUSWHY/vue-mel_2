import Vue from "vue";
import cardsApi from "@/api/getCards/index";

console.log(cardsApi.getCards());

export default class CardsGallery extends Vue {}
