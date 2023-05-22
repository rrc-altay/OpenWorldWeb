import React, { ReactNode } from "react";
import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";

interface BoxContainer {
  title?: string;
  children: ReactNode;
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
  box-shadow: 0 0 10px rgba(32, 43, 109, 0.1);
  border-radius: 50px;
`;

const TitleSC = styled(Typography)`
  text-align: center;
  margin-bottom: 24px;
`;
export default React.memo(BoxContainer);
