export interface NewsImageModel {
  id: number;
  src: string;
}
export interface NewsModel {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly images: NewsImageModel[];
  readonly created_at: string;
}

export type NewsModelArr = NewsModel[];
