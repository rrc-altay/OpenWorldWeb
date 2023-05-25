import React from "react";
import MainContainer from "@/components/Containers/MainContainer/MainContainer";
import PageContainer from "@/components/Containers/PageContainer/PageContainer";
import { homeBreadCrumbs } from "@/lib/constants/breadCrumbs";
import { GetServerSideProps } from "next";
import { fetchGetCatalog } from "@/lib/api/get/fetchGetCatalog";
import { CatalogProps } from "@/types/types";
import { fetchGetNewById } from "@/lib/api/get/fetchGetNewById";
import { NewsModel } from "@/lib/models/NewsModel";
import NewsId from "@/components/NewsId/NewsId";

type NewsIdProps = CatalogProps & { newsId: NewsModel };

const Index = ({ catalog, newsId }: NewsIdProps) => {
  return (
    <MainContainer>
      <PageContainer
        catalog={catalog}
        breadCrumbs={homeBreadCrumbs}>
        <NewsId {...newsId} />
      </PageContainer>
    </MainContainer>
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
