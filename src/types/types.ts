import { FC, ReactNode, SVGProps } from "react";
import { CatalogModelArr } from "@/lib/models/Catalog/CatalogModel";
import { ContentModel } from "@/lib/models/DynamicContent/ContentModel";

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

export interface ContentProps {
  content: ContentModel;
}
