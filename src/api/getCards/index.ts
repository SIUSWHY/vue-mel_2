import axios, { AxiosResponse } from "axios";

export default class cardsApi {
  public static async getCards(): Promise<AxiosResponse> {
    return axios.get("/cards");
  }
}
