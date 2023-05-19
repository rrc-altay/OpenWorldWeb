import React from "react";
import SearchUI from "@/UI/SearchUI/SearchUI";
import { styled } from "@mui/material";

const HSearch = () => {
  return (
    <ContainerSC>
      <SearchUI />
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  flex-shrink: 0;
  margin-right: 50px;
`;

export default React.memo(HSearch);
