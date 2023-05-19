import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";

const ContainerSC = styled("section")`
  width: 100%;
  height: 416px;
  background: ${ColorScheme.PRIMARY};
`;

const WrapperSC = styled("div")`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const AccessibilityContainerSC = styled("div")`
  position: absolute;
  top: 32px;
  right: 0;
`;

const ImageSC = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const useMBannerStyles = () => ({
  ContainerSC,
  WrapperSC,
  AccessibilityContainerSC,
  ImageSC,
});
