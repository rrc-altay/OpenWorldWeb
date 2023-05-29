import React from "react";
import { PhoneModel } from "@/lib/models/Catalog/properties/PhoneModel";
import WaveLeftIcon from "@/assets/icons/WaveLeftIcon.svg";
import WaveMiddleIcon from "@/assets/icons/WaveMiddleIcon.svg";
import { useAIPhoneStyles } from "@/components/Containers/AsideContainer/AsideItem/AIPhone/AIPhone.styles";
import { BASE_URL } from "@/lib/constants";

interface AIPhoneProps {
  phone: PhoneModel;
}

const AIPhone = ({ phone }: AIPhoneProps) => {
  return (
    <ContainerSC>
      <TelSC href={`tel:${phone.phoneNumber}`}>{phone.formatNumber}</TelSC>
      <InfoSC
        href={`${BASE_URL}${phone.link}`}
        target="_blank"
        rel="noopener noreferrer">
        <IconSC />
      </InfoSC>
      <WaveContainerSC>
        <WaveLeftIcon />
      </WaveContainerSC>
      <WaveTwoContainerSC>
        <WaveMiddleIcon />
      </WaveTwoContainerSC>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  TelSC,
  InfoSC,
  IconSC,
  WaveContainerSC,
  WaveTwoContainerSC,
} = useAIPhoneStyles();
export default React.memo(AIPhone);
