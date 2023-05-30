import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Map } from "@pbe/react-yandex-maps";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("div")``;

const TitleSC = styled(Typography)`
  color: ${ColorScheme.SECONDARY_LIGHT};
  font-weight: 700;

  margin-bottom: 24px;

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-bottom: 16px;
  }
`;

const TypographySC = styled(Typography)`
  margin-bottom: 32px;

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-bottom: 20px;
  }

  & > span {
    color: ${ColorScheme.SECONDARY_LIGHT};
  }
`;

const MapContainerSC = styled("div")`
  width: 100%;
  height: 262px;

  margin-bottom: 20px;

  overflow: hidden;
  border-radius: 30px;

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-bottom: 12px;

    border-radius: 12px;
  }
`;

const MapSC = styled(Map)`
  width: 100%;
  height: inherit;
`;

const ImageSC = styled("img")`
  width: 100%;
  height: 100%;

  max-height: 627px;

  object-fit: fill;
  border-radius: 30px;

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    border-radius: 12px;
  }
`;

export const useDCMapStyles = () => ({
  ContainerSC,
  TitleSC,
  TypographySC,
  MapContainerSC,
  MapSC,
  ImageSC,
});
