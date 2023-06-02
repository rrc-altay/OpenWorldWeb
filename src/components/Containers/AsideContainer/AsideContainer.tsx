import React from "react";
import AsideDesktop from "@/components/Containers/AsideContainer/AsideDesktop/AsideDesktop";
import { AsideContainerProps } from "@/components/Containers/AsideContainer/types";
import AsideMobile from "@/components/Containers/AsideContainer/AsideMobile/AsideMobile";
import { styled } from "@mui/material";
import { Breakpoints } from "@/styles/breakpoints";

const AsideContainer = ({ children, catalog = [] }: AsideContainerProps) => {
  return (
    <ContainerSC>
      <AsideDesktop catalog={catalog}>{children}</AsideDesktop>
      <AsideMobile catalog={catalog}>{children}</AsideMobile>
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  & > *:last-child {
    display: none;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    & > *:first-child {
      display: none;
    }

    & > *:last-child {
      display: block;
    }
  }
`;

export default React.memo(AsideContainer);
