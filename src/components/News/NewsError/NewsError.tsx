import React from "react";
import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";

type NewsErrorProps = {
  hasError: string;
};

const NewsError = ({ hasError }: NewsErrorProps) => {
  return <ContainerSC>{hasError}</ContainerSC>;
};

const ContainerSC = styled("p")`
  color: ${ColorScheme.ERROR};
  margin: 10px 0;
`;

export default React.memo(NewsError);
