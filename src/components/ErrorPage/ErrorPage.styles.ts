import { Button, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";

const ContainerSC = styled("main")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WrapperSC = styled("section")`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconContainerSC = styled("div")`
  margin-bottom: 24px;
`;

const TitleSC = styled("h1")`
  margin: 0 0 8px 0;

  font-weight: 800;
  font-size: 80px;
  line-height: 96px;
  text-align: center;
  text-transform: uppercase;

  color: ${ColorScheme.PRIMARY_LIGHT};
`;
const SubtitleSC = styled("h2")`
  margin: 0 0 32px 0;

  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;

  color: ${ColorScheme.PRIMARY_LIGHT};
`;
const DescriptionSC = styled("p")`
  max-width: 400px;
  margin-bottom: 70px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: ${ColorScheme.GRAY};
`;

const ButtonSC = styled(Button)`
  min-width: 256px;
`;

export const useErrorPageStyles = () => ({
  ContainerSC,
  WrapperSC,
  IconContainerSC,
  TitleSC,
  SubtitleSC,
  DescriptionSC,
  ButtonSC,
});
