import React from "react";
import { GetServerSideProps } from "next";
import { fetchGetCatalog } from "@/lib/api/get/fetchGetCatalog";
import { CatalogProps, ContentProps } from "@/types/types";
import {
  RoutesNamespace,
  RoutesNamespaceRU,
} from "@/lib/constants/routesNamespace";
import TitleLayout from "@/layout/TitleLayout";
import MainContainer from "@/components/Containers/MainContainer/MainContainer";
import PageContainer from "@/components/Containers/PageContainer/PageContainer";
import { fetchGetDynamicPage } from "@/lib/api/get/fetchGetDynamicPage";
import BoxWrapper from "@/components/Wrappers/BoxWrapper/BoxWrapper";
import Pdf from "@/components/PdfViewer/Pdf";

type DynamicProps = CatalogProps & ContentProps;

const Index = ({ catalog, content }: DynamicProps) => {
  const customBread = {
    title: RoutesNamespaceRU.MAP,
    href: RoutesNamespace.MAP,
  };

  console.log(content.content);

  return (
    <TitleLayout title={RoutesNamespaceRU.MAP}>
      <MainContainer>
        <PageContainer
          catalog={catalog}
          breadCrumbs={[customBread]}>
          <BoxWrapper title="qwe">
            <Pdf />
          </BoxWrapper>
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

  return { props: { catalog: catalog.data, content: content.data } };
};

export default React.memo(Index);
