import React from "react";
import { GetServerSideProps } from "next";
import { fetchGetCatalog } from "@/lib/api/get/fetchGetCatalog";
import { CatalogProps, DynamicElementProps } from "@/types/types";
import { RoutesNamespace } from "@/lib/constants/routesNamespace";
import TitleLayout from "@/layout/TitleLayout";
import MainContainer from "@/components/Containers/MainContainer/MainContainer";
import PageContainer from "@/components/Containers/PageContainer/PageContainer";
import { fetchGetDynamicPage } from "@/lib/api/get/fetchGetDynamicPage";
import BoxWrapper from "@/components/Wrappers/BoxWrapper/BoxWrapper";
import DynamicContent from "@/components/DynamicContent/DynamicContent";

type DynamicProps = CatalogProps & DynamicElementProps;

const Index = ({ catalog, dynamicPage }: DynamicProps) => {
  const {
    title,
    path,
    element: { title: elementTitle, path: elementPath, content },
  } = dynamicPage;

  const customBread = [
    {
      title: title,
      href: path,
    },
    {
      title: elementTitle,
      href: elementPath,
    },
  ];

  return (
    <TitleLayout title={elementTitle}>
      <MainContainer>
        <PageContainer
          catalog={catalog}
          breadCrumbs={customBread}>
          <BoxWrapper
            title={elementTitle}
            button={{
              href: RoutesNamespace.HOME,
              children: "Вернуться на главную",
            }}>
            <DynamicContent content={content} />
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

  return { props: { catalog: catalog.data, dynamicPage: content.data } };
};

export default React.memo(Index);
