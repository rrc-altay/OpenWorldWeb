import { CatalogModelArr } from "@/lib/models/Catalog/CatalogModel";
import { useEffect, useMemo, useState } from "react";
import { useSmallTablet, useTablet } from "@/hooks/useAdaptive";

type SectionState = CatalogModelArr[];

export const useAsideMobile = (catalog: CatalogModelArr) => {
  const isTable = useTablet();
  const isSmallTable = useSmallTablet();

  const [sections, setSections] = useState<SectionState>([]);

  const catalogLength = catalog.length;

  const columnCount = useMemo(() => {
    if (isSmallTable) return catalogLength;
    if (isTable) return Math.ceil(catalogLength / 2);
    return Math.ceil(catalogLength / 3);
  }, [isTable, isSmallTable, catalogLength]);

  useEffect(() => {
    setSections([]);

    if (catalogLength) {
      const result: SectionState = [];
      let columnArr: CatalogModelArr = [];

      for (let i = 1; i <= catalogLength; i++) {
        columnArr.push(catalog[i - 1]);

        if (i % columnCount === 0 || i === catalogLength) {
          result.push(columnArr);
          columnArr = [];
        }
      }
      setSections(result);
    }
  }, [catalog, columnCount]);

  return {
    sections,
  };
};
