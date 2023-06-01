import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";
import { zIndexes } from "@/styles/zIndexes";
import InfoIcon from "@/assets/icons/InfoIcon.svg";

const ContainerSC = styled("div")`
  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 16px 20px 24px;
  background-color: ${ColorScheme.PRIMARY_LIGHT};

  border-radius: 20px;

  border: 1px solid ${ColorScheme.MAIN};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding: 13px 16px 13px 21px;
    margin-top: 8px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-top: 0;
    min-height: 88px;
  }
`;

const TelSC = styled("a")`
  display: block;

  color: ${ColorScheme.MAIN};

  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  margin-right: 16px;

  z-index: ${zIndexes.UPPER};

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    font-size: 18px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    flex: 1;
    text-align: center;
  }
`;

const InfoSC = styled("a")`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  flex-shrink: 0;

  background-color: ${ColorScheme.MAIN};
  border-radius: 50%;

  z-index: ${zIndexes.UPPER};
  border: 1px solid ${ColorScheme.MAIN};
`;

const IconSC = styled(InfoIcon)`
  width: 28px;
  height: 28px;

  & > g > path {
    fill: ${ColorScheme.PRIMARY_THREE};
    stroke: ${ColorScheme.PRIMARY_THREE};
  }
`;

const WaveContainerSC = styled("div")`
  position: absolute;

  left: -1px;
  bottom: -5px;

  z-index: ${zIndexes.DEFAULT};
`;

const WaveTwoContainerSC = styled("div")`
  position: absolute;

  left: 50%;
  top: 0;
  z-index: ${zIndexes.DEFAULT};

  transform: translateX(-50%);

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    top: -10px;
  }
`;

export const useAIPhoneStyles = () => ({
  ContainerSC,
  TelSC,
  InfoSC,
  IconSC,
  WaveContainerSC,
  WaveTwoContainerSC,
});
