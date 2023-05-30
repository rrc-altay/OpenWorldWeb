import axiosProject from "@/lib/http";
import { GetServerSidePropsContext } from "next";
import { CatalogModel } from "@/lib/models/Catalog/CatalogModel";

export const fetchGetCatalog = async (context: GetServerSidePropsContext) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
  );

  return await axiosProject.get<CatalogModel[]>("/catalog/");
};
