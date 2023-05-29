import { ContentPdfModel } from "@/lib/models/DynamicContent/ContentPdfModel";
import { ContentImgModel } from "@/lib/models/DynamicContent/ContentImgModel";
import { ContentTabelModel } from "@/lib/models/DynamicContent/ContentTabelModel";

export type ContentUnionType =
  | "text"
  | "pdf"
  | "img"
  | "table_vertical"
  | "table_horizontal"
  | "map";

export interface ContentModel {
  readonly type: ContentUnionType;
  readonly text: string | null;
  readonly pdf: ContentPdfModel | null;
  readonly img: ContentImgModel | null;
  readonly table_vertical: ContentTabelModel[] | null;
  readonly table_horizontal: ContentTabelModel[] | null;
}
