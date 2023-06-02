import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { scriptsMock } from "@/lib/mock/scriptsMock";
import { loadScript } from "@/lib/services/services";

const loadAllScripts = async () => {
  try {
    await loadScript(scriptsMock.jQuery);
    await loadScript(scriptsMock.visible);
    await loadScript(scriptsMock.gosUslugi);
  } catch (e) {
    throw new Error("ошибка загрузки скриптов");
  }
};

const ScriptsLayout = () => {
  const router = useRouter();

  useEffect(() => {
    loadAllScripts().then();

    return () => {
      const loadScripts = document.querySelectorAll("#loadScript");
      for (let i = 0; i < loadScripts.length; i++) {
        document.body.removeChild(loadScripts[i]);
      }
    };
  }, [router.pathname]);

  return null;
};

export default React.memo(ScriptsLayout);
