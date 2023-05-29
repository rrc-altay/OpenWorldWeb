import {
  RoutesNamespace,
  RoutesNamespaceRU,
} from "@/lib/constants/routesNamespace";
import { aboutMock } from "@/lib/mock/aboutMock";

export const navigationMock = [
  { title: RoutesNamespaceRU.HOME, path: RoutesNamespace.HOME },
  { title: RoutesNamespaceRU.GOS_TASK, path: RoutesNamespace.GOS_TASK },
  { title: RoutesNamespaceRU.MAP, path: RoutesNamespace.MAP },
  { title: RoutesNamespaceRU.CONTACTS, path: RoutesNamespace.CONTACTS },
  { title: RoutesNamespaceRU.FEEDBACK, path: RoutesNamespace.FEEDBACK },
  {
    title: "Опрос граждан «Уровень доверия",
    path: aboutMock.yandexForm,
    target: "_blank",
  },
];
