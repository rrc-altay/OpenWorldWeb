import React from "react";
import { AsideContainerProps } from "@/components/Containers/AsideContainer/types";

const AsideMobile = ({ children }: AsideContainerProps) => {
  return <>{children}</>;
};

export default React.memo(AsideMobile);
