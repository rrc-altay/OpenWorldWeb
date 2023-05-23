import axios from "axios";
import { API_URL, TIMEOUT } from "@/lib/constants";

const axiosProject = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
});

export default axiosProject;
