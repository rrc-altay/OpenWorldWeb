import React from "react";
import TitleLayout from "@/layout/TitleLayout";
import {
  RoutesNamespace,
  RoutesNamespaceRU,
} from "@/lib/constants/routesNamespace";
import MainContainer from "@/components/Containers/MainContainer/MainContainer";
import PageContainer from "@/components/Containers/PageContainer/PageContainer";
import BoxWrapper from "@/components/Wrappers/BoxWrapper/BoxWrapper";
import { GetServerSideProps } from "next";
import { fetchGetCatalog } from "@/lib/api/get/fetchGetCatalog";
import { CatalogProps } from "@/types/types";
import WebsiteMap from "@/components/WebsiteMap/WebsiteMap";

type KartaProps = CatalogProps;

const Karta = ({ catalog }: KartaProps) => {
  const customBread = {
    title: RoutesNamespaceRU.MAP,
    href: RoutesNamespace.MAP,
  };

  return (
    <TitleLayout title={RoutesNamespaceRU.MAP}>
      <MainContainer>
        <PageContainer
          catalog={catalog}
          breadCrumbs={[customBread]}>
          <BoxWrapper title={RoutesNamespaceRU.MAP}>
            <WebsiteMap catalog={catalog} />
          </BoxWrapper>
        </PageContainer>
      </MainContainer>
    </TitleLayout>
  );
};

export const getServerSideProps: GetServerSideProps<KartaProps> = async (
  context,
) => {
  const catalog = await fetchGetCatalog(context);

  return { props: { catalog: catalog.data } };
};

export default React.memo(Karta);
