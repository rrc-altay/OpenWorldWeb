import { css, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

type BorderDirection =
  | "border-top-left-radius"
  | "border-top-right-radius"
  | "border-bottom-left-radius"
  | "border-bottom-right-radius";

const BorderRadiusCSS = (borderDirection: BorderDirection) => css`
  ${borderDirection}: 30px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    ${borderDirection}: 26px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    ${borderDirection}: 12px;
  }
`;

const ContainerSC = styled("div")`
  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    overflow-y: scroll;
  }
`;

const TableSC = styled("table")`
  width: 100%;
  border-spacing: 4px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    border-spacing: 3px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    border-spacing: 3px;
  }
`;

const TBodySC = styled("tbody")<{ isOdd: boolean }>`
  // header radius
  & > tr:first-child {
    & > th:first-child {
      ${BorderRadiusCSS("border-top-left-radius")}
    }

    & > th:last-child {
      ${BorderRadiusCSS("border-top-right-radius")}
    }
  }

  // last element radius
  & > tr:last-child {
    & > td:first-child {
      ${BorderRadiusCSS("border-bottom-left-radius")}
    }

    & > td:last-child {
      ${BorderRadiusCSS("border-bottom-right-radius")}
    }
  }

  & > tr:nth-of-type(${({ isOdd }) => (isOdd ? "odd" : "even")}) {
    background-color: ${ColorScheme.MAIN_TWO};
  }
`;

const ThSC = styled("th")`
  padding: 32px 10px;

  color: ${ColorScheme.SECONDARY_DARK};
  background: ${ColorScheme.PRIMARY_LIGHT};

  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding: 28px 10px;

    font-size: 15px;
    line-height: 18px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    padding: 10px 15px;

    font-size: 12px;
    line-height: 14px;
  }
`;

const TdSC = styled("td")`
  min-width: 83px;
  padding: 20px 4px;

  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  text-align: center;
  white-space: pre-wrap;

  color: ${ColorScheme.GRAY_LIGHT};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 13.5px;
    line-height: 16px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    padding: 26px 4px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const useTableUIStyles = () => ({
  ContainerSC,
  TableSC,
  TBodySC,
  ThSC,
  TdSC,
});
