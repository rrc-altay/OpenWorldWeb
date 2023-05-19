import React from "react";
import HAbout from "@/components/Header/HAbout/HAbout";
import { useHeaderStyles } from "@/components/Header/Header.styles";
import HSearch from "@/components/Header/HSearch/HSearch";

const Header = () => {
  return (
    <HeaderSC>
      <WrapperSC className="container-two">
        <HSearch />
        <HAbout />
      </WrapperSC>
    </HeaderSC>
  );
};

const { WrapperSC, HeaderSC } = useHeaderStyles();

export default React.memo(Header);
