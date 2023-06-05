import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { scriptsMock } from "@/lib/mock/scriptsMock";
import { loadScript } from "@/lib/services/services";
import useWidgetsStore from "@/components/GosUslugi/widgetsStore";
import useAccessibilityStore from "@/components/AccessibilityButton/accessibilityStore";

const ScriptsLayout = () => {
  const router = useRouter();

  const changeLoadGosUslugi = useWidgetsStore(
    (state) => state.changeLoadGosUslugi,
  );

  const changeLoadAccessibility = useAccessibilityStore(
    (state) => state.changeLoadAccessibility,
  );

  const loadAllScripts = async () => {
    try {
      // ПОРЯДОК МЕНЯТЬ ЗАПРЕЩЕНО
      await loadScript(scriptsMock.gosUslugi).then(() => {
        changeLoadGosUslugi(true);
      });
      await loadScript(scriptsMock.localAccessibility).then(() => {
        changeLoadAccessibility(true);
      });
    } catch (e) {
      throw new Error("ошибка загрузки скриптов");
    }
  };

  useEffect(() => {
    loadAllScripts().then();

    return () => {
      const loadScripts = document.querySelectorAll("#loadScript");
      for (let i = 0; i < loadScripts.length; i++) {
        loadScripts[i].remove();
      }
    };
  }, [router.pathname]);

  return null;
};

export default React.memo(ScriptsLayout);
