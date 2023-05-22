import React from "react";
import BurgerIcon from "@/assets/icons/BurgerIcon.svg";
import CloseIcon from "@/assets/icons/CloseIcon.svg";
import { useHDrawer } from "@/components/Header/HDrawer/useHDrawer";
import { Button, Drawer, styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";
import ColorScheme from "@/styles/theme/colorScheme";
import { navigationMock } from "@/lib/mock/navigationMock";
import Link from "next/link";

const HDrawer = () => {
  const { isDrawer, handleChangeDrawer } = useHDrawer();

  return (
    <>
      <ButtonSC onClick={handleChangeDrawer(true)}>
        <IconSC />
      </ButtonSC>
      <DrawerSC
        anchor="left"
        open={isDrawer}
        onClose={handleChangeDrawer(false)}>
        <CloseButtonSC onClick={handleChangeDrawer(false)}>
          <CloseIcon />
        </CloseButtonSC>
        <DrawerWrapperSC>
          {navigationMock.map((item) => (
            <DrawerItemSC key={item.path}>
              <Link href={item.path}>{item.title}</Link>
            </DrawerItemSC>
          ))}
        </DrawerWrapperSC>
      </DrawerSC>
    </>
  );
};

const ButtonSC = styled(Button)`
  display: none;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 46px;
    height: 46px;

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

  &:hover {
    background-color: ${ColorScheme.PRIMARY_TWO};
  }
`;

export default React.memo(HDrawer);
