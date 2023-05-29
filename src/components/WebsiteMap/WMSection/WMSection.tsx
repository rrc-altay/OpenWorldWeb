import React from "react";
import { ElementsModel } from "@/lib/models/Catalog/properties/ElementsModel";
import { useWMSectionStyles } from "@/components/WebsiteMap/WMSection/WMSection.styles";
import WMSItem from "@/components/WebsiteMap/WMSItem/WMSItem";

interface WMSectionProps {
  title: string;
  elements: ElementsModel[];
}

const WMSection = ({ title, elements }: WMSectionProps) => {
  return (
    <ContainerSC>
      <TitleSC variant="h3">{title}</TitleSC>
      <ListSC>
        {elements.map((elementItem) => (
          <WMSItem
            key={elementItem.slug}
            {...elementItem}
          />
        ))}
      </ListSC>
    </ContainerSC>
  );
};

const { ContainerSC, TitleSC, ListSC } = useWMSectionStyles();

export default React.memo(WMSection);
