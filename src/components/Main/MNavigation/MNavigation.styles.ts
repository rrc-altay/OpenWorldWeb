import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";
import ColorScheme from "@/styles/theme/colorScheme";

const ContainerSC = styled("nav")`
  position: sticky;
  top: 54px;

  transform: translateY(-50%);

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }
`;

const ListSC = styled("ul")`
  display: flex;
  align-items: center;
  overflow: hidden;

  border-radius: 50px;

  background: ${ColorScheme.PRIMARY_THREE};
  box-shadow: 0 0 10px rgba(32, 43, 109, 0.1);
`;

const ItemSC = styled("li")`
  flex-grow: 1;

  color: ${ColorScheme.MAIN};

  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;

  transition: 0.2s all linear;

  & > a {
    padding: 33px 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: ${ColorScheme.PRIMARY_TWO};
  }

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    //flex: 1;
    font-size: 16px;
  }

  @media (max-width: 1200px) {
    //flex: 1;
    font-size: 14px;
  }
`;

export const useMNavigationStyles = () => ({
  ContainerSC,
  ListSC,
  ItemSC,
});
