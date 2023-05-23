import PageContainer from "@/components/Containers/PageContainer/PageContainer";
import MainContainer from "@/components/Containers/MainContainer/MainContainer";
import { GetServerSideProps } from "next";
import { fetchGetCatalog } from "@/lib/api/get/fetchGetCatalog";
import { CatalogProps } from "@/types/types";
import { homeBreadCrumbs } from "@/lib/constants/breadCrumbs";

const Index = ({ catalog }: CatalogProps) => {
  return (
    <MainContainer>
      <PageContainer
        catalog={catalog}
        breadCrumbs={homeBreadCrumbs}>
        <h1>ok</h1>
      </PageContainer>
    </MainContainer>
  );
};

export const getServerSideProps: GetServerSideProps<CatalogProps> = async (
  context,
) => {
  const catalog = await fetchGetCatalog(context);
  return { props: { catalog: catalog.data } };
};

export default Index;
