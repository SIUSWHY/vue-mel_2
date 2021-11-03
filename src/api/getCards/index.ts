import axios, { AxiosResponse } from "axios";
import { axiosInstance } from "..";

export default class cardsApi {
  public static async getCards(): Promise<AxiosResponse<string[]>> {
    return axiosInstance.get("/cards", {
      baseURL: "http://localhost:3000",
    });
  }
}
