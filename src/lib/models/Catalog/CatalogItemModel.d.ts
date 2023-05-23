import { AppModel } from "@/lib/models/Catalog/properties/AppModel";
import { PhoneModel } from "@/lib/models/Catalog/properties/PhoneModel";
import { PartnersModel } from "@/lib/models/Catalog/properties/PartnersModel";
import { ElementsModel } from "@/lib/models/Catalog/properties/ElementsModel";

export interface CatalogItemModel {
  app: AppModel | null;
  phone: PhoneModel | null;
  partners: PartnersModel | null;

  elements: ElementsModel[] | null;
}
