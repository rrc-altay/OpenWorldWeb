import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { scriptsMock } from "@/lib/mock/scriptsMock";
import { loadScript } from "@/lib/services/services";
import useWidgetsStore from "@/components/GosUslugi/widgetsStore";

const ScriptsLayout = () => {
  const router = useRouter();

  const changeLoadGosUslugi = useWidgetsStore(
    (state) => state.changeLoadGosUslugi,
  );

  const loadAllScripts = async () => {
    try {
      // ПОРЯДОК МЕНЯТЬ ЗАПРЕЩЕНО
      await loadScript(scriptsMock.gosUslugi).then(() => {
        changeLoadGosUslugi(true);
      });
      // await loadScript(scriptsMock.jQuery);
      // await loadScript(scriptsMock.visible);
    } catch (e) {
      throw new Error("ошибка загрузки скриптов");
    }
  };

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
