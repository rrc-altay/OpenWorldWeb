import { RoutesNamespace } from "@/lib/constants/routesNamespace";

export const getRusDate = (date: string) =>
  new Date(date).toLocaleString("ru-RU", {
    dateStyle: "medium",
  });

export const telephoneMask = (state: string) => {
  let inputNumbersValue = state.replace(/[\D]+/g, "");

  let formattedInputValue = "";

  /*! Если пустая строка */
  if (!inputNumbersValue) {
    return "";
  }
  if (inputNumbersValue[0].match(/[1-6, 9]/))
    inputNumbersValue = "7" + inputNumbersValue;
  formattedInputValue = "+7 ";
  if (inputNumbersValue.length > 1) {
    formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
  }
  if (inputNumbersValue.length >= 5) {
    formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
  }
  if (inputNumbersValue.length >= 8) {
    formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
  }
  if (inputNumbersValue.length >= 10) {
    formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
  }

  if (state.length >= 0 && state.length <= 18) {
    return formattedInputValue;
  }
  return formattedInputValue;
};

export const getDynamicPath = (path: string, isDynamic = true) => {
  //? Исключаемые rotes, которые приходят с api каталога, но жестко забиты в page
  if (path === RoutesNamespace.HOME || path === RoutesNamespace.GOS_TASK) {
    return path;
  }
  return `${isDynamic ? RoutesNamespace.DYNAMIC + "/" : ""}${path}`;
};

export const checkIsOdd = (length: number) => {
  return length % 2 == 0;
};
