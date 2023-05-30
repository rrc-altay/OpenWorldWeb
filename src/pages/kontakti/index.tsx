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
import { fetchGetTableContact } from "@/lib/api/get/fetchGetTableContact";
import { fetchGetTableWorkTime } from "@/lib/api/get/fetchGetTableWorkTime";
import { TableModelArr } from "@/lib/models/TableModel";
import TableContacts from "@/UI/TableUI/TableContacts/TableContacts";
import TableWorkTime from "@/UI/TableUI/TableWorkTime/TableWorkTime";
import { styled, Typography } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

type KontaktiProps = CatalogProps & {
  contacts: TableModelArr;
  workTime: TableModelArr;
};

const Index = ({ catalog, contacts, workTime }: KontaktiProps) => {
  const customBread = {
    title: RoutesNamespaceRU.CONTACTS,
    href: RoutesNamespace.CONTACTS,
  };

  return (
    <TitleLayout title={RoutesNamespaceRU.CONTACTS}>
      <MainContainer>
        <PageContainer
          catalog={catalog}
          breadCrumbs={[customBread]}>
          <BoxWrapper title={RoutesNamespaceRU.CONTACTS}>
            <TableContacts rows={contacts} />
            <ParagraphSC variant="body1">
              * Для заселения в социальную гостиницу необходимо предварительно
              записаться по указанному телефону. Часы заселения: 08.00 – 20.00ч.
              (без выходных)
            </ParagraphSC>
            <TableWorkTime rows={workTime} />
          </BoxWrapper>
        </PageContainer>
      </MainContainer>
    </TitleLayout>
  );
};

const ParagraphSC = styled(Typography)`
  margin: 24px 0 32px;

  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;

  color: ${ColorScheme.SECONDARY_LIGHT};

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    margin: 16px 0 20px;
  }
`;

export const getServerSideProps: GetServerSideProps<CatalogProps> = async (
  context,
) => {
  const catalog = await fetchGetCatalog(context);

  const contacts = await fetchGetTableContact();
  const workTime = await fetchGetTableWorkTime();

  return {
    props: {
      catalog: catalog.data,
      contacts: contacts.data,
      workTime: workTime.data,
    },
  };
};

export default React.memo(Index);
