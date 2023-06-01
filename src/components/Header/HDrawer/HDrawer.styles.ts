import { Button, Drawer, styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";
import ColorScheme from "@/styles/theme/colorScheme";
import BurgerIcon from "@/assets/icons/BurgerIcon.svg";

const ButtonSC = styled(Button)`
  display: none;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 44px;
    height: 44px;

    min-width: 0;
    padding: 0;

    background-color: ${ColorScheme.PRIMARY_THREE};
    border-radius: 50%;
  }
`;

const IconSC = styled(BurgerIcon)`
  width: 36px;
  height: 36px;
`;

const DrawerSC = styled(Drawer)`
  & .MuiPaper-root {
    position: relative;

    justify-content: center;

    width: 100%;
    padding: 10px 0;
    background-color: ${ColorScheme.PRIMARY_THREE};

    background-image: url("/assets/images/DrawerBackground.png");
    background-repeat: no-repeat;
    background-size: cover, cover;
  }
`;

const CloseButtonSC = styled("button")`
  position: absolute;
  right: 15px;
  top: 10px;

  width: 44px;
  height: 44px;
  min-width: 0;

  background-color: transparent;

  @media (max-width: ${Breakpoints.TABLE}px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    right: 10px;
  }
`;

const DrawerWrapperSC = styled("ul")`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const DrawerItemSC = styled("li")`
  width: 100%;
  padding: 14px 15px;

  color: ${ColorScheme.MAIN};

  font-size: 15px;
  font-weight: 800;
  line-height: 20px;

  text-align: center;
  text-transform: uppercase;

  transition: 0.2s all linear;
`;

export const useHDrawerStyles = () => ({
  ButtonSC,
  IconSC,
  DrawerSC,
  CloseButtonSC,
  DrawerWrapperSC,
  DrawerItemSC,
});
