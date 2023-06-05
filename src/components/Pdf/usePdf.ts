import { useState } from "react";
import { ContentPdfModel } from "@/lib/models/DynamicContent/properties/ContentPdfModel";

// TODO: Виджет гугла не всегда отображает iframe или очень долго его грузит. Из-за этого нужна доп. прослойка логики
export const usePdf = ({ autoOpen }: Pick<ContentPdfModel, "autoOpen">) => {
  //? collapse (open - true / hidden - false)
  const [isVisible, setIsVisible] = useState<boolean>(autoOpen);

  const handleChangeVisible = () => {
    setIsVisible((prevState) => !prevState);
  };

  return {
    isVisible,
    handleChangeVisible,
  };
};
