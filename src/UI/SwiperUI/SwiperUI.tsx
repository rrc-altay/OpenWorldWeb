import React from "react";
import { ImageModel } from "@/lib/models/ImageModel";

import { BASE_URL } from "@/lib/constants";

import { useSwiperUIStyles } from "@/UI/SwiperUI/SwiperUI.styles";
import { useSwiperUI } from "@/UI/SwiperUI/useSwiperUI";

import SlideArrowLeft from "@/assets/icons/SlideArrowLeft.svg";
import SlideArrowRight from "@/assets/icons/SlideArrowRight.svg";
import { Pagination } from "swiper";

interface SwiperUIProps {
  data: ImageModel[];
}

const SwiperUI = ({ data }: SwiperUIProps) => {
  const { onSwiper, handlePressArrow } = useSwiperUI();
  const isArrow = data.length > 1;

  return (
    <SwiperSC
      onSwiper={onSwiper}
      pagination={true}
      modules={[Pagination]}>
      {isArrow && (
        <PrevArrowSC onClick={handlePressArrow("prev")}>
          <SlideArrowLeft />
        </PrevArrowSC>
      )}
      {data.map((imageItem) => (
        <SwiperSlideSC key={imageItem.id}>
          <ImgSC src={`${BASE_URL}/${imageItem.src}`} />
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
