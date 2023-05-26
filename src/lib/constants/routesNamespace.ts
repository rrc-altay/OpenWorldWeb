export enum RoutesNamespace {
  HOME = "/",
  GOS_TASK = "/gosudarstvennoe-zadanie",
  MAP = "/karta",
  CONTACTS = "/kontakti",
  FEEDBACK = "/obratnaya-svyaz",
  SURVEY = "/opros-grazhdan",
  NOT_FOUND = "/404",
  ERROR = "/500",
  NEWS = "/news",
}

export const RoutesNamespaceRU: {
  [key in keyof typeof RoutesNamespace]: string;
} = {
  HOME: "Главная",
  NEWS: "Новости",
  GOS_TASK: "Государственное задание",
  MAP: "Карта сайта",
  CONTACTS: "Контакты",
  FEEDBACK: "Обратная связь",
  SURVEY: "Опрос граждан «Уровень доверия»",
  NOT_FOUND: "",
  ERROR: "",
};
