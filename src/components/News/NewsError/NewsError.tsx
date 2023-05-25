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
`;

export default React.memo(NewsError);
