import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Map } from "@pbe/react-yandex-maps";

const ContainerSC = styled("div")``;

const TitleSC = styled(Typography)`
  color: ${ColorScheme.SECONDARY_LIGHT};
  margin-bottom: 24px;
`;

const TypographySC = styled(Typography)`
  color: ${ColorScheme.SECONDARY_LIGHT};
  margin-bottom: 32px;
`;

const MapContainerSC = styled("div")`
  width: 100%;
  height: 262px;

  margin-bottom: 20px;

  overflow: hidden;
  border-radius: 30px;
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
`;

export const useDCMapStyles = () => ({
  ContainerSC,
  TitleSC,
  TypographySC,
  MapContainerSC,
  MapSC,
  ImageSC,
});
