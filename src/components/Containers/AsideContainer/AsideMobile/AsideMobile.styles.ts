import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("section")`
  margin-bottom: 33px;

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    margin-bottom: 24px;
  }
`;

const ListSC = styled("div")`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;

  & > *:last-child > * {
    margin-right: 0;
  }
`;

const WrapperSC = styled("div")`
  width: 33%;

  display: flex;
  flex-direction: column;

  @media (max-width: ${Breakpoints.TABLE}px) {
    width: 50%;
  }

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    width: 100%;
  }
`;

const ItemSC = styled("div")`
  margin-right: 15px;
`;

export const useAsideMobileStyles = () => {
  return {
    ContainerSC,
    ListSC,
    WrapperSC,
    ItemSC,
  };
};
