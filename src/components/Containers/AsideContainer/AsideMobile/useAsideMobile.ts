import { CatalogModelArr } from "@/lib/models/Catalog/CatalogModel";
import { useEffect, useMemo, useState } from "react";
import { useSmallTablet, useTablet } from "@/hooks/useAdaptive";

type SectionState = CatalogModelArr[];

export const useAsideMobile = (catalog: CatalogModelArr) => {
  const [sections, setSections] = useState<SectionState>([]);

  const isTable = useTablet();
  const isSmallTable = useSmallTablet();

  const catalogLength = catalog.length;

  const columnsCount = useMemo(() => {
    if (isSmallTable) return 1;
    if (isTable) return 2;
    return 3;
  }, [isTable, isSmallTable, catalogLength]);

  useEffect(() => {
    setSections([]);

    if (catalogLength) {
      let prevIndexPush = 0;
      const result: SectionState = [];

      for (let i = 0; i < columnsCount; i++) {
        result[i] = [];
      }

      for (let i = 1; i <= catalogLength; i++) {
        const currentItem = catalog[i - 1];
        result[prevIndexPush].push(currentItem);

        if (prevIndexPush + 1 < columnsCount) {
          prevIndexPush += 1;
        } else {
          prevIndexPush = 0;
        }
      }
      setSections(result);
    }
  }, [catalog, columnsCount]);

  return {
    sections,
  };
};
