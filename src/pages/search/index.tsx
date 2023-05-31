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
import { fetchPostSearch } from "@/lib/api/post/fetchPostSearch";
import { SearchModel } from "@/lib/models/Search/SearchModel";
import Search from "@/components/Search/Search";

type SearchProps = CatalogProps & { find: string; search: SearchModel };

const Index = ({ catalog, find, search }: SearchProps) => {
  const customBread = {
    title: RoutesNamespaceRU.SEARCH,
    href: RoutesNamespace.SEARCH,
  };

  console.log(search);

  return (
    <TitleLayout title={find}>
      <MainContainer>
        <PageContainer
          catalog={catalog}
          breadCrumbs={[customBread]}>
          <BoxWrapper title={RoutesNamespaceRU.SEARCH}>
            <h1>ok</h1>
            <Search />
          </BoxWrapper>
        </PageContainer>
      </MainContainer>
    </TitleLayout>
  );
};

export const getServerSideProps: GetServerSideProps<SearchProps> = async (
  context,
) => {
  const find = (context.query.find as string) || "";
  const catalog = await fetchGetCatalog(context);
  const search = await fetchPostSearch(find);

  return { props: { catalog: catalog.data, search: search.data, find } };
};

export default React.memo(Index);
