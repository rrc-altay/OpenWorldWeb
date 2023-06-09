import React, { FC } from "react";
import { ContentItemModel } from "@/lib/models/DynamicContent/ContentItemModel";
import DCText from "@/components/DynamicContent/DCText/DCText";
import DCImg from "@/components/DynamicContent/DCImg/DCImg";
import { ContentImgModel } from "@/lib/models/DynamicContent/properties/ContentImgModel";
import DCMap from "@/components/DynamicContent/DCMap/DCMap";
import { ContentPdfModel } from "@/lib/models/DynamicContent/properties/ContentPdfModel";
import Pdf from "@/components/Pdf/Pdf";
import TableOrganization from "@/UI/TableUI/TableOrganization/TableOrganization";
import TableAboutCenter from "@/UI/TableUI/TableAboutCenter/TableAboutCenter";
import { TableModel, TableModelArr } from "@/lib/models/TableModel";

const DCItemHOC = (DefaultComponent: FC<ContentItemModel>) => {
  return function Content(props: ContentItemModel) {
    const { type } = props;

    switch (type) {
      case "text":
        return <DCText>{props.text}</DCText>;
      case "img":
        return <DCImg {...(props.img as ContentImgModel)} />;
      case "pdf":
        return <Pdf {...(props.pdf as ContentPdfModel)} />;
      case "map":
        return <DCMap />;
      case "table_vertical":
        return (
          <TableOrganization rows={props.table_vertical as TableModelArr} />
        );
      case "table_horizontal":
        return <TableAboutCenter {...(props.table_horizontal as TableModel)} />;
      default:
        return <DefaultComponent {...props} />;
    }
  };
};

export default DCItemHOC;
