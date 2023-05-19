import React from "react";
import { Children } from "@/types/types";
import MBanner from "@/components/Main/MBanner/MBanner";

const MainLayout = ({ children }: Children) => {
  return (
    <main>
      <MBanner />
      {children}
    </main>
  );
};

export default React.memo(MainLayout);
