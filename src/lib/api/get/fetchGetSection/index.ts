import axiosProject from "@/lib/http";
import { CatalogModel } from "@/lib/models/Catalog/CatalogModel";

export const fetchGetSection = async (path: string) => {
  return await axiosProject.get<CatalogModel[]>(`/catalog/${path}`);
};
