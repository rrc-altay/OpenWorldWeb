import { styled, Typography } from "@mui/material";

const ContainerSC = styled("div")`
  margin-bottom: 38px;
`;

const ListSC = styled("ul")`
  padding-left: 25px;

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const ContentTitleSC = styled(Typography)`
  margin-bottom: 20px;
`;

export const useSearchResultStyles = () => ({
  ContainerSC,
  ListSC,
  ContentTitleSC,
});
