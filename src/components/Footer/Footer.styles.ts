import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";

export const FTitleSC = styled(Typography)`
  color: ${ColorScheme.PRIMARY_DARK};
  margin-bottom: 20px;
`;

const ContainerSC = styled("footer")`
  background-color: ${ColorScheme.PRIMARY_LIGHT};
`;
const WrapperSC = styled("section")`
  padding: 62px 0 67px;
  display: flex;
  justify-content: space-between;
`;
export const useFooterStyles = () => ({
  ContainerSC,
  WrapperSC,
});
