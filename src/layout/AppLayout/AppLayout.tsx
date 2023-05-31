import React from "react";
import { Children } from "@/types/types";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme/theme";
import Header from "@/components/Header/Header";
import { GlobalStyles } from "@/styles/globalStyles";
import FontFace from "@/styles/fontFace";

const AppLayout = ({ children }: Children) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <GlobalStyles />
      <FontFace />
    </ThemeProvider>
  );
};

export default React.memo(AppLayout);
