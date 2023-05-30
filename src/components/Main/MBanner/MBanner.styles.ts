import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("section")`
  width: 100%;
  height: 416px;
  background: ${ColorScheme.PRIMARY};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    height: 333px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    height: 204px;
  }
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
  
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    top: 10px;
    right: 15px;
  }

  @media (max-width: ${Breakpoints.SMALL_MOBILE}px) {
    right: 10px;
  }
}
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
