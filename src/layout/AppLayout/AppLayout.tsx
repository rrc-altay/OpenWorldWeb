import React from "react";
import { Children } from "@/types/types";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "@/store/store";
import theme from "@/styles/theme/theme";
import Header from "@/components/Header/Header";
import { GlobalStyles } from "@/styles/globalStyles";

const AppLayout = ({ children }: Children) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
};

export default React.memo(AppLayout);
