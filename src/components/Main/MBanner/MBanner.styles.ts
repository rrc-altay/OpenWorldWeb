import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";
import { zIndexes } from "@/styles/zIndexes";

const ContainerSC = styled("section")`
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 416px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    height: 333px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    height: 300px;
  }
`;

const ImageSC = styled("img")`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${zIndexes.DEFAULT};

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AccessibilityContainerSC = styled("div")`
  position: absolute;
  
  top: 32px;
  right: 0;
  z-index: ${zIndexes.UPPER_TWO};
  
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    top: 10px;
    right: 15px;
  }

  @media (max-width: ${Breakpoints.SMALL_MOBILE}px) {
    right: 10px;
  }
}
`;

const WrapperSC = styled("div")`
  position: relative;
  z-index: ${zIndexes.UPPER};

  height: 100%;

  display: flex;
  align-items: center;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const LogoSC = styled("img")`
  max-width: 163px;
  max-height: 128px;
  margin-right: 54px;
  object-fit: cover;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-right: 0;
    margin-bottom: 20px;

    max-width: 140px;
    max-height: 110px;
  }

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    margin-bottom: 15px;

    max-width: 105px;
    max-height: 83px;
  }
`;

const TitleSC = styled("h1")`
  margin-top: 0;
  margin-bottom: 0;

  max-width: 743px;

  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;

  color: ${ColorScheme.MAIN};
  text-shadow: 0 0 5.44914px rgba(0, 0, 0, 0.25);
  white-space: pre-wrap;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: 571px;

    font-size: 22px;
    line-height: min(28px);
    text-align: center;
  }

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    display: none;

    max-width: 335px;

    font-size: 15px;
    line-height: min(20px);
  }
`;

const TitleMobileSC = styled(TitleSC)`
  display: none;

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    display: block;
  }
`;

export const useMBannerStyles = () => ({
  ContainerSC,
  WrapperSC,
  AccessibilityContainerSC,
  ImageSC,
  LogoSC,
  TitleSC,
  TitleMobileSC,
});
