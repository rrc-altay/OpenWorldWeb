import React from "react";
import { CatalogModel } from "@/lib/models/Catalog/CatalogModel";
import { styled, Typography } from "@mui/material";
import AIApp from "@/components/Containers/AsideContainer/AsideItem/AIApp/AIApp";
import AIPhone from "@/components/Containers/AsideContainer/AsideItem/AIPhone/AIPhone";
import AIPartners from "@/components/Containers/AsideContainer/AsideItem/AIPartners/AIPartners";
import AIElements from "@/components/Containers/AsideContainer/AsideItem/AIElements/AIElements";

const AsideItem = ({ title, data = [] }: CatalogModel) => {
  const currentData = data[0];

  return (
    <ContainerSC>
      <TitleSC variant="h2">{title}</TitleSC>
      {currentData?.elements && <AIElements elements={currentData.elements} />}
      {currentData?.partners && <AIPartners partners={currentData.partners} />}
      {currentData?.app && <AIApp app={currentData.app} />}
      {currentData?.phone && <AIPhone phone={currentData.phone} />}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  margin-bottom: 50px;
`;

const TitleSC = styled(Typography)`
  margin-bottom: 20px;
`;

export default React.memo(AsideItem);
