import React from "react";
import { Children } from "@/types/types";
import MBanner from "@/components/Main/MBanner/MBanner";
import MNavigation from "@/components/Main/MNavigation/MNavigation";
import { useMainLayoutStyles } from "@/layout/AppLayout/MainLayout/MainLayout.styles";

const MainLayout = ({ children }: Children) => {
  return (
    <main>
      <MBanner />
      <StickyContainerSC>
        <MNavigation />
        <ContainerSC>{children}</ContainerSC>
      </StickyContainerSC>
    </main>
  );
};

const { StickyContainerSC, ContainerSC } = useMainLayoutStyles();

export default React.memo(MainLayout);
