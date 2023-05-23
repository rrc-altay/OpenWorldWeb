import { FC, ReactNode, SVGProps } from "react";
import { CatalogModel } from "@/lib/models/Catalog/CatalogModel";

export type Children = {
  children: ReactNode;
};

export interface AboutItemProps {
  title: string;
  href?: string;
  Icon: FC<SVGProps<SVGElement>>;
}

export interface CatalogProps {
  catalog: CatalogModel[];
}
