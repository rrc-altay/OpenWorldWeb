import axiosProject from "@/lib/http";
import { NewsModel } from "@/lib/models/NewsModel";

export const fetchGetNewById = async (id: string) => {
  return await axiosProject.get<NewsModel>(`/news/${id}`);
};
