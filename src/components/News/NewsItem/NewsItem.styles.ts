import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("div")`
  width: 100%;
  min-height: 240px;

  display: flex;
  justify-content: center;

  padding: 14px 13px;
  margin-bottom: 30px;

  border-radius: 50px;
  box-shadow: 0 0 10px ${ColorScheme.SHADOW};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    min-height: 203px;

    padding: 14px 11px;
    margin-bottom: 24px;
  }
`;

const ImageSC = styled("img")`
  width: 226px;
  height: 204px;

  object-fit: cover;

  flex-shrink: 0;
  border-radius: 49px 49px 49px 43px;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    width: 180px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 197px;
    height: 175px;
  }
`;

const TextContainerSC = styled("div")`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 10px 23px 10px 14px;

  // 1- Ширина карточки
  // 2 - Ширина картинки
  // 3 - Padding карточки по горизонтали
  // 4 - Padding текста внутри карточки
  //width: calc(100% - 226px + 26px + 37px);

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    //max-width: calc(100% - 180px + 26px + 37px);
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding: 5px 29px 3px 24px;
  }
`;

const TitleSC = styled("a")`
  color: ${ColorScheme.SECONDARY};

  margin-bottom: 16px;

  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    color: ${ColorScheme.SECONDARY_DARK};
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const DescContainerSC = styled("div")`
  flex-grow: 1;
`;

const DescriptionSC = styled("p")`
  display: -webkit-box;
  color: ${ColorScheme.GRAY};

  margin-bottom: 15px;

  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  text-overflow: ellipsis;

  overflow: hidden;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 16px;
  }
`;

const DateSC = styled("div")`
  color: ${ColorScheme.GRAY_LIGHT};

  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
`;

export const useNewsItemStyles = () => ({
  ContainerSC,
  ImageSC,
  TextContainerSC,
  TitleSC,
  DescContainerSC,
  DescriptionSC,
  DateSC,
});
