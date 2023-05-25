import { CatalogItemModel } from "@/lib/models/Catalog/CatalogItemModel";

export interface CatalogModel {
  title: string;
  slug: string;
  path: string;
  data: CatalogItemModel;
}
