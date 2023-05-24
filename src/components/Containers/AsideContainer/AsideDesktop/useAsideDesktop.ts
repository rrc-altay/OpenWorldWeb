import { CatalogModel } from "@/lib/models/Catalog/CatalogModel";

export const useAsideDesktop = (catalog: CatalogModel[]) => {
  const catalogMiddleLength = Math.ceil(catalog.length / 2);
  const leftAside = catalog.slice(0, catalogMiddleLength);
  const rightAside = catalog.slice(catalogMiddleLength);

  return {
    leftAside,
    rightAside,
  };
};
