import { useEffect, useRef, useState } from "react";
import { ContentPdfModel } from "@/lib/models/DynamicContent/properties/ContentPdfModel";

// TODO: Виджет гугла не всегда отображает iframe или очень долго его грузит. Из-за этого нужна доп. прослойка логики
export const usePdf = ({ autoOpen }: Pick<ContentPdfModel, "autoOpen">) => {
  //? collapse (open - true / hidden - false)
  const [isVisible, setIsVisible] = useState<boolean>(autoOpen);
  //? loading iframe
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //? ref iframe для события onload
  const ref = useRef<HTMLIFrameElement>(null);

  const handleChangeVisible = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    iframe.addEventListener("load", handleLoad);
    iframe.addEventListener("e", (e) => {
      console.log(e);
    });

    return () => {
      iframe.removeEventListener("load", handleLoad);
    };
  }, []);

  return {
    isVisible,
    isLoading,
    handleChangeVisible,
  };
};
