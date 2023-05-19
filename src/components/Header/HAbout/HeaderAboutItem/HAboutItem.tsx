import React, { FC, SVGProps } from "react";
import { useHAboutItemStyles } from "@/components/Header/HAbout/HeaderAboutItem/HAboutItem.styles";

interface HAboutItemProps {
  title: string;
  href?: string;
  Icon: FC<SVGProps<SVGElement>>;
}

const HAboutItem = ({ title, href = "", Icon }: HAboutItemProps) => {
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
  useHAboutItemStyles();

export default React.memo(HAboutItem);
