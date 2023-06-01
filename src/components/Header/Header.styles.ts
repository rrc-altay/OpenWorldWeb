import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";
import ColorScheme from "@/styles/theme/colorScheme";
import { zIndexes } from "@/styles/zIndexes";

const HeaderSC = styled("header")`
  padding: 14px 0;
  z-index: ${zIndexes.UPPER};

  background-color: ${ColorScheme.MAIN};

  box-shadow: 0 0 10px ${ColorScheme.SHADOW};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    position: sticky;
    top: 0;

    padding: 5px 0;

    box-shadow: 0 0 10px ${ColorScheme.SHADOW_ADAPTIVE};
  }
`;

const WrapperSC = styled("section")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const useHeaderStyles = () => ({
  HeaderSC,
  WrapperSC,
});
