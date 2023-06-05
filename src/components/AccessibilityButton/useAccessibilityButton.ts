import useAccessibilityStore from "@/components/AccessibilityButton/accessibilityStore";
import { useEffect } from "react";

const removeAttributes = (element: Element) => {
  for (let i = 0; i < element.attributes.length; i++) {
    element.removeAttribute(element.attributes[i].name);
  }
};

export const useAccessibilityButton = () => {
  const isLoadAccessibility = useAccessibilityStore(
    (state) => state.isLoadAccessibility,
  );

  useEffect(() => {
    if (isLoadAccessibility) {
      const bviPanel = document.querySelector(".bvi-panel");
      const bviBody = document.querySelector(".bvi-body");

      if (bviPanel) {
        bviPanel.remove();
      }
      if (bviBody) {
        bviBody.querySelector("a")?.remove();
        removeAttributes(bviBody);
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const { isvek } = window;
      new isvek.Bvi({
        reload: true,
        speech: false,
        panelHide: true,
        panelFixed: true,
      });
    }
  }, [isLoadAccessibility]);

  return {};
};
