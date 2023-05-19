import React from "react";
import { useFCItemStyles } from "@/components/Footer/FContacts/FCItem/FCItem.styles";
import { AboutItemProps } from "@/types/types";

const FCItem = ({ title, href = "", Icon }: AboutItemProps) => {
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
  useFCItemStyles();

export default React.memo(FCItem);
