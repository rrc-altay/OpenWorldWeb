import axiosProject from "@/lib/http";
import { PAGE_LIMIT, PAGE_START } from "@/lib/constants";
import { NewsModel } from "@/lib/models/NewsModel";
import { DjangoResModel } from "@/lib/models/DjangoResModel";

export const fetchGetNews = async (
  page = PAGE_START,
  page_limit = PAGE_LIMIT,
) => {
  return await axiosProject.get<DjangoResModel<NewsModel>>(
    `/news?page=${page}&page_limit=${page_limit}`,
  );
};
