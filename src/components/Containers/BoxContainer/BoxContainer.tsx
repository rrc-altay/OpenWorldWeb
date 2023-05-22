import React from "react";
import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Children } from "@/types/types";

interface BoxContainer extends Children {
  title?: string;
}
const BoxContainer = ({ title, children }: BoxContainer) => {
  return (
    <ContainerSC>
      {title && <TitleSC variant="h1">{title}</TitleSC>}
      {children}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  min-height: 463px;
  padding: 24px 36px;

  background: ${ColorScheme.MAIN};
  box-shadow: 0 0 10px ${ColorScheme.SHADOW};
  border-radius: 50px;
`;

const TitleSC = styled(Typography)`
  text-align: center;
  margin-bottom: 24px;
`;
export default React.memo(BoxContainer);
