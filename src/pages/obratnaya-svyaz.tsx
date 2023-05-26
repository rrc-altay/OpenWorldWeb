import React from "react";
import TitleLayout from "@/layout/TitleLayout";
import MainContainer from "@/components/Containers/MainContainer/MainContainer";
import PageContainer from "@/components/Containers/PageContainer/PageContainer";
import { homeBreadCrumbs } from "@/lib/constants/breadCrumbs";
import {
  RoutesNamespace,
  RoutesNamespaceRU,
} from "@/lib/constants/routesNamespace";
import { GetServerSideProps } from "next";
import { fetchGetCatalog } from "@/lib/api/get/fetchGetCatalog";
import { CatalogProps } from "@/types/types";
import BoxWrapper from "@/components/Wrappers/BoxWrapper/BoxWrapper";
import Feedback from "@/components/Feedback/Feedback";

type ObratnayaSvyazProps = CatalogProps;

const ObratnayaSvyaz = ({ catalog }: ObratnayaSvyazProps) => {
  const customBread = {
    title: RoutesNamespaceRU.FEEDBACK,
    href: RoutesNamespace.FEEDBACK,
  };

  return (
    <TitleLayout title={RoutesNamespaceRU.FEEDBACK}>
      <MainContainer>
        <PageContainer
          catalog={catalog}
          breadCrumbs={[...homeBreadCrumbs, customBread]}>
          <BoxWrapper title={RoutesNamespaceRU.FEEDBACK}>
            <Feedback />
          </BoxWrapper>
        </PageContainer>
      </MainContainer>
    </TitleLayout>
  );
};

export const getServerSideProps: GetServerSideProps<
  ObratnayaSvyazProps
> = async (context) => {
  const catalog = await fetchGetCatalog(context);

  return { props: { catalog: catalog.data } };
};

export default React.memo(ObratnayaSvyaz);
