import React from "react";
import { useGUInit } from "./useGUInit";
import Script from "next/script";

const GosUslugiInit = () => {
  const { onLoad } = useGUInit();

  return (
    <Script
      defer
      strategy="afterInteractive"
      src="https://pos.gosuslugi.ru/bin/script.min.js"
      onLoad={onLoad}
    />
  );
};

export default React.memo(GosUslugiInit);
