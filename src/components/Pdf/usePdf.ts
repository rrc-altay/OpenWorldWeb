import { useEffect, useRef, useState } from "react";
import { ContentPdfModel } from "@/lib/models/DynamicContent/properties/ContentPdfModel";

// TODO: Виджет гугла не всегда отображает iframe или очень долго его грузит. Из-за этого нужна доп. прослойка логики
export const usePdf = ({ autoOpen }: Pick<ContentPdfModel, "autoOpen">) => {
  //? collapse (open - true / hidden - false)
  const [isVisible, setIsVisible] = useState<boolean>(autoOpen);
  //? loading iframe
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //? Render iframe (нужно для повторной попытки загрузить iframe, т.к. это виджет)
  const [isRender, setIsRender] = useState<boolean>(true);
  //? ref iframe для события onload
  const ref = useRef<HTMLIFrameElement>(null);

  const handleChangeVisible = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  //? ждем загрузки iframe, при этом учитываем верстку по условию (если isRender то покажи iframe, чтобы ref был актуальной ссылкой на дом дерево)
  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    iframe.addEventListener("load", handleLoad);

    return () => {
      iframe.removeEventListener("load", handleLoad);
    };
  }, [isRender]);

  //? Интервальная попытка переполучить iframe
  useEffect(() => {
    if (!isLoading) return;

    //? Раз в 5 секунд происходит пересоздание iframe для повторной загрузки
    const interval = setInterval(() => {
      setIsRender(false);
      setTimeout(() => {
        setIsRender(true);
      }, 1000);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [isLoading]);

  return {
    ref,
    isRender,
    isLoading,
    isVisible,
    handleChangeVisible,
  };
};
