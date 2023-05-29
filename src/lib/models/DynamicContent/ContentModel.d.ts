import { ContentItemModel } from "@/lib/models/DynamicContent/ContentItemModel";

export interface ContentModel {
  readonly slug: string;
  readonly path: string;
  readonly title: string;
  readonly content: ContentItemModel[];
}
