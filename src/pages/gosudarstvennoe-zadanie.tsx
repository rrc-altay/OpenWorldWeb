import React from "react";
import TitleLayout from "@/layout/TitleLayout";
import MainContainer from "@/components/Containers/MainContainer/MainContainer";
import PageContainer from "@/components/Containers/PageContainer/PageContainer";
import {
  RoutesNamespace,
  RoutesNamespaceRU,
} from "@/lib/constants/routesNamespace";
import { GetServerSideProps } from "next";
import { fetchGetCatalog } from "@/lib/api/get/fetchGetCatalog";
import { CatalogProps } from "@/types/types";
import BoxWrapper from "@/components/Wrappers/BoxWrapper/BoxWrapper";
import { fetchGetGosTasks } from "@/lib/api/get/fetchGetGosTasks";
import { ContentPdfModel } from "@/lib/models/DynamicContent/properties/ContentPdfModel";
import Pdf from "@/components/Pdf/Pdf";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

type GosudarstvennoeZadanieProps = CatalogProps & { tasks: ContentPdfModel[] };

const Index = ({ catalog, tasks }: GosudarstvennoeZadanieProps) => {
  const customBread = {
    title: RoutesNamespaceRU.GOS_TASK,
    href: RoutesNamespace.GOS_TASK,
  };

  return (
    <TitleLayout title={RoutesNamespaceRU.GOS_TASK}>
      <MainContainer>
        <PageContainer
          catalog={catalog}
          breadCrumbs={[customBread]}>
          <BoxWrapper title={RoutesNamespaceRU.GOS_TASK}>
            <ContainerSC>
              {tasks.map((pdfItem) => (
                <WrapperSC key={pdfItem.name}>
                  <Pdf {...pdfItem} />
                </WrapperSC>
              ))}
            </ContainerSC>
          </BoxWrapper>
        </PageContainer>
      </MainContainer>
    </TitleLayout>
  );
};

const ContainerSC = styled("div")`
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const WrapperSC = styled("div")`
  margin-bottom: 32px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 28px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-bottom: 28px;
  }
`;

export const getServerSideProps: GetServerSideProps<
  GosudarstvennoeZadanieProps
> = async (context) => {
  const catalog = await fetchGetCatalog(context);
  const tasks = await fetchGetGosTasks();

  return { props: { catalog: catalog.data, tasks: tasks.data } };
};

export default React.memo(Index);
