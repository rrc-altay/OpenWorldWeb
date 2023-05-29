import React from "react";
import Link from "next/link";
import { ElementsModel } from "@/lib/models/Catalog/properties/ElementsModel";
import { useAIElementsStyles } from "@/components/Containers/AsideContainer/AsideItem/AIElements/AIElements.styles";
import { RoutesNamespace } from "@/lib/constants/routesNamespace";

interface AIElementsProps {
  elements: ElementsModel[];
}

const AIElements = ({ elements }: AIElementsProps) => {
  return (
    <ContainerSC>
      {elements.map((elementsItem) => (
        <ItemSC key={elementsItem.path}>
          <Link href={`${RoutesNamespace.DYNAMIC}/${elementsItem.path}`}>
            {elementsItem.title}
          </Link>
        </ItemSC>
      ))}
    </ContainerSC>
  );
};

const { ContainerSC, ItemSC } = useAIElementsStyles();

export default React.memo(AIElements);
