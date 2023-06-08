import React from "react";
import CloseIcon from "@/assets/icons/CloseIcon.svg";
import { useHDrawer } from "@/components/Header/HDrawer/useHDrawer";
import { navigationMock } from "@/lib/mock/navigationMock";
import { useHDrawerStyles } from "@/components/Header/HDrawer/HDrawer.styles";

const HDrawer = () => {
  const { isDrawer, handleClick, handleChangeDrawer } = useHDrawer();

  return (
    <>
      <ButtonSC onClick={handleChangeDrawer(true)}>
        <IconSC />
      </ButtonSC>
      <DrawerSC
        anchor="left"
        open={isDrawer}
        disablePortal={true}
        onClose={handleChangeDrawer(false)}>
        <CloseButtonSC onClick={handleChangeDrawer(false)}>
          <CloseIcon />
        </CloseButtonSC>
        <nav>
          <DrawerWrapperSC>
            {navigationMock.map((item) => (
              <DrawerItemSC
                key={item.path}
                onClick={handleClick(item.path)}>
                <a
                  href={item.path}
                  target={item?.target}>
                  {item.title}
                </a>
              </DrawerItemSC>
            ))}
          </DrawerWrapperSC>
        </nav>
      </DrawerSC>
    </>
  );
};

const {
  ButtonSC,
  IconSC,
  DrawerSC,
  CloseButtonSC,
  DrawerWrapperSC,
  DrawerItemSC,
} = useHDrawerStyles();

export default React.memo(HDrawer);
