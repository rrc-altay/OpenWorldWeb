import React from "react";
import { useWMSItemStyles } from "@/components/WebsiteMap/WMSItem/WMSItem.styles";
import { ElementsModel } from "@/lib/models/Catalog/properties/ElementsModel";

export type WMSItemProps = ElementsModel & {
  target?: string;
  isPrefix?: boolean;
  isHorizontalPadding?: boolean;
};

const WMSItem = ({
  slug,
  path,
  title,
  target = "",
  isPrefix = true,
  isHorizontalPadding = true,
}: WMSItemProps) => {
  return (
    <ItemSC
      key={slug}
      isHorizontalPadding={isHorizontalPadding}>
      <LinkSC
        href={path}
        target={target}>
        {isPrefix && <span>—&nbsp;</span>}
        {title}
      </LinkSC>
    </ItemSC>
  );
};

const { ItemSC, LinkSC } = useWMSItemStyles();

export default React.memo(WMSItem);
