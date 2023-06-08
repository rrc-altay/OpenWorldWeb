import React from "react";
import { ElementsModel } from "@/lib/models/Catalog/properties/ElementsModel";
import { useAIElementsStyles } from "@/components/Containers/AsideContainer/AsideItem/AIElements/AIElements.styles";
import { getDynamicPath } from "@/lib/services/services";

interface AIElementsProps {
  elements: ElementsModel[];
}

const AIElements = ({ elements }: AIElementsProps) => {
  return (
    <ContainerSC>
      {elements.map(({ path, title }) => (
        <ItemSC key={path}>
          <a href={getDynamicPath(path)}>{title}</a>
        </ItemSC>
      ))}
    </ContainerSC>
  );
};

const { ContainerSC, ItemSC } = useAIElementsStyles();

export default React.memo(AIElements);
