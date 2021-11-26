import { AxiosResponse } from "axios";
import { axiosInstance } from "..";

export default class cardsApi {
  public static async getCards(
    search?: string
  ): Promise<AxiosResponse<string[]>> {
    return axiosInstance.get("/cards", {
      baseURL: "http://localhost:3000",
      params: {
        search: search,
      },
    });
  }
}
