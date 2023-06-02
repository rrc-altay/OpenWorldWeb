import React from "react";
import { styled } from "@mui/material";
import { CatalogProps } from "@/types/types";
import AsideItem from "@/components/Containers/AsideContainer/AsideItem/AsideItem";
import { Breakpoints } from "@/styles/breakpoints";
import GosUslugi from "@/components/GosUslugi/GosUslugi";
import { useBigTablet } from "@/hooks/useAdaptive";

interface AsideProps extends CatalogProps {
  position: "left" | "right";
}

const Aside = ({ catalog, position }: AsideProps) => {
  const isRight = position === "right";
  const isBigTable = useBigTablet();

  return (
    <ContainerSC>
      {catalog.map((catalogItem) => (
        <AsideItem
          key={catalogItem.slug}
          {...catalogItem}
        />
      ))}
      {isRight && !isBigTable && <GosUslugi />}
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
