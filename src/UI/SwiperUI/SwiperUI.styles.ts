import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const SwiperSC = styled(Swiper)`
  position: relative;

  width: 100%;
  height: 100%;

  max-width: 704px;

  & > .swiper-wrapper {
    border-radius: 30px;

    & > *:first-child > img {
      border-radius: 30px 0 0 30px;
    }

    & > *:last-child > img {
      border-radius: 0 30px 30px 0;
    }
  }

  & > .swiper-pagination {
    position: static;
    margin-top: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    & > .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      opacity: 1;
      background-color: ${ColorScheme.GRAY_LIGHT};
    }
    & > .swiper-pagination-bullet-active {
      width: 14px;
      height: 14px;
      background-color: ${ColorScheme.PRIMARY};
    }
  }
`;

const SwiperSlideSC = styled(SwiperSlide)``;

const ImgSC = styled("img")`
  width: 100%;
  height: 100%;

  max-height: 504px;

  object-fit: cover;
`;

const PrevArrowSC = styled("button")`
  width: 55px;
  height: 52px;

  position: absolute;
  left: 17px;
  top: 50%;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  transform: translateY(-50%);
`;

const NextArrowSC = styled(PrevArrowSC)`
  left: auto;
  right: 17px;
`;

export const useSwiperUIStyles = () => ({
  SwiperSC,
  PrevArrowSC,
  NextArrowSC,
  SwiperSlideSC,
  ImgSC,
});
