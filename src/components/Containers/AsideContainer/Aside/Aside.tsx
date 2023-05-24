import React from "react";
import { styled } from "@mui/material";
import { CatalogProps } from "@/types/types";
import AsideItem from "@/components/Containers/AsideContainer/AsideItem/AsideItem";
import { Breakpoints } from "@/styles/breakpoints";

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
  width: 100%;
  max-width: 297px;

  flex-grow: 1;
  flex-shrink: 0.5;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    max-width: 250px;
  }
`;

export default React.memo(Aside);
