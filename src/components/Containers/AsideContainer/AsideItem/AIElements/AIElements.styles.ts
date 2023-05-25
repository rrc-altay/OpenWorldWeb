import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";
import ColorScheme from "@/styles/theme/colorScheme";

const ContainerSC = styled("ul")`
  & > *:first-child {
    & > a {
      padding-top: 0;
    }
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 6px;
  }
`;

const ItemSC = styled("li")`
  max-width: 254px;

  font-size: 16px;
  line-height: 19px;

  color: ${ColorScheme.GRAY_LIGHT};
  transition: 0.2s all linear;

  &:hover {
    color: ${ColorScheme.SECONDARY_LIGHT};
  }

  & > a {
    display: block;

    width: 100%;
    padding: 2.5px 0;
  }

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 13.5px;
    line-height: 16px;
    padding-left: 20px;
  }
`;

export const useAIElementsStyles = () => ({
  ContainerSC,
  ItemSC,
});
