import { Button, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperSC = styled("div")`
  padding-bottom: 16px;
`;

const ParagraphSC = styled("pre")`
  width: 100%;
  max-width: 100%;

  white-space: pre-wrap;

  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;

  color: ${ColorScheme.GRAY};

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    font-size: 13.5px;
    line-height: 16px;
  }
`;

const DateContainerSC = styled("div")`
  margin-top: 27px;

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-top: 16px;
  }
`;

const SwiperContainerSC = styled("div")`
  margin-top: 30px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 26px;

    max-width: none;
    max-height: none;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-top: 16px;
  }
`;

const ButtonSC = styled(Button)`
  margin: 30px 0;
`;

export const useNEwsIdStyles = () => ({
  ContainerSC,
  WrapperSC,
  ParagraphSC,
  DateContainerSC,
  SwiperContainerSC,
  ButtonSC,
});
