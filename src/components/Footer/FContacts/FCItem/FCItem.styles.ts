import { styled, css } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

const text = css`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  white-space: pre-wrap;
  color: ${ColorScheme.SECONDARY_DARK};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 12px;
  }
`;

const ContainerSC = styled("li")`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const IconContainerSC = styled("div")`
  margin-right: 20px;
  & > svg {
    @media (max-width: ${Breakpoints.BIG_TABLET}px) {
      width: 23px;
      height: 23px;
    }

    & > path {
      fill: ${ColorScheme.SECONDARY_DARK};
    }
  }
`;
const ParagraphSC = styled("p")`
  ${text}
`;
const AnchorSC = styled("a")`
  ${text}
`;

export const useFCItemStyles = () => ({
  ContainerSC,
  IconContainerSC,
  ParagraphSC,
  AnchorSC,
});
