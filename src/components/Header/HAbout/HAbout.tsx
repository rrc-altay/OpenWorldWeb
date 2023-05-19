import React from "react";
import { useHAboutStyles } from "@/components/Header/HAbout/HAbout.styles";
import HAboutItem from "@/components/Header/HAbout/HAItem/HAItem";
import PlaceIcon from "@/assets/icons/PlaceIcon.svg";
import TimeIcon from "@/assets/icons/TimeIcon.svg";
import PhoneIcon from "@/assets/icons/PhoneIcon.svg";
import { about } from "@/lib/mock/about";

const HAbout = () => {
  return (
    <ContainerSC>
      <HAboutItem
        Icon={PlaceIcon}
        title={about.place}
      />
      <HAboutItem
        Icon={TimeIcon}
        title={about.time}
      />
      <HAboutItem
        Icon={PhoneIcon}
        title={about.phone.formatPhone}
        href={`tel:${about.phone.number}`}
      />
    </ContainerSC>
  );
};

const { ContainerSC } = useHAboutStyles();

export default React.memo(HAbout);
