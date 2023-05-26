import { ImageModel } from "@/lib/models/ImageModel";

export interface NewsModel {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly images: ImageModel[];
  readonly created_at: string;
}

export type NewsModelArr = NewsModel[];
