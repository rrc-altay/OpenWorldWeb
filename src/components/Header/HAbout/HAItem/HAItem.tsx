import React from "react";
import { useHAItemStyles } from "@/components/Header/HAbout/HAItem/HAItem.styles";
import { AboutItemProps } from "@/types/types";

const HAItem = ({ title, href = "", Icon }: AboutItemProps) => {
  return (
    <ContainerSC>
      <IconContainerSC>
        <Icon />
      </IconContainerSC>
      {href && <AnchorSC href={href}>{title}</AnchorSC>}
      {!href && <ParagraphSC>{title}</ParagraphSC>}
    </ContainerSC>
  );
};

const { ContainerSC, IconContainerSC, ParagraphSC, AnchorSC } =
  useHAItemStyles();

export default React.memo(HAItem);
