import React from "react";
import { BviConfig } from "./types";
import Script from "next/script";

export const ACCESSIBILITY_CONFIG: BviConfig = {
  target: ".bvi-open",
  speech: false,
  panelHide: false,
  panelFixed: false,
};
export const ACCESSIBILITY_TARGET_CLASSNAME =
  ACCESSIBILITY_CONFIG.target?.slice(1) || "";

const AccessibilityInit = () => {
  return (
    <Script
      defer
      strategy="afterInteractive"
      src="/assets/modules/bvi/js/bvi.js"
      onLoad={() => {
        new window.isvek.Bvi(ACCESSIBILITY_CONFIG);
        document.body.style.opacity = "1";
      }}
      onError={() => {
        document.body.style.opacity = "1";
      }}
    />
  );
};

export default React.memo(AccessibilityInit);
