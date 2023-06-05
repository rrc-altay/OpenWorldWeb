import { Collapse, css, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

const ActiveCollapseCSS = css`
  margin-top: 16px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 12px;
  }
`;

const ContainerSC = styled("div")``;

const TextSC = styled("p")`
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;

  color: ${ColorScheme.GRAY};

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    font-size: 13.5px;
    line-height: 16px;
  }
`;

const ButtonContainerSC = styled("div")`
  display: flex;
  justify-content: space-between;

  & > *:first-child {
    margin-right: 10px;
  }
`;

const ButtonSC = styled("button")`
  padding: 16px 0;

  background-color: transparent;
  color: ${ColorScheme.SECONDARY_LIGHT};

  font-size: 14px;
  font-weight: 600;
  line-height: 17px;

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    font-size: 13px;
    line-height: 17px;
  }
`;

const CollapseSC = styled(Collapse)<{ visible: boolean }>`
  margin-top: ${({ visible }) => visible && ActiveCollapseCSS};
`;

const PdfContainerSC = styled("div")`
  position: relative;

  width: 100%;
  height: 419px;
`;

const PdfWrapperSC = styled("div")`
  position: relative;

  width: 100%;
  height: 100%;

  z-index: 1;
`;

export const usePdfStyles = () => ({
  ContainerSC,
  TextSC,
  ButtonContainerSC,
  ButtonSC,
  CollapseSC,
  PdfContainerSC,
  PdfWrapperSC,
});
