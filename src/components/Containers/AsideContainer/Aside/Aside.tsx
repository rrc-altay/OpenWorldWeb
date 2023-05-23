import React from "react";
import { styled } from "@mui/material";

const Aside = () => {
  return <ContainerSC>aside</ContainerSC>;
};

const ContainerSC = styled("aside")`
  flex: 1;
`;

export default React.memo(Aside);
