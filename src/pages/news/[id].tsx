import React from "react";
import NewsId from "@/components/NewsId/NewsId";
import MainContainer from "@/components/Containers/MainContainer/MainContainer";
import PageContainer from "@/components/Containers/PageContainer/PageContainer";
import { homeBreadCrumbs } from "@/lib/constants/breadCrumbs";
import { GetServerSideProps } from "next";
import { fetchGetCatalog } from "@/lib/api/get/fetchGetCatalog";
import { CatalogProps } from "@/types/types";
import { fetchGetNewById } from "@/lib/api/get/fetchGetNewById";
import { NewsModel } from "@/lib/models/NewsModel";
import { RoutesNamespace } from "@/lib/constants/routesNamespace";
import TitleLayout from "@/layout/TitleLayout";

type NewsIdProps = CatalogProps & { newsId: NewsModel };

const Index = ({ catalog, newsId }: NewsIdProps) => {
  const customBread = {
    title: newsId.title,
    href: `${RoutesNamespace.NEWS}/${newsId.id}`,
  };

  return (
    <TitleLayout title={newsId.title}>
      <MainContainer>
        <PageContainer
          catalog={catalog}
          breadCrumbs={[...homeBreadCrumbs, customBread]}>
          <NewsId {...newsId} />
        </PageContainer>
      </MainContainer>
    </TitleLayout>
  );
};

export const getServerSideProps: GetServerSideProps<NewsIdProps> = async (
  context,
) => {
  const catalog = await fetchGetCatalog(context);
  const newsId = await fetchGetNewById(`${context.params?.id}` || "");

  return { props: { catalog: catalog.data, newsId: newsId.data } };
};

export default React.memo(Index);
