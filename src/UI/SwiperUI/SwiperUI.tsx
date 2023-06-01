import React from "react";
import { ImageModel } from "@/lib/models/ImageModel";

import { BASE_URL } from "@/lib/constants";

import { useSwiperUIStyles } from "@/UI/SwiperUI/SwiperUI.styles";
import { useSwiperUI } from "@/UI/SwiperUI/useSwiperUI";

import SlideArrowLeft from "@/assets/icons/SlideArrowLeft.svg";
import SlideArrowRight from "@/assets/icons/SlideArrowRight.svg";
import { Pagination } from "swiper";

interface SwiperUIProps {
  title: string;
  data: ImageModel[];
}

const SwiperUI = ({ title, data }: SwiperUIProps) => {
  const { onSwiper, handlePressArrow } = useSwiperUI();
  const isArrow = data.length > 1;

  return (
    <SwiperSC
      loop={true}
      autoHeight={true}
      modules={[Pagination]}
      pagination={true}
      slidesPerView="auto"
      onSwiper={onSwiper}>
      {isArrow && (
        <PrevArrowSC onClick={handlePressArrow("prev")}>
          <SlideArrowLeft />
        </PrevArrowSC>
      )}
      {data.map((imageItem, index) => (
        <SwiperSlideSC key={imageItem.id}>
          <ImgSC
            src={`${BASE_URL}/${imageItem.src}`}
            alt={`Картинка ${index} на тему ${title}`}
          />
        </SwiperSlideSC>
      ))}
      {isArrow && (
        <NextArrowSC onClick={handlePressArrow("next")}>
          <SlideArrowRight />
        </NextArrowSC>
      )}
    </SwiperSC>
  );
};

const { SwiperSC, PrevArrowSC, NextArrowSC, SwiperSlideSC, ImgSC } =
  useSwiperUIStyles();

export default React.memo(SwiperUI);
