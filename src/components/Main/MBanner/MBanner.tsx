import React from "react";
import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import AccessibilityButton from "@/components/AccessibilityButton/AccessibilityButton";

const MBanner = () => {
  return (
    <ContainerSC>
      <WrapperSC className="container p-0">
        <ImageSC
          src="https://placehold.co/1920x416"
          alt="placeholder"
        />
        <AccessibilityContainerSC>
          <AccessibilityButton />
        </AccessibilityContainerSC>
      </WrapperSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  width: 100%;
  height: 416px;
  background: ${ColorScheme.PRIMARY};
`;

const WrapperSC = styled("div")`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const AccessibilityContainerSC = styled("div")`
  position: absolute;
  top: 32px;
  right: -240px;
  transition: 0.3s all linear;
  &:hover {
    right: 0;
  }
`;

const ImageSC = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default React.memo(MBanner);
