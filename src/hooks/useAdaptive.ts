import { useMediaQuery } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

export const useBigMobile = () =>
  useMediaQuery(`(max-width: ${Breakpoints.BIG_MOBILE}px)`);
