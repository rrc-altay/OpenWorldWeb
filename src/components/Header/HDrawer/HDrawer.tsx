import React from "react";
import CloseIcon from "@/assets/icons/CloseIcon.svg";
import { useHDrawer } from "@/components/Header/HDrawer/useHDrawer";
import { navigationMock } from "@/lib/mock/navigationMock";
import Link from "next/link";
import { useHDrawerStyles } from "@/components/Header/HDrawer/HDrawer.styles";

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

const {
  ButtonSC,
  IconSC,
  DrawerSC,
  CloseButtonSC,
  DrawerWrapperSC,
  DrawerItemSC,
} = useHDrawerStyles();

export default React.memo(HDrawer);
