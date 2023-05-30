import React from "react";
import DCItemHOC from "@/components/DynamicContent/DCItemHOC/DCItemHOC";
import { ContentItemModel } from "@/lib/models/DynamicContent/ContentItemModel";
import { styled } from "@mui/material";

const DCItem = (props: ContentItemModel) => {
  return <HiddenContainerSC>{props.text}</HiddenContainerSC>;
};

const HiddenContainerSC = styled("div")`
  display: none;
`;

export default React.memo(DCItemHOC(DCItem));
