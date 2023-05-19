import React from "react";
import { Children } from "@/types/types";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "@/store/store";
import theme from "@/styles/theme/theme";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { GlobalStyles } from "@/styles/globalStyles";
import MainLayout from "@/layout/AppLayout/MainLayout/MainLayout";

const AppLayout = ({ children }: Children) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <MainLayout>{children}</MainLayout>
        <Footer />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
};

export default React.memo(AppLayout);
