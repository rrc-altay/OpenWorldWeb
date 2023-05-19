import React from "react";
import { useHAboutStyles } from "@/components/Header/HAbout/HAbout.styles";
import HAboutItem from "@/components/Header/HAbout/HeaderAboutItem/HAboutItem";
import PlaceIcon from "@/assets/icons/PlaceIcon.svg";
import TimeIcon from "@/assets/icons/TimeIcon.svg";
import PhoneIcon from "@/assets/icons/PhoneIcon.svg";
import { headerAbout } from "@/lib/mock/headerAbout";

const HAbout = () => {
  return (
    <ContainerSC>
      <HAboutItem
        Icon={PlaceIcon}
        title={headerAbout.place}
      />
      <HAboutItem
        Icon={TimeIcon}
        title={headerAbout.time}
      />
      <HAboutItem
        Icon={PhoneIcon}
        title={headerAbout.phone.formatPhone}
        href={`tel:${headerAbout.phone.number}`}
      />
    </ContainerSC>
  );
};

const { ContainerSC } = useHAboutStyles();

export default React.memo(HAbout);
