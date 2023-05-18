import React from "react";
import { Box, CircularProgress, styled } from "@mui/material";

const SpinnerUI = () => {
  return (
    <ContainerSC>
      <BackdoorProgressSC
        value={100}
        variant="determinate"
      />
      <ActiveProgressSC />
    </ContainerSC>
  );
};

const ContainerSC = styled(Box)`
  position: relative;
`;

const BackdoorProgressSC = styled(CircularProgress)`
  color: rgba(90, 184, 236, 0.4);
`;

const ActiveProgressSC = styled(CircularProgress)`
  position: absolute;
  left: 0;
  top: 0;

  & > .MuiCircularProgress-svg {
    & > .MuiCircularProgress-circle {
      stroke-dashoffset: 50px;
    }
  }
`;

export default React.memo(SpinnerUI);
