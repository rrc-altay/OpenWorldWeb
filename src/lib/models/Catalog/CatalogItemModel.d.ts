import { AppModel } from "@/lib/models/Catalog/properties/AppModel";
import { PhoneModel } from "@/lib/models/Catalog/properties/PhoneModel";
import { PartnersModel } from "@/lib/models/Catalog/properties/PartnersModel";
import { ElementsModel } from "@/lib/models/Catalog/properties/ElementsModel";

export interface CatalogItemModel {
  readonly app: AppModel | null;
  readonly phone: PhoneModel | null;
  readonly partners: PartnersModel[] | null;

  readonly elements: ElementsModel[] | null;
}
