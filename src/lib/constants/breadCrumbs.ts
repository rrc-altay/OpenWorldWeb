import { BreadCrumbsArr } from "@/lib/models/BreadCrumbsModel";
import {
  RoutesNamespace,
  RoutesNamespaceRU,
} from "@/lib/constants/routesNamespace";

export const homeBreadCrumbs: BreadCrumbsArr = [
  { href: RoutesNamespace.HOME, title: RoutesNamespaceRU.NEWS },
];
