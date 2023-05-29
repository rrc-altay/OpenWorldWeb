import { ContentPdfModel } from "@/lib/models/DynamicContent/properties/ContentPdfModel";
import { ContentImgModel } from "@/lib/models/DynamicContent/properties/ContentImgModel";
import { ContentTabelModel } from "@/lib/models/DynamicContent/properties/ContentTabelModel";

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
  readonly table_vertical: ContentTabelModel[] | null;
  readonly table_horizontal: ContentTabelModel[] | null;
}
