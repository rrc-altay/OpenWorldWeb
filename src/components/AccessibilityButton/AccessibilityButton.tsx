import React from "react";
import { useAccessibilityButtonStyles } from "@/components/AccessibilityButton/AccessibilityButton.styles";
import { useAccessibilityButton } from "@/components/AccessibilityButton/useAccessibilityButton";

const AccessibilityButton = () => {
  useAccessibilityButton();

  return (
    <ButtonSC className="bvi-open">
      <IconSC />
      <span>Версия для слабовидящих</span>
    </ButtonSC>
  );
};

const { ButtonSC, IconSC } = useAccessibilityButtonStyles();

export default React.memo(AccessibilityButton);
