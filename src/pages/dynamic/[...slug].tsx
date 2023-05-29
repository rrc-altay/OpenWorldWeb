import React from "react";
import { GetServerSideProps } from "next";
import { fetchGetCatalog } from "@/lib/api/get/fetchGetCatalog";
import { CatalogProps } from "@/types/types";
import {
  RoutesNamespace,
  RoutesNamespaceRU,
} from "@/lib/constants/routesNamespace";
import TitleLayout from "@/layout/TitleLayout";
import MainContainer from "@/components/Containers/MainContainer/MainContainer";
import PageContainer from "@/components/Containers/PageContainer/PageContainer";
import { fetchGetDynamicPage } from "@/lib/api/get/fetchGetDynamicPage";

type DynamicProps = CatalogProps;

const Index = ({ catalog }: DynamicProps) => {
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
          <h1>ok</h1>
        </PageContainer>
      </MainContainer>
    </TitleLayout>
  );
};

export const getServerSideProps: GetServerSideProps<DynamicProps> = async (
  context,
) => {
  const path = ((context.query?.slug as string[]) || []).join("/");
  const catalog = await fetchGetCatalog(context);
  const content = await fetchGetDynamicPage(path);

  console.log(content.data);

  return { props: { catalog: catalog.data } };
};

export default React.memo(Index);
