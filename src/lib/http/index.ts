import axios from "axios";
import { API_URL, TIMEOUT } from "@/lib/constants";
import * as https from "https";

const instance = () => {
  const config = axios.create({
    baseURL: API_URL,
    timeout: TIMEOUT,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

  return config;
};

const axiosProject = instance();

export default axiosProject;
