import { Button, styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";
import ColorScheme from "@/styles/theme/colorScheme";

const ContainerSC = styled("div")`
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: 250px;
  }
`;

const TopContainerSC = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    flex-direction: column;
    margin-bottom: 16px;
    margin-top: 6px;
  }
`;

const DownloadImgSC = styled("a")`
  display: block;

  width: 81px;
  height: 81px;
  margin-right: 14px;

  flex-shrink: 0;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 100%;
    height: 100%;

    max-width: 167px;
    max-height: 167px;

    margin-right: 0;
    margin-bottom: 12px;
  }
`;

const ImgSC = styled("img")`
  width: 100%;
  height: 100%;
`;

const ImgTextSC = styled("p")`
  width: 100%;
  max-width: 195px;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: ${ColorScheme.GRAY_LIGHT};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 13.5px;
    line-height: 16px;
    text-align: center;
    max-width: none;
  }
`;

const LinkSC = styled("a")`
  display: block;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: ${ColorScheme.SECONDARY_LIGHT};
  transition: 0.2s all linear;

  &:hover {
    color: ${ColorScheme.SECONDARY_DARK};
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    text-align: center;
    margin-bottom: 16px;
  }
`;

const DownloadButtonSC = styled(Button)`
  display: none;

  width: 100%;
  min-width: auto;
  max-height: 48px;
  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: block;
  }
`;

export const useAIAppStyles = () => ({
  ContainerSC,
  TopContainerSC,
  DownloadImgSC,
  ImgSC,
  ImgTextSC,
  LinkSC,
  DownloadButtonSC,
});