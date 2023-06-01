import { styled, Typography } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("div")`
  margin-bottom: 38px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 16px;
  }
`;

const ListSC = styled("ul")`
  padding-left: 25px;

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const ContentTitleSC = styled(Typography)`
  margin-bottom: 20px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 10px;
  }
`;

export const useSearchResultStyles = () => ({
  ContainerSC,
  ListSC,
  ContentTitleSC,
});
