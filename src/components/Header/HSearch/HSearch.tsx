import React from "react";
import SearchUI from "@/UI/SearchUI/SearchUI";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const HSearch = () => {
  return (
    <ContainerSC>
      <SearchUI />
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  flex: 1;
  margin-right: 50px;

  @media (max-width: ${Breakpoints.TABLE}px) {
    margin-right: 32px;
    height: 37px;
  }
`;

export default React.memo(HSearch);
