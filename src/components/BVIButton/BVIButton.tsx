import React from "react";
import { useBVIButtonStyles } from "@/components/BVIButton/BVIButton.styles";
import { BVI_SETTINGS } from "@/init/BVIInit/constants";

const BVIButton = () => {
  return (
    <ButtonSC className={BVI_SETTINGS.TARGET}>
      <IconSC />
      <span>Версия для слабовидящих</span>
    </ButtonSC>
  );
};

const { ButtonSC, IconSC } = useBVIButtonStyles();

export default React.memo(BVIButton);
