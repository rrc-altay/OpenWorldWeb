import axios from "axios";
import { BASE_URL, TIMEOUT } from "@/lib/constants";

const axiosProject = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

export default axiosProject;
