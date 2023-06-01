import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";

const ContainerSC = styled("li")`
  list-style-type: decimal;

  margin-bottom: 17px;

  &::marker {
    color: ${ColorScheme.SECONDARY};

    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
`;

const WrapperSC = styled("a")`
  display: block;
`;

const TitleSC = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
`;
const DescriptionSC = styled(TitleSC)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const DateSC = styled("div")`
  margin-top: 5px;
  & > * {
    text-align: left !important;
  }
`;

export const useSearchItemStyles = () => ({
  ContainerSC,
  WrapperSC,
  TitleSC,
  DescriptionSC,
  DateSC,
});
