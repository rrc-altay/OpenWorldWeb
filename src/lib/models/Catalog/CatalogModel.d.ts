import { CatalogItemModel } from "@/lib/models/Catalog/CatalogItemModel";

export interface CatalogModel {
  readonly title: string;
  readonly slug: string;
  readonly path: string;
  readonly data: CatalogItemModel;
}

export type CatalogModelArr = CatalogModel[];
