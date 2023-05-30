import React from "react";
import { TableUIProps } from "@/UI/TableUI/types";
import { useTableUIStyles } from "@/UI/TableUI/TableUI.styles";
import { getUUID } from "@/lib/modules/uuid";
import { tableMock } from "@/lib/mock/tableMock";
import { checkIsOdd } from "@/lib/services/services";

const TableOrganization = ({ rows }: TableUIProps) => {
  return (
    <ContainerSC>
      <TableSC>
        <TBodySC isOdd={checkIsOdd(rows.length)}>
          <tr>
            {tableMock.organizations.map((headerItem) => (
              <ThSC key={getUUID()}>{headerItem}</ThSC>
            ))}
          </tr>
          {rows.map((rowItem) => (
            <tr key={getUUID()}>
              {Object.values(rowItem).map((item) => (
                <TdSC key={getUUID()}>{item}</TdSC>
              ))}
            </tr>
          ))}
        </TBodySC>
      </TableSC>
    </ContainerSC>
  );
};

const { ContainerSC, TableSC, TBodySC, ThSC, TdSC } = useTableUIStyles();

export default React.memo(TableOrganization);
