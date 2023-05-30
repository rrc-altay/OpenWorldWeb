import { ContentModel } from "@/lib/models/DynamicContent/ContentModel";

export interface DynamicElementModel {
  readonly title: string;
  readonly path: string;
  readonly slug: string;
  readonly element: ContentModel;
}
