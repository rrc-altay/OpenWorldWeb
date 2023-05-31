import axiosProject from "@/lib/http";
import { SearchModel } from "@/lib/models/Search/SearchModel";

export const fetchPostSearch = async (search: string) => {
  return await axiosProject.post<SearchModel>("/search/", { find: search });
};
