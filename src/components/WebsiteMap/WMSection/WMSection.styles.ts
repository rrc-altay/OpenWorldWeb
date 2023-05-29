import { styled, Typography } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("div")`
  margin-bottom: 40px;
`;

const TitleSC = styled(Typography)`
  margin-bottom: 24px;

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    font-size: 13.5px;
    line-height: 16px;

    margin-bottom: 11px;
  }
`;

const ListSC = styled("ul")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const useWMSectionStyles = () => ({
  ContainerSC,
  TitleSC,
  ListSC,
});
