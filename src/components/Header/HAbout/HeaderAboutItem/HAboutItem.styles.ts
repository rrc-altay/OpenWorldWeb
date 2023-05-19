import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";

const ContainerSC = styled("li")`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const IconContainerSC = styled("div")`
  margin-right: 20px;
  & > svg {
    & > path {
      fill: ${ColorScheme.PRIMARY};
    }
  }
`;
const ParagraphSC = styled("p")`
  white-space: pre-wrap;
  color: ${ColorScheme.PRIMARY_DARK};
`;
const AnchorSC = styled("a")`
  color: ${ColorScheme.PRIMARY_DARK};
`;

export const useHAboutItemStyles = () => ({
  ContainerSC,
  IconContainerSC,
  ParagraphSC,
  AnchorSC,
});
