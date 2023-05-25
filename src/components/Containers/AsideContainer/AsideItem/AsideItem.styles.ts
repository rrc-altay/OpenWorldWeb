import { styled, Typography } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("div")`
  margin-bottom: 50px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 10px;
  }
`;

const TitleSC = styled(Typography)`
  margin-bottom: 20px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }
`;

export const useAsideItemStyles = () => ({
  ContainerSC,
  TitleSC,
});
