import { useState } from "react";

export const useHDrawer = () => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);

  const handleChangeDrawer = (state: boolean) => {
    return () => {
      setIsDrawer(state);
    };
  };

  return {
    isDrawer,
    handleChangeDrawer,
  };
};
