import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("div")`
  width: 100%;
  max-width: 776px;

  display: flex;

  padding: 14px 13px;
  margin-bottom: 30px;

  border-radius: 50px;
  box-shadow: 0 0 10px ${ColorScheme.SHADOW};
`;

const ImageSC = styled("img")`
  width: 100%;
  height: 204px;
  max-width: 241px;

  flex-shrink: 0;

  object-fit: cover;
  border-radius: 49px 49px 49px 43px;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    max-width: 180px;
  }
`;

const TextContainerSC = styled("div")`
  display: flex;
  flex-direction: column;

  padding: 10px 23px 10px 14px;
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
  DescriptionSC,
  DateSC,
});
