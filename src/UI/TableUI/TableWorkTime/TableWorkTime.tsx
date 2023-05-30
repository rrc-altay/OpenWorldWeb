import React from "react";
import { useTableUIStyles } from "@/UI/TableUI/TableUI.styles";
import { tableMock } from "@/lib/mock/tableMock";
import { getUUID } from "@/lib/modules/uuid";
import { TableUIProps } from "@/UI/TableUI/types";

const TableWorkTime = ({ rows }: TableUIProps) => {
  return (
    <TableSC>
      <TBodySC isOdd={!rows.length}>
        <tr>
          <ThSC colSpan={2}>{tableMock.workTime}</ThSC>
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
  );
};

const { TableSC, TBodySC, ThSC, TdSC } = useTableUIStyles();

export default React.memo(TableWorkTime);
