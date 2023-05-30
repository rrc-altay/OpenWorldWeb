import axiosProject from "@/lib/http";
import { DynamicElementModel } from "@/lib/models/DynamicContent/DynamicElementModel";

export const fetchGetDynamicPage = async (path: string) => {
  return await axiosProject.get<DynamicElementModel>(`/page/${path}/`);
};
