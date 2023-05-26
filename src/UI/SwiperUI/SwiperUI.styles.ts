import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Breakpoints } from "@/styles/breakpoints";

const SwiperSC = styled(Swiper)`
  position: relative;

  width: 100%;
  height: 100%;

  border-radius: 30px;
  overflow: hidden;

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    border-radius: 12px;
  }

  & > .swiper-pagination {
    position: static;
    margin-top: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
      margin-top: 16px;
    }

    & > .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      opacity: 1;
      background-color: ${ColorScheme.GRAY_LIGHT};

      @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
        width: 8px;
        height: 8px;
      }
    }
    & > .swiper-pagination-bullet-active {
      width: 14px;
      height: 14px;
      background-color: ${ColorScheme.PRIMARY};

      @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
        width: 12px;
        height: 12px;
      }
    }
  }
`;

const SwiperSlideSC = styled(SwiperSlide)``;

const ImgSC = styled("img")`
  width: 100%;
  height: 100%;

  max-height: 504px;

  border-radius: 30px;
  object-fit: cover;

  @media (max-width: ${Breakpoints.BIG_MOBILE}px) {
    border-radius: 12px;
  }
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

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    display: none;
  }
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
