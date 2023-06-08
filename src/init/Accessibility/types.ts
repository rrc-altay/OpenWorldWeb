//? https://github.com/veks/button-visually-impaired-javascript#settings
export interface BviConfig {
  target?: string; // Класс ссылки включения плагина
  theme?: "white" | "black" | "blue" | "brown" | "green"; // Цвет сайта
  fontFamily?: "arial" | "times"; // Шрифт
  letterSpacing?: "normal" | "average" | "big"; // Межбуквенный интервал
  lineHeight?: "normal" | "average" | "big"; // Междустрочный интервал
  speech?: boolean; // Синтез речи
  images?: boolean | "grayscale"; // Изображения
  reload?: boolean; // Перезагрузка страницы при выключении плагина
  panelFixed?: boolean; // Фиксирование панели для слабовидящих вверху страницы
  builtElements?: boolean; // Встроенные элементы (видео, карты и тд.)
  panelHide?: boolean; // Скрывает панель для слабовидящих и показывает иконку панели.
  lang?: "ru-RU" | "en-US";
  fontSize?: // Размер шрифта (1 - 39)
  | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36
    | 37
    | 38
    | 39;
}
