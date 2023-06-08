import React from "react";
import { Typography } from "@mui/material";
import { Children } from "@/types/types";
import { bviSpeech } from "@/lib/constants/bvi";

const DCText = ({ children }: Children) => {
  return (
    <Typography
      {...bviSpeech}
      variant="body1">
      {children}
    </Typography>
  );
};

export default React.memo(DCText);
