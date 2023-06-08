import React from "react";
import AccessibilityInit from "../../init/Accessibility/AccessibilityInit";
import GosUslugiInit from "../../init/GosUslugiInit/GosUslugiInit";

const ScriptsLayout = () => {
  return (
    <>
      <AccessibilityInit />
      <GosUslugiInit />
    </>
  );
};

export default React.memo(ScriptsLayout);
