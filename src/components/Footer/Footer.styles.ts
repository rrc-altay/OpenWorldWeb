import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

export const FTitleSC = styled(Typography)`
  color: ${ColorScheme.PRIMARY_DARK};
  margin-bottom: 20px;

  @media (max-width: ${Breakpoints.TABLE}px) {
    font-size: 14px;
  }
`;

const ContainerSC = styled("footer")`
  background-color: ${ColorScheme.PRIMARY_LIGHT};
`;

const WrapperSC = styled("section")`
  padding-top: 62px;
  padding-bottom: 67px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;
    padding-top: 24px;
    padding-bottom: 20px;
  }
`;
export const useFooterStyles = () => ({
  ContainerSC,
  WrapperSC,
});
