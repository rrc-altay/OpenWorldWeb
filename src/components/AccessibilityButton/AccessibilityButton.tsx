import React from "react";
import { useAccessibilityButtonStyles } from "@/components/AccessibilityButton/AccessibilityButton.styles";

const AccessibilityButton = () => {
  return (
    <ButtonSC id="specialButton">
      <IconSC />
      <span>Версия для слабовидящих</span>
    </ButtonSC>
  );
};

const { ButtonSC, IconSC } = useAccessibilityButtonStyles();

export default React.memo(AccessibilityButton);
