import axios from "axios";
import config from "../global/config";

const axiosClient = axios.create({
  baseURL: config.backendUrl,
});

export default axiosClient;
