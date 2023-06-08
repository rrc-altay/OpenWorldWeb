import { css, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("nav")``;

const ListSC = styled("ul")``;

const LiSC = styled("li")<{ isActive: boolean }>`
  display: inline;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;

  color: ${({ isActive }) =>
    isActive ? ColorScheme.PRIMARY : ColorScheme.GRAY_LIGHT};

  transition: 0.2s all linear;

  ${({ isActive }) =>
    !isActive &&
    css`
      &:hover {
        color: ${ColorScheme.PRIMARY_DARK};
      }
    `}

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
    line-height: 17px;
  }
`;
const LinkSC = styled("a")`
  padding: 10px 0;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding: 5px 0;
  }
`;

export const useBreadCrumbsUIStyles = () => ({
  ContainerSC,
  ListSC,
  LiSC,
  LinkSC,
});
