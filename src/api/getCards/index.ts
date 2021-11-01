import axios, { AxiosResponse } from "axios";

export default class cardsApi {
  public static async getCards(): Promise<AxiosResponse<string[]>> {
    return axios.get("/cards");
  }
}
