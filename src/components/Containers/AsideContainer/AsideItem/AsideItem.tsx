import React from "react";
import { CatalogModel } from "@/lib/models/Catalog/CatalogModel";
import { styled, Typography } from "@mui/material";
import AIApp from "@/components/Containers/AsideContainer/AsideItem/AIApp/AIApp";
import AIPhone from "@/components/Containers/AsideContainer/AsideItem/AIPhone/AIPhone";
import AIPartners from "@/components/Containers/AsideContainer/AsideItem/AIPartners/AIPartners";
import AIElements from "@/components/Containers/AsideContainer/AsideItem/AIElements/AIElements";
import { Breakpoints } from "@/styles/breakpoints";

const AsideItem = ({ title, data }: CatalogModel) => {
  return (
    <ContainerSC>
      <TitleSC variant="h2">{title}</TitleSC>
      {data?.elements && <AIElements elements={data.elements} />}
      {data?.partners && <AIPartners partners={data.partners} />}
      {data?.app && <AIApp app={data.app} />}
      {data?.phone && <AIPhone phone={data.phone} />}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  margin-bottom: 50px;
`;

const TitleSC = styled(Typography)`
  margin-bottom: 20px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }
`;

export default React.memo(AsideItem);
