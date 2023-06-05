import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("li")`
  list-style-type: decimal;
  margin-bottom: 17px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${ColorScheme.SECONDARY};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 20px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    font-size: 13.5px;
  }
`;

const WrapperSC = styled("a")`
  display: block;
`;

const TitleSC = styled(Typography)`
  font-size: inherit;
`;

const DescriptionSC = styled(TitleSC)`
  text-indent: 0;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    -webkit-line-clamp: 3;
  }
`;

const DateSC = styled("div")`
  margin-top: 5px;
  & > * {
    text-align: left !important;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 16px;
    & > * {
      text-align: right !important;
    }
  }
`;

export const useSearchItemStyles = () => ({
  ContainerSC,
  WrapperSC,
  TitleSC,
  DescriptionSC,
  DateSC,
});
