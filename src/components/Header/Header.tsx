import React from "react";
import SearchUI from "@/UI/SearchUI/SearchUI";
import HAbout from "@/components/Header/HAbout/HAbout";
import { useHeaderStyles } from "@/components/Header/Header.styles";

const Header = () => {
  return (
    <HeaderSC>
      <WrapperSC className="container">
        <SearchContainerSC>
          <SearchUI />
        </SearchContainerSC>
        <HAbout />
      </WrapperSC>
    </HeaderSC>
  );
};

const { WrapperSC, SearchContainerSC, HeaderSC } = useHeaderStyles();

export default React.memo(Header);
