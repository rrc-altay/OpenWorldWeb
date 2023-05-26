import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import Link from "next/link";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("nav")``;

const ListSC = styled("ul")`
  display: flex;
`;

const LiSC = styled("li")<{ isActive: boolean }>`
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;

  color: ${({ isActive }) =>
    isActive ? ColorScheme.PRIMARY : ColorScheme.GRAY_LIGHT};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 14px;
    line-height: 17px;
  }
`;
const LinkSC = styled(Link)`
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
