import { Button, styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("main")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 69px 20px;
`;

const WrapperSC = styled("section")`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconContainerSC = styled("div")`
  margin-bottom: 24px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 32px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-bottom: 24px;
  }
`;

const MobileTitleSC = styled("h2")`
  display: none;

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    display: block;

    font-size: 102px;
    font-weight: 800;
    line-height: 120px;
    color: ${ColorScheme.PRIMARY_LIGHT};
  }
`;

const TitleSC = styled("h1")`
  margin: 0 0 8px 0;

  font-weight: 800;
  font-size: 80px;
  line-height: 96px;
  text-align: center;
  text-transform: uppercase;

  color: ${ColorScheme.PRIMARY_LIGHT};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 68px;
    line-height: 82px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    font-size: 51px;
    line-height: 65px;
    margin-bottom: 16px;
    & > span {
      display: none;
    }
  }
`;
const SubtitleSC = styled("h2")`
  margin: 0 0 32px 0;

  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;

  color: ${ColorScheme.PRIMARY_LIGHT};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 17px;
    line-height: 20px;
    margin-bottom: 24px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 16px;
  }
`;
const DescriptionSC = styled("p")`
  max-width: 400px;
  margin-bottom: 70px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: ${ColorScheme.GRAY};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    max-width: 337px;
    margin-bottom: 60px;

    font-size: 13.5px;
    line-height: 16px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    max-width: 265px;
    margin-bottom: 40px;

    font-size: 13.5px;
    line-height: 16px;
  }
`;

const ButtonSC = styled(Button)`
  min-width: 256px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    min-width: 208px;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    min-width: 224px;
  }
`;

export const useErrorContentStyles = () => ({
  ContainerSC,
  WrapperSC,
  IconContainerSC,
  MobileTitleSC,
  TitleSC,
  SubtitleSC,
  DescriptionSC,
  ButtonSC,
});
