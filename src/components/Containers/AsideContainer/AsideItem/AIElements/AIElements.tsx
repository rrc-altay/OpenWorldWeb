import React from "react";
import { ElementsModel } from "@/lib/models/Catalog/properties/ElementsModel";
import { styled } from "@mui/material";
import Link from "next/link";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

interface AIElementsProps {
  elements: ElementsModel[];
}

const AIElements = ({ elements }: AIElementsProps) => {
  return (
    <ContainerSC>
      {elements.map((elementsItem) => (
        <ItemSC key={elementsItem.path}>
          <Link href={elementsItem.path}>{elementsItem.title}</Link>
        </ItemSC>
      ))}
    </ContainerSC>
  );
};

const ContainerSC = styled("ul")`
  & > *:first-child {
    & > a {
      padding-top: 0;
    }
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 6px;
  }
`;

const ItemSC = styled("li")`
  max-width: 254px;

  font-size: 16px;
  line-height: 19px;

  color: ${ColorScheme.GRAY_LIGHT};
  transition: 0.2s all linear;

  &:hover {
    color: ${ColorScheme.SECONDARY_LIGHT};
  }

  & > a {
    display: block;

    width: 100%;
    padding: 2.5px 0;
  }

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 13.5px;
    line-height: 16px;
    padding-left: 20px;
  }
`;

export default React.memo(AIElements);
