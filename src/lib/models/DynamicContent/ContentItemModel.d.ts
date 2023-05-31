import { ContentPdfModel } from "@/lib/models/DynamicContent/properties/ContentPdfModel";
import { ContentImgModel } from "@/lib/models/DynamicContent/properties/ContentImgModel";
import { TableModel, TableModelArr } from "@/lib/models/TableModel";

export type ContentUnionType =
  | "text"
  | "pdf"
  | "img"
  | "table_vertical"
  | "table_horizontal"
  | "map";

export interface ContentItemModel {
  readonly type: ContentUnionType;
  readonly text: string | null;
  readonly pdf: ContentPdfModel | null;
  readonly img: ContentImgModel | null;
  readonly table_vertical: TableModelArr | null;
  readonly table_horizontal: TableModel | null;
}
