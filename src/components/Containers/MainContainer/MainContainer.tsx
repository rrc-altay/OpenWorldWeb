import React from "react";
import MainLayout from "@/layout/AppLayout/MainLayout/MainLayout";
import { Children } from "@/types/types";
import Footer from "@/components/Footer/Footer";

const MainContainer = ({ children }: Children) => {
  return (
    <>
      <MainLayout>{children}</MainLayout>
      <Footer />
    </>
  );
};

export default React.memo(MainContainer);
