import { useState } from "react";
import Swiper from "swiper";

export const useSwiperUI = () => {
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  const onSwiper = (swiperInstance: Swiper) => {
    setSwiper(swiperInstance);
  };

  const handlePressArrow = (slide: "prev" | "next") => {
    return () => {
      if (swiper) {
        if (slide === "prev") {
          swiper.slidePrev();
          return;
        }
        swiper.slideNext();
      }
    };
  };

  return {
    onSwiper,
    handlePressArrow,
  };
};
