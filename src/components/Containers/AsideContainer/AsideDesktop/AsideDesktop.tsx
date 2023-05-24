import React from "react";
import Aside from "@/components/Containers/AsideContainer/Aside/Aside";
import { styled } from "@mui/material";
import { useAsideDesktop } from "@/components/Containers/AsideContainer/AsideDesktop/useAsideDesktop";
import { AsideContainerProps } from "@/components/Containers/AsideContainer/types";

const AsideDesktop = ({ catalog, children }: AsideContainerProps) => {
  const { leftAside, rightAside } = useAsideDesktop(catalog);

  return (
    <ContainerSC>
      <Aside catalog={leftAside} />
      {children}
      <Aside catalog={rightAside} />
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  display: flex;
`;

export default React.memo(AsideDesktop);
