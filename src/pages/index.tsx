import React from "react";
import News from "@/components/News/News";
import PageContainer from "@/components/Containers/PageContainer/PageContainer";
import MainContainer from "@/components/Containers/MainContainer/MainContainer";
import { GetServerSideProps } from "next";
import { fetchGetCatalog } from "@/lib/api/get/fetchGetCatalog";
import { CatalogProps } from "@/types/types";
import { homeBreadCrumbs } from "@/lib/constants/breadCrumbs";
import { fetchGetNews } from "@/lib/api/get/fetchGetNews";
import { NewsModelArr } from "@/lib/models/NewsModel";
type HomeProps = CatalogProps & { news: NewsModelArr };

const Index = ({ catalog, news }: HomeProps) => {
  return (
    <MainContainer>
      <PageContainer
        catalog={catalog}
        breadCrumbs={homeBreadCrumbs}>
        <News initialNews={news} />
      </PageContainer>
    </MainContainer>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context,
) => {
  const catalog = await fetchGetCatalog(context);
  const news = await fetchGetNews();

  return { props: { catalog: catalog.data, news: news.data.results } };
};

export default Index;
