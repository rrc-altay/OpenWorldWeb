import React from "react";
import { styled } from "@mui/material";
import { CatalogProps } from "@/types/types";
import AsideItem from "@/components/Containers/AsideContainer/AsideItem/AsideItem";

const Aside = ({ catalog }: CatalogProps) => {
  return (
    <ContainerSC>
      {catalog.map((catalogItem) => (
        <AsideItem
          key={catalogItem.slug}
          {...catalogItem}
        />
      ))}
    </ContainerSC>
  );
};

const ContainerSC = styled("aside")`
  flex-grow: 1;
  flex-shrink: 0.5;
  max-width: 297px;
`;

export default React.memo(Aside);
