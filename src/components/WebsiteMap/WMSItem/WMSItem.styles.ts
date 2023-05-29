import { css, styled } from "@mui/material";
import Link from "next/link";
import ColorScheme from "@/styles/theme/colorScheme";
import { WMSItemProps } from "@/components/WebsiteMap/WMSItem/WMSItem";
import { Breakpoints } from "@/styles/breakpoints";

const HorizontalPaddingCSS = css`
  padding-left: 8px;
  padding-right: 8px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding-bottom: 10px;
  }

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

const ItemSC = styled("li")<Pick<WMSItemProps, "isHorizontalPadding">>`
  margin-right: 20px;

  padding-top: 10px;
  padding-bottom: 10px;
  ${({ isHorizontalPadding }) => isHorizontalPadding && HorizontalPaddingCSS};

  margin-bottom: 10px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 0;
    margin-right: 0;
  }
`;

const LinkSC = styled(Link)`
  display: flex;

  font-size: 16px;
  font-weight: 600;
  line-height: 19px;

  color: ${ColorScheme.PRIMARY};

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    font-size: 13.5px;
    line-height: 16px;
  }
`;

export const useWMSItemStyles = () => ({
  ItemSC,
  LinkSC,
});
