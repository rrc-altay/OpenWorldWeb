import React from "react";
import Link from "next/link";
import { ElementsModel } from "@/lib/models/Catalog/properties/ElementsModel";
import { useAIElementsStyles } from "@/components/Containers/AsideContainer/AsideItem/AIElements/AIElements.styles";
import { getDynamicPath } from "@/lib/services/services";
import { useRouter } from "next/router";

interface AIElementsProps {
  elements: ElementsModel[];
}

const AIElements = ({ elements }: AIElementsProps) => {
  const { asPath } = useRouter();

  return (
    <ContainerSC>
      {elements.map(({ path, title }) => {
        const href = getDynamicPath(path);

        return (
          <ItemSC key={path}>
            <Link href={asPath === href ? "#" : href}>{title}</Link>
          </ItemSC>
        );
      })}
    </ContainerSC>
  );
};

const { ContainerSC, ItemSC } = useAIElementsStyles();

export default React.memo(AIElements);
