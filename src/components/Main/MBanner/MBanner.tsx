import React from "react";
import BVIButton from "@/components/BVIButton/BVIButton";
import { useMBannerStyles } from "@/components/Main/MBanner/MBanner.styles";
import { Breakpoints } from "@/styles/breakpoints";
import { aboutMock } from "@/lib/mock/aboutMock";

const MBanner = () => {
  return (
    <ContainerSC>
      <picture>
        <source
          srcSet="/assets/images/DBanner.jpg"
          media={`(min-width: ${Breakpoints.BIG_TABLET}px)`}
        />
        <source
          srcSet="/assets/images/TBanner.jpg"
          media={`(min-width: ${Breakpoints.BIG_MOBILE}px)`}
        />
        <ImageSC
          src="/assets/images/MBanner.jpg"
          alt="банер"
        />
      </picture>
      <AccessibilityContainerSC>
        <BVIButton />
      </AccessibilityContainerSC>
      <WrapperSC className="container-two bvi-no-styles">
        <LogoSC
          src="/assets/images/Logo.png"
          alt="логотип"
        />
        <TitleSC>{aboutMock.name}</TitleSC>
        <TitleMobileSC>{aboutMock.nameMobile}</TitleMobileSC>
      </WrapperSC>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  WrapperSC,
  ImageSC,
  AccessibilityContainerSC,
  LogoSC,
  TitleSC,
  TitleMobileSC,
} = useMBannerStyles();
export default React.memo(MBanner);
