import React from "react";
import { getUUID } from "@/lib/modules/uuid";
import { useTableUIStyles } from "@/UI/TableUI/TableUI.styles";
import { TableUIProps } from "@/UI/TableUI/types";
import { tableMock } from "@/lib/mock/tableMock";
const TableContacts = ({ rows }: TableUIProps) => {
  return (
    <ContainerSC>
      <TableSC>
        <TBodySC isOdd={!!rows.length}>
          <tr>
            {tableMock.contacts.map((headerItem) => (
              <ThSC key={getUUID()}>{headerItem}</ThSC>
            ))}
          </tr>
          {rows.map((rowItem) => (
            <tr key={getUUID()}>
              {Object.values(rowItem).map((item) => (
                <TdSC key={getUUID()}>
                  <a href={`tel:${item.replace(/\D/g, "")}`}>{item}</a>
                </TdSC>
              ))}
            </tr>
          ))}
        </TBodySC>
      </TableSC>
    </ContainerSC>
  );
};

const { ContainerSC, TableSC, TBodySC, ThSC, TdSC } = useTableUIStyles();
export default React.memo(TableContacts);
