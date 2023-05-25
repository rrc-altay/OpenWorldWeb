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

  useEffect(() => {
    if (pathname && isDrawer) {
      setIsDrawer(false);
    }
  }, [pathname]);

  return {
    isDrawer,
    handleChangeDrawer,
  };
};
