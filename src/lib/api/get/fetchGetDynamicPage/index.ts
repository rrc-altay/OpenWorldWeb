import axiosProject from "@/lib/http";
import { ContentModel } from "@/lib/models/DynamicContent/ContentModel";

export const fetchGetDynamicPage = async (path: string) => {
  return await axiosProject.get<ContentModel>(`/catalog/page/${path}/`);
};
