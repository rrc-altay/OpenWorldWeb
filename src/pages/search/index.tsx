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
import { CatalogProps, SearchProps } from "@/types/types";
import { fetchPostSearch } from "@/lib/api/post/fetchPostSearch";
import Search from "@/components/Search/Search";
import { getSearch } from "@/lib/services/services";

type SearchPageProps = CatalogProps & SearchProps;

const Index = ({ catalog, ...searchProps }: SearchPageProps) => {
  const { find } = searchProps;

  const customBread = {
    title: RoutesNamespaceRU.SEARCH,
    href: RoutesNamespace.SEARCH,
  };

  return (
    <TitleLayout title={getSearch(find)}>
      <MainContainer>
        <PageContainer
          catalog={catalog}
          breadCrumbs={[customBread]}>
          <BoxWrapper>
            <Search {...searchProps} />
          </BoxWrapper>
        </PageContainer>
      </MainContainer>
    </TitleLayout>
  );
};

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (
  context,
) => {
  const find = (context.query.find as string) || "";
  const catalog = await fetchGetCatalog(context);
  const search = await fetchPostSearch(find);

  return { props: { catalog: catalog.data, search: search.data, find } };
};

export default React.memo(Index);
