import React from "react";
import Pdf from "@/components/Pdf/Pdf";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const DynamicContent = () => {
  return (
    <ContainerSC>
      <Pdf
        name=""
        link=""
        autoOpen={true}
      />
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  margin-bottom: 32px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 28px;
  }
`;

export default React.memo(DynamicContent);
