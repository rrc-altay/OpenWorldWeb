import React from "react";
import { AsideContainerProps } from "@/components/Containers/AsideContainer/types";
import AccordionUI from "@/UI/AccordionUI/AccordionUI";
import AsideItem from "@/components/Containers/AsideContainer/AsideItem/AsideItem";
import { useAsideMobile } from "@/components/Containers/AsideContainer/AsideMobile/useAsideMobile";
import { useAsideMobileStyles } from "@/components/Containers/AsideContainer/AsideMobile/AsideMobile.styles";

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

const { ContainerSC, WrapperSC, ItemSC } = useAsideMobileStyles();

export default React.memo(AsideMobile);
