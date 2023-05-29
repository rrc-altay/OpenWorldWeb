import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useHDrawer = () => {
  const { pathname } = useRouter();
  const [isDrawer, setIsDrawer] = useState<boolean>(false);

  const handleChangeDrawer = (state: boolean) => {
    return () => {
      setIsDrawer(state);
    };
  };

  const handleClick = (path: string) => {
    return () => {
      if (path === pathname) {
        setIsDrawer(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  };

  useEffect(() => {
    if (pathname && isDrawer) {
      setIsDrawer(false);
    }
  }, [pathname]);

  return {
    isDrawer,
    handleClick,
    handleChangeDrawer,
  };
};
