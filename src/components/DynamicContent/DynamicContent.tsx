import React from "react";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";
import DCMap from "@/components/DynamicContent/DCMap/DCMap";

const DynamicContent = () => {
  return (
    <ContainerSC>
      {/*<DCImg />*/}
      <DCMap />
      {/*<Pdf*/}
      {/*  name=""*/}
      {/*  link=""*/}
      {/*  autoOpen={true}*/}
      {/*/>*/}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-bottom: 28px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

// const WrapperSC = styled("div")`
//margin-bottom: 32px;
// `;

export default React.memo(DynamicContent);
