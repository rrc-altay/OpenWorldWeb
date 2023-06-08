import React from "react";
import { navigationMock } from "@/lib/mock/navigationMock";
import { useMNavigationStyles } from "@/components/Main/MNavigation/MNavigation.styles";

const MNavigation = () => {
  return (
    <ContainerSC className="container-two">
      <ListSC>
        {navigationMock.map((navigationItem) => (
          <ItemSC key={navigationItem.path}>
            <a
              href={navigationItem.path}
              target={navigationItem?.target}>
              {navigationItem.title}
            </a>
          </ItemSC>
        ))}
      </ListSC>
    </ContainerSC>
  );
};

const { ContainerSC, ListSC, ItemSC } = useMNavigationStyles();

export default React.memo(MNavigation);
