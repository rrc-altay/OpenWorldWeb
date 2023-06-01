import { FC, ReactNode, SVGProps } from "react";
import { CatalogModelArr } from "@/lib/models/Catalog/CatalogModel";
import { DynamicElementModel } from "@/lib/models/DynamicContent/DynamicElementModel";
import { SearchModel } from "@/lib/models/Search/SearchModel";

export type Children = {
  children: ReactNode;
};

export interface AboutItemProps {
  title: string;
  href?: string;
  Icon: FC<SVGProps<SVGElement>>;
}

export interface CatalogProps {
  catalog: CatalogModelArr;
}

export interface DynamicElementProps {
  dynamicPage: DynamicElementModel;
}

export interface SearchProps {
  find: string;
  search: SearchModel;
}
