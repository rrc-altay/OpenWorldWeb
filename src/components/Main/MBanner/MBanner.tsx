import React from "react";
import AccessibilityButton from "@/components/AccessibilityButton/AccessibilityButton";
import { useMBannerStyles } from "@/components/Main/MBanner/MBanner.styles";

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

const { ContainerSC, WrapperSC, ImageSC, AccessibilityContainerSC } =
  useMBannerStyles();
export default React.memo(MBanner);
