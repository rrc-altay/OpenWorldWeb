import React, { useMemo } from "react";
import { CatalogProps } from "@/types/types";
import { styled } from "@mui/material";
import WMSection from "@/components/WebsiteMap/WMSection/WMSection";
import { ElementsModel } from "@/lib/models/Catalog/properties/ElementsModel";
import { navigationMock } from "@/lib/mock/navigationMock";
import WMSItem from "@/components/WebsiteMap/WMSItem/WMSItem";

const WebsiteMap = ({ catalog }: CatalogProps) => {
  const renderCatalog = useMemo(
    () => catalog.filter((item) => item.data.elements?.length || 0 > 0),
    [catalog],
  );

  return (
    <ContainerSC>
      {renderCatalog.map((catalogItem) => (
        <WMSection
          key={catalogItem.slug}
          title={catalogItem.title}
          elements={catalogItem.data.elements as ElementsModel[]}
        />
      ))}
      <ListSC>
        {navigationMock.map((navigationItem) => (
          <WMSItem
            key={navigationItem.path}
            slug={navigationItem.title}
            path={navigationItem.path}
            title={navigationItem.title.toUpperCase()}
            target={navigationItem?.target || ""}
            isPrefix={false}
            isHorizontalPadding={false}
          />
        ))}
      </ListSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("section")``;

const ListSC = styled("ul")`
  & > *:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export default React.memo(WebsiteMap);
