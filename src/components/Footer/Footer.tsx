import React from "react";
import { useFooterStyles } from "@/components/Footer/Footer.styles";
import FAbout from "@/components/Footer/FAbout/FAbout";
import FContacts from "@/components/Footer/FContacts/FContacts";
import FSocial from "@/components/Footer/FSocial/FSocial";

const Footer = () => {
  return (
    <ContainerSC>
      <WrapperSC className="container-three">
        <FAbout />
        <FSocial />
        <FContacts />
      </WrapperSC>
    </ContainerSC>
  );
};

const { ContainerSC, WrapperSC } = useFooterStyles();

export default React.memo(Footer);
