import React from "react";
import { PhoneModel } from "@/lib/models/Catalog/properties/PhoneModel";
import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import InfoIcon from "@/assets/icons/InfoIcon.svg";
import WaveLeftIcon from "@/assets/icons/WaveLeftIcon.svg";
import WaveMiddleIcon from "@/assets/icons/WaveMiddleIcon.svg";
import { zIndexes } from "@/styles/zIndexes";
import { Breakpoints } from "@/styles/breakpoints";

interface AIPhoneProps {
  phone: PhoneModel;
}

const AIPhone = ({ phone }: AIPhoneProps) => {
  return (
    <ContainerSC>
      <TelSC href={`tel:${phone.phoneNumber}`}>{phone.formatNumber}</TelSC>
      <InfoSC
        href={phone.link}
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

const ContainerSC = styled("div")`
  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 16px 20px 24px;
  background-color: ${ColorScheme.PRIMARY_LIGHT};

  border-radius: 20px;

  border: 1px solid ${ColorScheme.MAIN};
`;

const TelSC = styled("a")`
  display: block;

  color: ${ColorScheme.MAIN};

  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  margin-right: 16px;

  z-index: ${zIndexes.UPPER};

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    font-size: 18px;
  }
`;

const InfoSC = styled("a")`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  background-color: ${ColorScheme.MAIN};
  border-radius: 50%;

  z-index: ${zIndexes.UPPER};
  border: 1px solid ${ColorScheme.MAIN};
`;

const IconSC = styled(InfoIcon)`
  width: 28px;
  height: 28px;

  & > g > path {
    fill: ${ColorScheme.PRIMARY_THREE};
    stroke: ${ColorScheme.PRIMARY_THREE};
  }
`;

const WaveContainerSC = styled("div")`
  position: absolute;

  left: -1px;
  bottom: -5px;

  z-index: ${zIndexes.DEFAULT};
`;
const WaveTwoContainerSC = styled("div")`
  position: absolute;

  left: 50%;
  top: 0;
  z-index: ${zIndexes.DEFAULT};

  transform: translateX(-50%);
`;

export default React.memo(AIPhone);
