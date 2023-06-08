import React from "react";
import { useAccessibilityButtonStyles } from "@/components/AccessibilityButton/AccessibilityButton.styles";
import { ACCESSIBILITY_TARGET_CLASSNAME } from "../../init/Accessibility/AccessibilityInit";

const AccessibilityButton = () => {
  return (
    <ButtonSC className={ACCESSIBILITY_TARGET_CLASSNAME}>
      <IconSC />
      <span>Версия для слабовидящих</span>
    </ButtonSC>
  );
};

const { ButtonSC, IconSC } = useAccessibilityButtonStyles();

export default React.memo(AccessibilityButton);
