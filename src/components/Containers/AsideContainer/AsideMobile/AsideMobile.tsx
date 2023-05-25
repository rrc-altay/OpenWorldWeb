import React from "react";
import { AsideContainerProps } from "@/components/Containers/AsideContainer/types";
import { styled } from "@mui/material";
import AccordionUI from "@/UI/AccordionUI/AccordionUI";
import AsideItem from "@/components/Containers/AsideContainer/AsideItem/AsideItem";
import { useAsideMobile } from "@/components/Containers/AsideContainer/AsideMobile/useAsideMobile";

const AsideMobile = ({ children, catalog }: AsideContainerProps) => {
  useAsideMobile(catalog);

  return (
    <>
      <ContainerSC>
        {catalog.map((catalogItem) => (
          <AccordionUI
            key={catalogItem.path}
            title={catalogItem.title}>
            <AsideItem {...catalogItem} />
          </AccordionUI>
        ))}
      </ContainerSC>
      {children}
    </>
  );
};

const ContainerSC = styled("section")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;

  margin-bottom: 33px;
`;

export default React.memo(AsideMobile);
