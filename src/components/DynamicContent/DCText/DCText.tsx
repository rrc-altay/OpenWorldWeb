import React from "react";
import { Typography } from "@mui/material";
import { Children } from "@/types/types";

const DCText = ({ children }: Children) => {
  return <Typography variant="body1">{children}</Typography>;
};

export default React.memo(DCText);
