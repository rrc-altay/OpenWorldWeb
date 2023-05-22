import React from "react";
import { navigationMock } from "@/lib/mock/navigationMock";
import Link from "next/link";
import { useMNavigationStyles } from "@/components/Main/MNavigation/MNavigation.styles";

const MNavigation = () => {
  return (
    <ContainerSC className="container-two">
      <ListSC>
        {navigationMock.map((navigationItem) => (
          <ItemSC key={navigationItem.path}>
            <Link href={navigationItem.path}>{navigationItem.title}</Link>
          </ItemSC>
        ))}
      </ListSC>
    </ContainerSC>
  );
};

const { ContainerSC, ListSC, ItemSC } = useMNavigationStyles();

export default React.memo(MNavigation);
