import React from "react";
import { useHAboutStyles } from "@/components/Header/HAbout/HAbout.styles";
import HAboutItem from "@/components/Header/HAbout/HAItem/HAItem";
import PlaceIcon from "@/assets/icons/PlaceIcon.svg";
import TimeIcon from "@/assets/icons/TimeIcon.svg";
import PhoneIcon from "@/assets/icons/PhoneIcon.svg";
import { aboutMock } from "@/lib/mock/aboutMock";

const HAbout = () => {
  return (
    <ContainerSC>
      <HAboutItem
        Icon={PlaceIcon}
        title={aboutMock.place}
      />
      <HAboutItem
        Icon={TimeIcon}
        title={aboutMock.time}
      />
      <HAboutItem
        Icon={PhoneIcon}
        title={aboutMock.phone.formatPhone}
        href={`tel:${aboutMock.phone.number}`}
      />
    </ContainerSC>
  );
};

const { ContainerSC } = useHAboutStyles();

export default React.memo(HAbout);
