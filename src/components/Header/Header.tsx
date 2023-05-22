import React from "react";
import HAbout from "@/components/Header/HAbout/HAbout";
import { useHeaderStyles } from "@/components/Header/Header.styles";
import HSearch from "@/components/Header/HSearch/HSearch";
import HDrawer from "@/components/Header/HDrawer/HDrawer";

const Header = () => {
  return (
    <HeaderSC>
      <WrapperSC className="container-two">
        <HSearch />
        <HAbout />
        <HDrawer />
      </WrapperSC>
    </HeaderSC>
  );
};

const { WrapperSC, HeaderSC } = useHeaderStyles();

export default React.memo(Header);
