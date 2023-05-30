import { Button, css, styled, Typography } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";
import ColorScheme from "@/styles/theme/colorScheme";
import { BoxWrapperProps } from "@/components/Wrappers/BoxWrapper/types";

const PaddingBottom = css`
  padding-bottom: 36px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding-bottom: 24px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    padding-bottom: 18px;
  }
`;

const ContainerSC = styled("div")<Pick<BoxWrapperProps, "isPaddingBottom">>`
  padding-top: 24px;
  padding-left: 36px;
  padding-right: 36px;

  margin-bottom: 30px;

  ${({ isPaddingBottom }) => isPaddingBottom && PaddingBottom};

  background: ${ColorScheme.MAIN};
  box-shadow: 0 0 10px ${ColorScheme.SHADOW};
  border-radius: 50px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding-top: 20px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-bottom: 20px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 20px;
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const TitleSC = styled(Typography)`
  text-align: center;
  margin-bottom: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 20px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const ButtonSC = styled(Button)`
  display: block;
  max-width: 256px;
  margin: 0 auto 30px;

  text-align: center;
`;

export const useBoxWrapperStyles = () => ({
  ContainerSC,
  TitleSC,
  ButtonSC,
});
