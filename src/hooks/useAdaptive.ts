import { useMediaQuery } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

export const useBigTablet = () =>
  useMediaQuery(`(max-width: ${Breakpoints.BIG_TABLET}px)`);
export const useBigMobile = () =>
  useMediaQuery(`(max-width: ${Breakpoints.BIG_MOBILE}px)`);
