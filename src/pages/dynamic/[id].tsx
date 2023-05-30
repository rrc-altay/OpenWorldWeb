import React from "react";
import TitleLayout from "@/layout/TitleLayout";
import MainContainer from "@/components/Containers/MainContainer/MainContainer";
import PageContainer from "@/components/Containers/PageContainer/PageContainer";
import { fetchGetCatalog } from "@/lib/api/get/fetchGetCatalog";
import { CatalogProps } from "@/types/types";
import { GetServerSideProps } from "next";
import { CatalogModelArr } from "@/lib/models/Catalog/CatalogModel";
import { fetchGetSection } from "@/lib/api/get/fetchGetSection";
import WebsiteMap from "@/components/WebsiteMap/WebsiteMap";
import BoxWrapper from "@/components/Wrappers/BoxWrapper/BoxWrapper";

type SectionProps = CatalogProps & { map: CatalogModelArr };

const Index = ({ catalog, map }: SectionProps) => {
  const section = map[0];

  return (
    <TitleLayout title={section.title}>
      <MainContainer>
        <PageContainer
          catalog={catalog}
          breadCrumbs={[{ title: section.title, href: section.path }]}>
          <BoxWrapper>
            <WebsiteMap catalog={map} />
          </BoxWrapper>
        </PageContainer>
      </MainContainer>
    </TitleLayout>
  );
};

export const getServerSideProps: GetServerSideProps<SectionProps> = async (
  context,
) => {
  const catalog = await fetchGetCatalog(context);
  const map = await fetchGetSection((context.query?.id as string) || "");

  return { props: { catalog: catalog.data, map: map.data } };
};

export default React.memo(Index);
