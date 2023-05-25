export const getRusDate = (date: string) =>
  new Date(date).toLocaleString("ru-RU", {
    dateStyle: "medium",
  });
