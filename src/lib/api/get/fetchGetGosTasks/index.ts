import axiosProject from "@/lib/http";
import { ContentPdfModel } from "@/lib/models/DynamicContent/properties/ContentPdfModel";

export const fetchGetGosTasks = async () => {
  return await axiosProject.get<ContentPdfModel[]>("/task/");
};
