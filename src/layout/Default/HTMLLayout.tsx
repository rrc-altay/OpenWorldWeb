import React from "react";
import { Children } from "@/types/types";
import ScriptsLayout from "@/layout/Default/ScriptsLayout";
import HeadLayout from "@/layout/Default/HeadLayout";

const HTMLLayout = ({ children }: Children) => {
  return (
    <>
      <HeadLayout />
      {children}
      <ScriptsLayout />
    </>
  );
};

export default React.memo(HTMLLayout);
