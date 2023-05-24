import React from "react";
import AsideDesktop from "@/components/Containers/AsideContainer/AsideDesktop/AsideDesktop";
import { AsideContainerProps } from "@/components/Containers/AsideContainer/types";
import { useBigTablet } from "@/hooks/useAdaptive";
import AsideMobile from "@/components/Containers/AsideContainer/AsideMobile/AsideMobile";

const AsideContainer = ({ children, catalog = [] }: AsideContainerProps) => {
  const isBigTablet = useBigTablet();

  const Container = isBigTablet ? AsideMobile : AsideDesktop;

  return <Container catalog={catalog}>{children}</Container>;
};

export default React.memo(AsideContainer);
