import { PageSearchModel } from "@/lib/models/Search/PageSearchModel";
import { NewsSearchModel } from "@/lib/models/Search/NewsSearchModel";

export type SearchModel = [
  { page: PageSearchModel },
  { news: NewsSearchModel },
];
