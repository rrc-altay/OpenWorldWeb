import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperSC = styled("div")`
  padding-bottom: 16px;
`;

const DateContainerSC = styled("div")`
  margin-top: 27px;

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-top: 16px;
  }
`;

const SwiperContainerSC = styled("div")`
  margin-top: 30px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 26px;

    max-width: none;
    max-height: none;
  }

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin-top: 16px;
  }
`;

export const useNEwsIdStyles = () => ({
  ContainerSC,
  WrapperSC,
  DateContainerSC,
  SwiperContainerSC,
});
