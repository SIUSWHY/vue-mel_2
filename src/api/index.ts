import axios from "axios";
const { VUE_APP_SERVER_URL } = process.env;

export const axiosInstance = axios.create({
  baseURL: VUE_APP_SERVER_URL,
  // timeout: 1000
});
