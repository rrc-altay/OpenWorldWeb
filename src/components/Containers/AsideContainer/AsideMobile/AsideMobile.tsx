import React from "react";
import { AsideContainerProps } from "@/components/Containers/AsideContainer/types";
import { styled } from "@mui/material";
import AccordionUI from "@/UI/AccordionUI/AccordionUI";
import AsideItem from "@/components/Containers/AsideContainer/AsideItem/AsideItem";
import { useAsideMobile } from "@/components/Containers/AsideContainer/AsideMobile/useAsideMobile";
import { Breakpoints } from "@/styles/breakpoints";

const AsideMobile = ({ children, catalog }: AsideContainerProps) => {
  const { sections } = useAsideMobile(catalog);

  return (
    <>
      <ContainerSC>
        {sections.map((sectionItem, index) => (
          <WrapperSC key={index}>
            {sectionItem.map((catalogItem) => (
              <ItemSC key={catalogItem.path}>
                <AccordionUI
                  key={catalogItem.path}
                  title={catalogItem.title}>
                  <AsideItem {...catalogItem} />
                </AccordionUI>
              </ItemSC>
            ))}
          </WrapperSC>
        ))}
      </ContainerSC>
      {children}
    </>
  );
};

const ContainerSC = styled("section")`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;

  margin-bottom: 33px;

  & > *:last-child > * {
    margin-right: 0;
  }
`;

const WrapperSC = styled("div")`
  width: 33%;

  display: flex;
  flex-direction: column;

  @media (max-width: ${Breakpoints.TABLE}px) {
    width: 50%;
  }

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    width: 100%;
  }
`;

const ItemSC = styled("div")`
  margin-right: 15px;
`;

export default React.memo(AsideMobile);
