import useAccessibilityStore from "@/components/AccessibilityButton/accessibilityStore";
import { useEffect } from "react";
import { useRouter } from "next/router";

const removeAttributes = (element: Element) => {
  for (let i = 0; i < element.attributes.length; i++) {
    element.removeAttribute(element.attributes[i].name);
  }
};

const changeBody = (opacity: "0" | "1", overflowY: "scroll" | "hidden") => {
  document.body.style.opacity = opacity;
  document.body.style.overflowY = overflowY;
};

export const useAccessibilityButton = () => {
  const { asPath } = useRouter();

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
        changeBody("0", "hidden");
        bviBody.querySelector("a")?.remove();
        removeAttributes(bviBody);
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const { isvek } = window;

      setTimeout(() => {
        new isvek.Bvi({
          speech: false,
          panelHide: true,
          panelFixed: true,
        });
        changeBody("1", "scroll");
      }, 2000);
    }
  }, [isLoadAccessibility, asPath]);
};
