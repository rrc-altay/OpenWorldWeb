import React from "react";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";
import { ContentItemModel } from "@/lib/models/DynamicContent/ContentItemModel";
import { getUUID } from "@/lib/modules/uuid";
import DCItem from "@/components/DynamicContent/DCItem/DCItem";

interface DynamicContentProps {
  content: ContentItemModel[];
}

const DynamicContent = ({ content }: DynamicContentProps) => {
  return (
    <ContainerSC>
      {content.map((contentItem) => (
        <WrapperSC key={getUUID()}>
          <DCItem {...contentItem} />
        </WrapperSC>
      ))}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const WrapperSC = styled("div")`
  margin-bottom: 32px;

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-bottom: 28px;
  }
`;

export default React.memo(DynamicContent);
